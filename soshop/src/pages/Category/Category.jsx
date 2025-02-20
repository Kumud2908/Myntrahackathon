import "./Category.css"
import Topnav from "../../components/topnav/topnav"
import Bottomnav from "../../components/bottomnav/Bottomnav"

export default function Category() {
  return (
    <>
    <div className="navbar">
      <Topnav/>
      <Bottomnav/>
      </div>
    <div className="cat-wrapper-main">    
      
      
     
        <div className="cat-main-top"> BODY SHAPES</div>
        <div className="cat-desc">
            <div className="cat-desc-head">Options Available</div>
            <div className="cat-desc-item">option 1</div>
            <div className="cat-desc-item">option 1</div>
            <div className="cat-desc-item">option 1</div>
            <div className="cat-desc-item">option 1</div>
            <div className="cat-desc-item">option 1</div>
            <div className="cat-desc-item">option 1</div>
            <div className="cat-desc-item">option 1</div>
        </div>
      
    </div>
    </>
  )
}
