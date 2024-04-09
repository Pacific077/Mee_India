import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import "./Navbar.css";
import LocationAndSearch from "../Card/LocationAndSearch/LocationAndSearch";
import SideNav from "../SideNav/SideNav";
import { GiCrossedBones } from "react-icons/gi";
// import { ProfileApi } from "../../apis/UserApi";
import { toast } from "react-toastify";
import NavProfile from "./NavProfile/NavProfile";
import UserContext from "../../context/UserInfo/UserContext";
const Navbar = () => {
  
  // const [user,setUser] = useState(false);
  const [IsSideNavVis,setIsSideNavVis] = useState(false);
  const {user} = useContext(UserContext)
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
         {!IsSideNavVis&&<div className="Navhamburger" onClick={handelSideNavDisplay}>
          <p className="hamburgerline1"></p>
          <p className="hamburgerline2"></p>
          <p className="hamburgerline3"></p>
          
        </div> }
        {IsSideNavVis&&<GiCrossedBones className="crossnavbarham" onClick={()=>setIsSideNavVis(!IsSideNavVis)} />} 
        
        <div className="navItems">
          {/* <p className="Navitem">English</p> */}
          <p className="Navitem" onClick={()=>navigate('/')}>Home</p>
          {/* {isLoggedIn&&user&&user.ownedBussinesses.length>0&&<p className="Navitem" onClick={()=>navigate('/pricing-details')}>Upgrade</p>}
          {isLoggedIn&&user&&user.ownedBussinesses.length>0&&<p className="Navitem" onClick={()=>navigate('/userdashboard')}>My Businesses</p>} */}
          <p className="Navitem" onClick={handleFreeListingClick}>Free Listing</p>
          {/* <p>Business</p>
      <p>Premium</p> */}
      {isLoggedIn?<NavProfile handleFreeListingClick={handleFreeListingClick}/>:<button className="btnPrim loginbtn" onClick={HandleLoginclick}>
            Login
          </button>}
      
          
        </div>
      </div>
      {<SideNav vis = {IsSideNavVis}/>}
    </>
  );
};

export default Navbar;
