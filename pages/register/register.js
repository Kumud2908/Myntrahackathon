
import {useRef,useContext} from "react";
import axios from"axios";
import { useNavigate } from "react-router-dom";


export default function Register() {
    const username=useRef();
    const email=useRef();
    const password=useRef();
  
    const  navigate = useNavigate();
    const handleClick=async (e)=>{
        e.preventDefault();
        const user={
            username:username.current.value,
            email:username.current.value,
            password:password.current.value,
        }
        try{
        await axios.post("/auth/register",user);
        navigate("/login");


        }catch(err){
            console.log(err);
        }
    }
  return (
    <form className='loginBox' onSubmit={handleClick}>
        <input placeholder='Username' required ref={username}  className='loginInput'></input>
        <input placeholder='Email' required ref={email} type="email" className='loginInput'></input>
        <input placeholder='Password' minLength="6" required ref={password} type="password" className='loginInput'></input>
        <button className='loginRegsiterButton' type="submit">
            Log into Account
        </button>
      
    </form>
  )
}
