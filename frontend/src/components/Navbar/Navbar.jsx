import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Districts from "./District";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const [locinputValue, setlocInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const HandleLoginclick = () => {
    navigate("/login");
  };
  const filterSuggestions = (input) => {
    const filtered = Districts.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filtered);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setlocInputValue(value);
    filterSuggestions(value);
  };
  const handleLocationSelect = (e) => {
    setlocInputValue(e.target.innerText);
    setSuggestions([]);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbarBrand">
          <span className="yellowtext">Mee</span>India
        </div>
        <div className="locationAndSearch">
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
        </div>
        <div className="navItems">
          <p>English</p>
          <p>Advertise</p>
          <p>Free Listing</p>
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
