import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


// import Districts from "./District";
import "./Navbar.css";
import LocationAndSearch from "../Card/LocationAndSearch/LocationAndSearch";
import SideNav from "../SideNav/SideNav";
import { ProfileApi } from "../../apis/UserApi";
import { toast } from "react-toastify";
const Navbar = () => {
  
  const [user,setUser] = useState(false);
  const [IsSideNavVis,setIsSideNavVis] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const fetchData = async ()=>{
    try{
    const resp = await ProfileApi()
    console.log("Resp",resp);
    localStorage.setItem('userProfile', JSON.stringify(resp.data.user))
    setUser(resp.data.user);
    }catch(e){
      console.log(e);
      toast.error("Something went Wrong")
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if(token){
      fetchData();
      setIsLoggedIn(true);
    }
  }, []);
  const HandleLoginclick = () => {
    navigate("/login");
  };
  const handelSideNavDisplay =()=>{
    setIsSideNavVis(!IsSideNavVis);
  }

  const handleFreeListingClick =()=>{
    if(isLoggedIn)
    navigate("/bussiness-register")
    else toast.warning("Please Registered Users are allowed to register their business!")
  }
  const MoveToProfile =()=>{
    navigate('/userdashboard')
  }
  return (
    <>
      <div className="navbar">
   
          <h2 className="navbarBrand"><span className="green-col">Mee</span>India</h2>
        
        <LocationAndSearch/>
        <div className="Navhamburger" onClick={handelSideNavDisplay}>
          <p className="hamburgerline1"></p>
          <p className="hamburgerline2"></p>
          <p className="hamburgerline3"></p>
          
        </div>
        <div className="navItems">
          <p>English</p>
          <p onClick={()=>navigate('/')}>Home</p>
          <p onClick={handleFreeListingClick}>Free Listing</p>
          {/* <p>Business</p>
      <p>Premium</p> */}
      {isLoggedIn?<div className="navProfile" onClick={MoveToProfile}>
        <img className="profilePic" src={user?.profileImage}/>
      </div>:<button className="btnPrim loginbtn" onClick={HandleLoginclick}>
            Login
          </button>}
      
          
        </div>
      </div>
      {<SideNav vis = {IsSideNavVis}/>}
    </>
  );
};

export default Navbar;
