import "./FashionEvents.css"
import Topnav from "../../components/topnav/topnav"
import Bottomnav from "../../components/bottomnav/Bottomnav"

export default function FashionEvents() {
  
  return (
    <>
    <div className="navbar">
      <Topnav/>
      <Bottomnav/>    
      
      </div>
    <div className="fse-wrapper-main">
      
        <div className="fse-main-top">Fashion Event</div>
        <div className="fse-main-desc">  
            <span className="fse-desc-head">Famous celebs outfits</span>         
           <div className="fse-desc-item"></div>
           <div className="fse-desc-item"></div>
           <div className="fse-desc-item"></div>
           <div className="fse-desc-item"></div>
           <div className="fse-desc-item"></div>
           <div className="fse-desc-item"></div>
        </div>
      <div className="fse-main-about">
        <span className='fse-about-head'>About the event</span>
      </div>
    </div>
    </>
  )
}
