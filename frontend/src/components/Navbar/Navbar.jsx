import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// import Districts from "./District";
import "./Navbar.css";
import LocationAndSearch from "../Card/LocationAndSearch/LocationAndSearch";
import SideNav from "../SideNav/SideNav";
const Navbar = () => {

  const [IsSideNavVis,setIsSideNavVis] = useState(false);
  const navigate = useNavigate();
  
  const HandleLoginclick = () => {
    navigate("/login");
  };
  const handelSideNavDisplay =()=>{
    setIsSideNavVis(!IsSideNavVis);
  }

  const handleFreeListingClick =()=>{
    navigate("./bussiness-register")
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
          <p>Advertise</p>
          <p onClick={handleFreeListingClick}>Free Listing</p>
          {/* <p>Business</p>
      <p>Premium</p> */}
          <button className="btnPrim loginbtn" onClick={HandleLoginclick}>
            Login
          </button>
        </div>
      </div>
      {<SideNav vis = {IsSideNavVis}/>}
    </>
  );
};

export default Navbar;
