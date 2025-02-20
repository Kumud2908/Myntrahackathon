const User=require("../models/User");
const router=require("express").Router();
const bcrypt=require("bcrypt");
const Post=require("../models/Post");

//update user
router.put("/:id",async(req,res)=>{
    if(req.body.userId==req.params.id || req.user.isAdmin){
        if(req.body.password){
            try{
                const salt=await bcrypt.genSalt(10);
                req.body.password=await bcrypt.hash(req.body.password,salt);
            }catch(err){
                return res.status(500).json(err);
            }
        }
        try{
            const user=await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            });
            res.status(200).json("Account has been updated")
        }catch(err){
            return res.status(500).json(err);

        }
    }else{
        return res.status(403).json("you can update lonly ypu account")
    }
})
//delete user
router.delete("/:id",async(req,res)=>{
    if(req.body.userId==req.params.id || req.body.isAdmin){
        
        try{
            const user=await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been delted successsfully")
        }catch(err){
            return res.status(500).json(err);

        }
    }else{
        return res.status(403).json("you can update only your account")
    }
});
//get a user
router.get("/:id",async (req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        
        const{password,updatedAt,...other}=user._doc
        res.status(200).json(other)

    }catch(err){
        res.status(500).json(err)
    }
});
//get top users
router.get('/timeline/top-users', async (req, res) => {
    try {
        const users = await User.find()
            .sort({ followings: -1 })
            .limit(2);

        res.status(200).json(users);
    } catch (err) {
        console.error("Error fetching top users:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});
//get users all posts
router.get('/profile/:username', async (req, res) => {
    try {
        const user=await User.findOne({username:req.params.username})
        const posts=await Post.findOne({userId:user})
        res.status(200).json(posts);
       
    } catch (err) {
        console.error("Error fetching top users:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});


// follow a user 
router.put("/:id/follow",async (req,res)=>{
    if(req.body.userId!== req.params.id){
        try{
            const user=await User.findById(req.params.id);
            const currentUser =await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}});
                await currentUser.updateOne({$push:{followings:req.params.id}});
                res.status(200).json("user has been folowed")
            }else{
                res.status(403).json("you already follow this user")
            }
        }catch(err){
            res.status(500).json(err);
        }
        
    }else{
        res.status(403).json("ypu cant follow yourself try others")
    }

})
//unfollow
router.put("/:id/unfollow",async (req,res)=>{
    if(req.body.userId!== req.params.id){
        try{
            const user=await User.findById(req.params.id);
            const currentUser =await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers:req.body.userId}});
                await currentUser.updateOne({$pull:{followings:req.params.id}});
                res.status(200).json("user has been unfollowed")
            }else{
                res.status(403).json("you don't follow this user")
            }
        }catch(err){
            res.status(500).json(err);
        }
        
    }else{
        res.status(403).json("ypu cant unfollow yourself try others")
    }

})


module.exports=router