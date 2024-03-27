import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import "./Navbar.css";
import LocationAndSearch from "../Card/LocationAndSearch/LocationAndSearch";
import SideNav from "../SideNav/SideNav";
// import { ProfileApi } from "../../apis/UserApi";
import { toast } from "react-toastify";
import NavProfile from "./NavProfile/NavProfile";
const Navbar = () => {
  
  // const [user,setUser] = useState(false);
  const [IsSideNavVis,setIsSideNavVis] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const token = Cookies.get('token');
    if(token){
      // fetchData();
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
    else toast.warning("Login to List your Business !!")
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
          <p className="Navitem">English</p>
          <p className="Navitem" onClick={()=>navigate('/')}>Home</p>
          <p className="Navitem" onClick={handleFreeListingClick}>Free Listing</p>
          {/* <p>Business</p>
      <p>Premium</p> */}
      {isLoggedIn?<NavProfile/>:<button className="btnPrim loginbtn" onClick={HandleLoginclick}>
            Login
          </button>}
      
          
        </div>
      </div>
      {<SideNav vis = {IsSideNavVis}/>}
    </>
  );
};

export default Navbar;
