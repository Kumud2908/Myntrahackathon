import "./MyHome.css"
import FashionReels from "../../components/fashionReels/FashionReels";
import Topnav from "../../components/topnav/topnav";
import Bottomnav from "../../components/bottomnav/Bottomnav";
import FashionEvents from "../../components/fashionEvents/FashionEvents";
import TopInfluencer from "../../components/TopInfluencer/TopInfluencer";
import Category from "../../components/Category/Category";
import Searchpanel from "../../components/searchpanel/Searchpanel"
import { useState } from "react";

export default function MyHome({username}) {
  const[post,setPosts]=useState([]);
  

  return (
    <div className="Home-wrapper">
      
      <div className="navbar">
      <Topnav/>
      <Bottomnav/>
      </div>
      <div className="main-page">
      <Searchpanel/>
      
      
      <div className="FashionReels-wrapper">
        <FashionReels/>
      </div>
      <div className="TopInfluencer-wrapper">
        <TopInfluencer/>
      </div>
      <div className="FashionEvents-wrapper">
        <FashionEvents/>
      </div>
      <div className="Categories-wrapper">
        <Category/>
      </div>
      
      
    </div>
    </div>
  )
}
