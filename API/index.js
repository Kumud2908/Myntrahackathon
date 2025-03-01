const express=require('express');
const app=express();
const mongoose=require("mongoose");
const helmet=require("helmet");
const dotenv=require("dotenv");
const morgan=require("morgan");
const userRoute=require("./routes/users")
const authRoute=require("./routes/auth")
const postRoute=require("./routes/posts")


const multer  = require('multer')
const path=require("path")


dotenv.config();

mongoose.connect(
    process.env.MONGO_URL)
.then(()=>console.log("DB connection succesfull"))
.catch((err)=>{
    console.log(err);

});
app.use("/image",express.static(path.join(__dirname,"public/image")))
//middleware 
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/image');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);

    },
    
})

const upload=multer({storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    try{
        return res.status(200).json("File uploade successfully");
    }catch(err){
        console.log(err)
    }

})
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);



app.listen(8800,()=>{
    console.log("Backend server is running")
})