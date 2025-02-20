import React, { useState } from 'react'
import Topnav from '../../components/topnav/topnav'
import Bottomnav from '../../components/bottomnav/Bottomnav'
import "./Feed.css"
import axios from "axios"
import Post from "../../components/post/Post"
import { useEffect } from 'react'
import {useContext} from "react";
import { AuthContex } from '../../components/context/AuthContext'



export default function Feed({username}) {
    const [posts,setPosts]=useState([]);
    const {user}=useContext(AuthContex);

   
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            console.log("Fetching posts...");
            let res;
            if (username) {
              res = await axios.get(`/posts/profile/${username}`, { timeout: 5000 });
            } else {
              res = await axios.get(`/posts/timeline/${user._id}`, { timeout: 5000 });
            }
            console.log("Posts fetched successfully:", res.data);
            setPosts(res.data);
          } catch (err) {
            console.error("Error fetching posts:", err);
            console.log("Response data:", err.response.data); // Log server response data if available
            console.log("Error details:", err.toJSON()); // Log detailed error information
          }
        };
        fetchPosts();
      }, [username,user._id]);
  return (
    <>
    <Topnav/>
    <Bottomnav/>
    <div className="feed-main-wrapper">      
      <div className="feed-main-head">
        {posts.map((p)=>(
            <Post key={p._id} post={p}/>
        ))}

        
      </div>
     
      
    </div>
    </>
  )
}
