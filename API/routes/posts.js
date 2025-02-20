const router=require("express").Router();
const Post=require("../models/Post")
const User=require("../models/User")

//ceate a post
router.post("/",async(req,res)=>{
    const newPost=new Post(req.body)
    try{ 
        const savedPost=await newPost.save();
        res.status(200).json(savedPost);

    }catch{
        res.status(500).json(err)
    }
})
//update a post
router.put("/:id", async (req,res)=>{
    try{
    const post= await Post.findById(req.params.id);
    if(post.userId===req.body.userId){ 
        await post.updateOne({$set:req.body});
        res.status(200).json("the post is has been updated");

    }else{
        res.status(403).json("ypu can update only your post");
    }
}catch(err){
    res.status(500).json(err)

}

})

//delete a post
router.delete("/:id", async (req,res)=>{
    try{
    const post= await Post.findById(req.params.id);
    if(post.userId===req.body.userId){ 
        await post.deleteOne({$set:req.body});
        res.status(200).json("the post is has been deleted");

    }else{
        res.status(403).json("ypu can delete only your post");
    }
}catch(err){
    res.status(500).json(err)

}

})
//like apost
router.put("/:id/like",async(req,res)=>{
    try{
    const post =await Post.findById(req.params.id);
    if(!post.likes.includes(req.body.userId)){
        await post.updateOne({$push:{likes:req.body.userId}});
        res.status(200).json("The post has been liked")

    }else{
        await post.updateOne({$pull:{likes:req.body.userId}});
        res.status(200).json("The post is disliked");
    }
    }catch(err){
        res.status(500).json(err);
    }

})
//get a post
router.get("/:id",async(req,res)=>{
    try{
        const post= await Post.findById(req.params.id);
        res.status(200).json(post);

    }catch(err){
        res.status(500).json(err);

    }
})
//get timeline posts


router.get("/timeline/:userId", async (req, res) => {
    try {
        const temp = req.params.userId;
        const currentUser = await User.findById(temp);
        console.log("Current User:", currentUser);

        const userPosts = await Post.find({ userId: currentUser._id });
        console.log("User Posts:", userPosts);

        const friendPosts = await Promise.all(
            currentUser.followers.map(friendId => {
                return Post.find({ userId: friendId });
            })
        );

        console.log("Friend Posts (array of arrays):", friendPosts);

        // Flatten the array of arrays
        const allPosts = userPosts.concat(...friendPosts.flat());
        console.log("All Posts:", allPosts);

        res.status(200).json(allPosts);
    } catch (err) {
        console.error("Error fetching timeline posts:", err);
        res.status(500).json(err);
    }
});

//top posts
router.get('/popular/top', async (req, res) => {
    try {
        const posts = await Post.find()
            .sort({ likesCount: -1 })
            .limit(2);

        res.status(200).json(posts);
    } catch (err) {
        console.error("Error fetching top users:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});




router.get("/",(req,res)=>{
    console.log("post page")
})

module.exports=router;