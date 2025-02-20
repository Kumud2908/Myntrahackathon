import "./Category.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Category() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:true
      };
    return (    
        <div className="cat-main-wrapper">
            <div className="cat-head">Categories</div>
            <Slider {...settings}>
            <div className="cat-slider-item"><img src="/assets/categoryImg/image1.png" className="cat-slider-item"/></div>
            <div className="cat-slider-item"><img src="/assets/categoryImg/bc.png" className="cat-slider-item"/></div>
           
            </Slider>
        </div>
    
    )
}
