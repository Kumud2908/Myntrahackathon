import "./Reelspage.css";
import Topnav from "../../components/topnav/topnav";
import Bottomnav from "../../components/bottomnav/Bottomnav";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect, useState,useContext } from "react";
import axios from"axios";
import { AuthContex } from "../../components/context/AuthContext";

export default function Reels() {
  const { currentuser } = useContext(AuthContex);
  

  const [user,setUser]=useState({});
  const [posts,setPosts]=useState([]);
  
  // const PF=process.env.REACT_APP_PBLIC_FOLDER;
  useEffect(()=>{
    const fetchPosts=async()=>{
        const res= await axios.get("/posts/timeline/")
         setPosts(res.data)
    };
    fetchPosts();
    
    
},[]);
  
  const handleLike = async (postId) => {
    try {
      const res = await axios.put(`/posts/${postId}/like`, { userId: currentuser._id }); // Adjust payload as per your backend
      if (res.status === 200) {
        // Update posts state to reflect like/unlike
        setPosts(posts.map(post =>
          post._id === postId
            ? { ...post, likes: res.data.likes }
            : post
        ));
      } else {
        console.error("Failed to update like status");
      }
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  return (
    <>
    <Topnav/>
    <Bottomnav/>
    <div className="reel-main-wrapper">      
      <div className="reel-main-head"></div>
      {posts.map(post => (
        
        <div  key={post._id} className="reel-main">                     
                        <div className="like-button-cont">
          <button id="like-button" type="submit"onClick={() => handleLike(post._id)}>
            <FavoriteIcon htmlColor="red"className="reel-like-icon" />
          </button>
        </div>
        <h6>{post.desc}</h6>
        
        <div className="add-button-cont">
          <button id="add-button" type="submit">
            <AddCircleIcon className="reel-add-icon"/>
          </button>
        </div>
        </div>
                    ))}
        

    

      
    </div>
    </>
  )
}
