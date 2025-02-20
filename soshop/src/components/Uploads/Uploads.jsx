import "./Uploads.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import  UserSlider from "../../components/userSlider/userSlider"
import { AuthContex } from "../context/AuthContext";
import {useContext,useState,useRef} from "react";
import axios from "axios";
export default function Uploads() {
  const {user}=useContext(AuthContex);
  const [file,setFile]=useState(null)
  const desc=useRef();
  const submitHandler=(e)=>{
    e.preventDefault()
    const newPost={
      userId:user._id,
      desc:desc.current.value

    }
    try{
      axios.post("/post",newPost)

    }catch(err){

    }

  }
  return (
    <form className="up-form" onSubmit={submitHandler} >
    <div className='up-wrapper-main'>
        <label htmlFor="file" className="up-main-top">
            <span className='up-head'> Upload your fits ans let people
             know how fashion freaky you are</span>
             <div className="up-desc">
             <input type="file" id="file" onChange={(e)=>{setFile(e.target.files[0])}}></input>
            <button className='up-upload-button' type="submit"><AddCircleIcon className="up-button-icon"/> </button>
            </div>
        </label>
        
        
    </div>
    </form>
  )
}
