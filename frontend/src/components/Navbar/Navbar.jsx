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
   {IsSideNavVis&&<SideNav/>}
          <h2 className="navbarBrand"><span className="green-col">Mee</span>India</h2>
        
        <LocationAndSearch/>
        {/* <div className="locationAndSearch">
          <div className="location">
            <div className="pos-rel">
              <input
                type="text"
                placeholder="Mumbai"
                value={locinputValue}
                onChange={handleInputChange}
                className="nav-inp"
              />
              <div class="location-suggest pos-abs">
                {suggestions.map((suggestion, index) => (
                  <p onClick={handleLocationSelect} key={index}>
                    {suggestion}
                  </p>
                ))}
              </div>
            </div>
            <FaLocationCrosshairs className="icon-md" />
          </div>
          <div className="search">
            <input type="text" className="nav-inp" placeholder="Search here" />
            <CiSearch className="icon-md" />
          </div>
        </div> */}
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
    </>
  );
};

export default Navbar;
