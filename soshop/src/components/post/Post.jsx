import React, { useState } from 'react'
import{MoreVert,ThumbUp,Favorite} from "@mui/icons-material";
import { useEffect } from 'react';
import "./Post.css";
import {Link} from "react-router-dom"
import axios from "axios";
import {useContext} from "react";
import { AuthContex } from '../../components/context/AuthContext'

export default function Post({post}) {
  const [like,setLike]=useState(post.like);
  const [isLiked,setIsLiked]=useState(false);
  const [user,setUser]=useState({});
  const {user:currentUser}=useContext(AuthContex);
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id))

  },[currentUser._id,post.likes])

  useEffect(()=>{
    const fetchUser=async()=>{
      try{
      const res=await axios.get(`/users/${post.userId}`);
      setUser(res.data)
      }catch(err){
        console.error("Error fetching use",err);
      }
    };
    fetchUser();
  },[post.userId]);
  const likeHandler=()=>{
    try{
      axios.put("/posts/"+post._id+"/like",{userId:currentUser._id})
   
    }catch(err){
      
      console.log(err);
    }
    setLike(isLiked?like-1:like+1);
      setIsLiked(!isLiked);
  };
  
  return (
    <div className="post">
      <div className="postwrapper">       
            <div className="postCenter">   
              <div className="post-just-wrap">     
                <video autoPlay muted loop type="video/mp4" className="postImg-screen" src={PF+post.img} alt="here"></video>
                </div>  
                <Favorite className="wishIcon" htmlColor='red' onClick={likeHandler}/>
                 <span className="postLikeCounter">{post.likes.length}</span>
                <span className='desc-post'>{post.desc}</span>
            </div>
        </div>
        <div className="postTop">
            <div className="postTopLeft">
              <Link to={`profile/${user.username}`}>
                <img className="postProfileImg" 
                 src={user.profilePicture ||PF+"/no-profile.png"} alt="profile"/>
                <span className="postUsername">{user.username}</span>
                </Link>
            </div>
            
        </div>
        {/* <div className="postBottom">
            <span className="postCommentText">9 comments</span>
           


        </div> */}
      </div>
   
  )
}
