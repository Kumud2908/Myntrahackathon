import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Influencer.css";
import Topnav from '../../components/topnav/topnav';
import Bottomnav from '../../components/bottomnav/Bottomnav';
import { useEffect, useState } from "react";
import axios from"axios"
export default function Influencer() {
    const location = useLocation();
    const influencer = location.state?.influencer || {};
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      const fetchPosts = async () => {
          try {
              const res = await axios.get(`/profile/${influencer.username}`);
              setPosts(res.data);
          } catch (error) {
              console.error('Error fetching posts:', error);
          }
      };

      if (influencer._id) {
          fetchPosts();
      }
  }, [influencer._id]);


    
    console.log('Influencer:', influencer); // Debugging log

    console.log('Influencer:', influencer); // Debugging log

    return (
        <>
            <div className="navbar">
                <Topnav />
                <Bottomnav />
            </div>
            <div className="in-wrapper-main">
                <div className="in-main-top">{influencer.username}</div>
                <div className="in-main-desc">
                    <span className="in-desc-head">Most loved outfit of hers</span>
                    {posts.map(post => (
                        <div key={post._id} className="in-desc-item">{post.content}</div>
                    ))}
                </div>
                <div className="in-main-about">
                    <span className='in-about-head'>About the Influencer</span>
                    <p className='in-main-about-desc'>{influencer.bio}</p>
                </div>
            </div>
        </>
    );
}
