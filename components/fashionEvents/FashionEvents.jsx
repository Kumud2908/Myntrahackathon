import "./FashionEvents.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect,useState } from "react";
import axios from "axios"


export default function FashionEvents() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true
  };
return (    
    <div className="fs-main-wrapper">
      <div className="fs-head">Top fashion Events</div>
        <Slider {...settings}>
        <div className="fs-ele" >
          <img src={PF+"events/new_york.jpg"} className="eventimg"/>
        </div>
        <div className="fs-ele">
          <img src={PF+"events/cannes"} className="eventimg"/>
        </div>
        </Slider>
    </div>

)
}
