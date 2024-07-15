import "./favInfluencerPage.css"
import Topnav from "../../components/topnav/topnav"
import Bottomnav from "../../components/bottomnav/Bottomnav"
import Searchpanel from "../../components/searchpanel/Searchpanel"
export default function FavInfluencerPage() {
  return (
    <>
    <div className="Navbar">
      <Topnav/>
      <Bottomnav/>
    </div>
    <div className="fav-main-wrapper">
      
      <Searchpanel/>
      <div className="fav-head">
        Style Like your Fav influencer

      </div>
      <div className="fav-desc">
        <div className="fav-row1-col1">

        <div className="fav-1"></div>
        <div className="fav-3"></div>
       
        </div>
        <div className="fav-row1-col2">
        <div className="fav-2"></div>
        <div className="fav-4"></div>
        </div>
        {/* <div className="fav-row2">
        <div className="fav-5"></div>
        </div>
        <div className="fav-6"></div>
        <div className="fav-7"></div>
        <div className="fav-8"></div>
        <div className="fav-9"></div>
        <div className="fav-10"></div> */}
      </div>
      
    </div>
    </>
  )
}
