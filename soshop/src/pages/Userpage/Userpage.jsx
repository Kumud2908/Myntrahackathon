import React, { useContext } from 'react';
import Share from "../../components/share/share";
import Uploads from "../../components/Uploads/Uploads";
import Topnav from "../../components/topnav/topnav";
import Bottomnav from "../../components/bottomnav/Bottomnav";
import UserSlider from "../../components/userSlider/userSlider";
import { AuthContex } from "../../components/context/AuthContext";
import "./User.css";

export default function Userpage() {
  const { user } = useContext(AuthContex);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <>
      <div className="navbar">
        <Topnav/>
        <Bottomnav/>
      </div>
      <div className='mp-wrapper-main'>
        <div className="mp-main-top">
          <div className="mp-cover">
            <img 
              className="mp-cover-image" 
              src={PF + user.coverPicture || PF + "/no-profile.png"} 
              alt="Cover"
            />
            <div className="mp-username">{user.username}</div>
          </div>
        </div>
        <div className="mp-main-upload">
          <Uploads/>
        </div>
        <div className="mp-main-slider">
          <UserSlider/>
        </div>
        <div className="mp-main-bottom">
          <div className="mp-main-bottom-head">People want to know more about you</div>
          <div className="mp-main-bottom-desc">
            <textarea 
              type="text" 
              id="mp-main-textbox" 
              defaultValue="Write something about you..."
            />
          </div>
        </div>
      </div>
    </>
  )
}
