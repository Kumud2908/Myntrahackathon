import "./FashionReels.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"


export default function FashionReels() {
    const [posts,setPosts]=useState([]);
    const navigate = useNavigate();
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("/posts/popular/top");
                setPosts(res.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);
    
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:true
      };
      const handleHeadClick=()=>{
        navigate('/feed')
      };
  return (    
        <div className="fr-main-wrapper">
            
            <div className="fr-head" onClick={handleHeadClick}>
                Trending Fashion reels
            </div>
            <Slider {...settings}>
            {posts.map(post => (
                        <div key={post._id} onClick={handleHeadClick} className="fr-slider-item">
                             <video autoPlay muted loop type="video/mp4" className="postImg" src={PF+post.img} alt="here"></video>
                        </div>
                    ))}
            </Slider>
        </div>
    
  )
}
