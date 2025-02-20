import "./Stories.css" ;
import storiesData from './storiesData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Stories() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true
      };
  return (

    <div className='stories-wrapper'>
        <div className="stories">
            <Slider {...settings}>
            {
                storiesData.map((d)=>(
                    <div className="slider-wrapper-item">
                        <div className="slider-wrapper-img">
                            <img src={d.img}/>
                        </div>
                        <div>
                            <p> {d.id}</p>
                        </div>
                        
                    </div>
                    
                ))
            }
            </Slider>
        </div>
    </div>
  )
}
