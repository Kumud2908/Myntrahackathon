import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import "./Bottomnav.css";
import{Link} from "react-router-dom";

export default function Bottomnav() {
  return (
    <div className="Bottomnav">
        <div className="Bottomnav-ul">
            <ul className="Bottomnav-list">
                <li>
                <Link to="/" style={{textDecoration:"none"}}>
                   <HomeIcon className='bn-icon'/>
                </Link>
                </li>
                <li>
                <Link to="/favIn" style={{textDecoration:"none"}}>
                    <GroupsIcon className='bn-icon'/>
                </Link>
                  </li>
                <li>
                   <Link to="/feed" style={{textDecoration:"none"}}>
                      <PermMediaIcon className='bn-icon'/>
                   </Link>
                  </li>
                <li>
                   <Link to="/" style={{textDecoration:"none"}}>
                      <FavoriteBorderIcon className='bn-icon'/>                     
                   </Link>
                  
                </li>
                    
                <li>
                   <Link to="/" style={{textDecoration:"none"}}>
                      <ShoppingCartIcon className='bn-icon'/>
                                         
                   </Link>
                  
                </li>
             
            </ul>

        </div>
      
    </div>
  )
}
