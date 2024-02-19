import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import "./Login.css"
const Login = () => {
  const [showPass,setshowPass] =useState(false);
  const handleIconClick = ()=>{
    setshowPass(!showPass)
  }
  return (
    <div className='LoginPage'>
      <div className="transparentbg"></div>
      <div className="loginform">
        <h1 className='sec-head'>Login</h1>
        <div className="loginfieldcont">
          <label htmlFor="">Email</label>
          <input className='emailInp' type="text" name="" id="" placeholder='abc@example.com' />
          <label htmlFor="">Password</label>
          <div className="passwrdcont">
          <input className='Passinp' type={showPass ? "text" : "password"} placeholder='Enter your Password' name=""  id="" />
          {showPass?<FaEyeSlash onClick={handleIconClick} className='eyeIcon'/>:<FaEye className='eyeIcon' onClick={handleIconClick}/>}
          </div>
        </div>
        <button className='btnPrim btn-sm mr-tp2'>Login</button>
        <div className='DontHavacnt'>
          <p>Dont have an account ?</p>
          <p href="" className='textBlue'>Sign Up</p>
        </div>
      </div>
    </div>
  )
}

export default Login