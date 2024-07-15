import "./FashionAdvise.css"
import Topnav from "../../components/topnav/topnav"
import Bottomnav from "../../components/bottomnav/Bottomnav"

export default function FashionAdvise() {
  return (
    <>
    <div className="navbar">
      <Topnav/>
      <Bottomnav/>     
      
      </div>
    <div className="main-wrapper">
      
        <div className="main-top"> Fashion Advise from your Fav Celebs</div>
        <div className="main-desc">
            <div className="desc-head">Clips for your preferences</div>
            <div className="main-desc-item">clip 1</div>
            <div className="main-desc-item">clip 1</div>
            <div className="main-desc-item">clip 1</div>
            <div className="main-desc-item">clip 1</div>
            <div className="main-desc-item">clip 1</div>
            <div className="main-desc-item">clip 1</div>
            <div className="main-desc-item">clip 1</div>

        </div>
      
    </div>
    </>
  )
}
