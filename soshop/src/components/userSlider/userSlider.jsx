
import "./userSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function UserSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true
      };
    return (    
        <div className="sli-main-wrapper">
            <Slider {...settings}>
            <div className="sli-slider-item">1</div>
            <div className="sli-slider-item">2</div>
            <div className="sli-slider-item">3</div>
            <div className="sli-slider-item">4</div>
            <div className="sli-slider-item">5</div>
            </Slider>
        </div>
    
    )
}

