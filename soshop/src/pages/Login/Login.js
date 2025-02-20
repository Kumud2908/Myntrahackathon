import React from 'react'
import {useRef,useContext} from "react";
import {loginCall} from "../../apiCalls";
import { AuthContex } from '../../components/context/AuthContext';
import {CircularProgress} from "@mui/material";

export default function Login() {
    const email=useRef();
    const password=useRef();
    const {user,isFetching,error,dispatch}=useContext(AuthContex);

    const handleClick=(e)=>{
        e.preventDefault();
        loginCall({email:email.current.value,password:password.current.value},dispatch)
    };
    console.log(user)
  return (
    <div>
        <form className='loginBox' onSubmit={handleClick}>
        <input placeholder='Email' type="email" ref={email}></input>
        <input 
        placeholder='Password' 
        type="password" 
        ref={password}
        minLength="6"
        ></input>
        <button className='loginButton' type="submit" disabled={isFetching}>{isFetching ? <CircularProgress size="15px"/>
        :(" create a new account"

        )}</button>
        </form>
    </div>
  )
}
