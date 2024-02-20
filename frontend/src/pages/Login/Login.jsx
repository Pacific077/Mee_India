import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import "./Login.css"
const Login = () => {
  const [showPass,setshowPass] =useState(false);
  const [IsSigningup,setIsSigningup] =useState(false);
  const handleIconClick = ()=>{
    setshowPass(!showPass)
   
  }
  const SignupToLoginSwitch =()=>{
    setIsSigningup(!IsSigningup);
  }
  return (
    <div className='LoginPage'>
      <div className="transparentbg"></div>
      <div className="loginform">
        <h1 className='sec-head'>{IsSigningup?"Signup":"Login"}</h1>
        <div className="loginfieldcont">
          {IsSigningup&&<div className="inpWithp">

          <p htmlFor="">UserName</p>
          <input type="text" placeholder='John Doe' />
          </div>}
          <div className="inpWithp">

          <p htmlFor="">Email</p>
          <input className='emailInp' type="text" name="" id="" placeholder='abc@example.com' />
          </div>
          
<div className="inpWithp">

          <p htmlFor="">Password</p>
          
          <div className="passwrdcont">
          <input className='Passinp' type={showPass ? "text" : "password"} placeholder='Enter your Password' name=""  id="" />
          {showPass?<FaEyeSlash onClick={handleIconClick} className='eyeIcon'/>:<FaEye className='eyeIcon' onClick={handleIconClick}/>}
          </div>
</div>
        </div>
        <button className='btnPrim btn-sm mr-tp2'>{IsSigningup?"Sign Up":"Login"}</button>
        <div className='DontHavacnt'>
          <p>{IsSigningup?"Already have an account ?":"Dont have an account ?"}</p>
          <p href="" className='textBlue' onClick={SignupToLoginSwitch}>{IsSigningup?"Login":"Sign Up"}</p>
        </div>
      </div>
    </div>
  )
}

export default Login