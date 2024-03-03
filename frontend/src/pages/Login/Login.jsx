import React, { useState } from "react";
import { LoginApi, RegisterApi } from "../../apis/UserApi";
import {  useNavigate  } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import { FaEyeSlash } from "react-icons/fa6";
import "./Login.css";
const Login = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPass, setshowPass] = useState(false);
  const [IsSigningup, setIsSigningup] = useState(false);
  const navigate  = useNavigate();
  const handleIconClick = () => {
    setshowPass(!showPass);
  };
  const HandleSignupAndLogin = async () => {
      if (IsSigningup) {
        try {
          const resp = await RegisterApi({name, email, password });
          if (resp.status === 200) {
            toast.success("User registered Successfulyy");
            toast.success("Please Login to continue");
          }
        } catch (error) {
          if (axios.isAxiosError(error) && error.response.status === 400) {
            error.response.data.err.map((msg) => {
              toast.error(msg);
            });
          } else if(axios.isAxiosError(error) && error.response.status === 401){
            toast.error("Invalid Id or Password");
          }else{
            toast.error("Something went wrong")
          }
        }
      } else {
        try{
          console.log("loginapi")
          const resp = await LoginApi({ email, password });
          console.log("resp",resp)
          if (resp.status === 200) {
            navigate('/')
            toast.success("Logged in !!");
          }
        }catch(error){
          if (axios.isAxiosError(error) && error.response.status === 400) {
            error.response.data.err.map((msg) => {
              toast.error(msg);
            });
          } else if(axios.isAxiosError(error) && error.response.status === 401){
            toast.error("Invalid Id or Password");
          }else{
            console.log("Ererere",error)
            toast.error("hi")
          }
        }
      }
 
  };
  const handleNameChange = (e) => {
    setname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setemail(e.target.value);
  };
  const handlePassChange = (e) => {
    setpassword(e.target.value);
  };
  const SignupToLoginSwitch = () => {
    setIsSigningup(!IsSigningup);
    setname("");
    setemail("");
    setpassword("");
  };
  return (
    <div className="LoginPage">
      <div className="transparentbg"></div>
      <div className="loginform">
        <h1 className="sec-head">{IsSigningup ? "Signup" : "Login"}</h1>
        <div className="loginfieldcont">
          {IsSigningup && (
            <div className="inpWithp">
              <p htmlFor="">UserName</p>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={handleNameChange}
              />
            </div>
          )}
          <div className="inpWithp">
            <p htmlFor="">Email</p>
            <input
              className="emailInp"
              value={email}
              onChange={handleEmailChange}
              type="text"
              placeholder="abc@example.com"
            />
          </div>

          <div className="inpWithp">
            <p htmlFor="">Password</p>

            <div className="passwrdcont">
              <input
                value={password}
                onChange={handlePassChange}
                className="Passinp"
                type={showPass ? "text" : "password"}
                placeholder="Enter your Password"
              />
              {showPass ? (
                <FaEyeSlash onClick={handleIconClick} className="eyeIcon" />
              ) : (
                <FaEye className="eyeIcon" onClick={handleIconClick} />
              )}
            </div>
          </div>
        </div>
        <button
          onClick={HandleSignupAndLogin}
          className="btnPrim btn-sm mr-tp2"
        >
          {IsSigningup ? "Sign Up" : "Login"}
        </button>
        <div className="DontHavacnt">
          <p>
            {IsSigningup
              ? "Already have an account ?"
              : "Dont have an account ?"}
          </p>
          <p href="" className="textBlue" onClick={SignupToLoginSwitch}>
            {IsSigningup ? "Login" : "Sign Up"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
