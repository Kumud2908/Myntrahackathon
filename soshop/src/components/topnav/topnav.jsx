import {AccountCircle} from "@mui/icons-material";
import "./Topnav.css";
import{Link} from "react-router-dom";
import {useContext} from "react";
import { AuthContex } from "../context/AuthContext";
export default function Topnav() {
  const {user}=useContext(AuthContex);
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="topbarContainer">
      <div className="topbar-top">
        <div className="topbar-top-left">
          <span className="logo">MyntraShop</span>
        </div>

        <div className="topbar-top-right">
            <Link to="/userPage" style={{textDecoration:"none"}}>
            <img className="postProfileImg" 
                 src={user.profilePicture ||PF+"/no-profile.png"} alt="is here"/>
              
            </Link>
        </div>
      </div>
    </div>
  )
}
