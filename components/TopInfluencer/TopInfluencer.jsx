import "./TopInfluencer.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TopInfluencer() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/users/timeline/top-users");
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
    };

    const handleSlideClick = (post) => {
        console.log('Navigating with post:', post);
        navigate('/inflPage', { state: { influencer: post } });
    };

    return (
        <div className="ti-main-wrapper">
            <div className="ti-head">Top Influencers of the week</div>
            <Slider {...settings}>
                {posts.map(post => (
                    <div key={post._id} className="ti-slider-item" onClick={() => handleSlideClick(post)}>
                        <img src={PF + post.profilePicture} alt="profile" className="ti-slider-item" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

