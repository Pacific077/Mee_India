import React, { useContext, useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { toast } from "react-toastify";
import { FaLocationCrosshairs } from "react-icons/fa6";
import CatContext from "../../../context/CategoryContext.jsx"
import "./LocationAndSearch.css";

import Districts from "../../Navbar/District";
import { useLocation } from "react-router-dom";

const LocationAndSearch = () => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(false);
  const [locinputValue, setlocInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const CatCon = useContext(CatContext);
  const {latitude,longitude,setLatitude,setLongitude} = CatCon;
  const suggestionRef = useRef(null);
  useEffect(() => {

    if (location.pathname === "/") {
      console.log("here")
      setIsVisible(false);
      const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 50) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsVisible(true);
    }
  }, [location]);
  const filterSuggestions = (input) => {
    const filtered = Districts.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filtered);
  };
  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(()=>{
    setlocallylocation()
  },[latitude,longitude])
  const handleClickOutside = (e) => {
    if (suggestionRef.current && !suggestionRef.current.contains(e.target)) {
      setSuggestions([]);
    }
  };
  const setlocallylocation  =()=>{
    localStorage.setItem("longitude", longitude);
    localStorage.setItem("latitude", latitude);
  }
  const handleInputChange = (e) => {
    const value = e.target.value;
    setlocInputValue(value);
    filterSuggestions(value);
  };
  const handleLocationSelect = (e) => {
    setlocInputValue(e.target.innerText);
    setSuggestions([]);
  };
  
  const detectLocation = ()=>{
    if (navigator.geolocation) {
      console.log("Serr")
      navigator.geolocation.getCurrentPosition((position)=>{
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      console.log(latitude,longitude);
      toast.success("Location Set")
      },(err)=>{
        toast.error(err.message);
      }
      );
    }else{
      toast.warning("Not Supported on Your Device")
    }
  }
  return (
    <div className={`locationAndSrchCont ${isVisible ? "visible" : ""}`}>
      <div className="locationAndIcon" ref={suggestionRef}>
        <input
          className="locAndSrcInp"
          value={locinputValue}
          onChange={handleInputChange}
          placeholder="Mumbai"
          type="text"
          name=""
          id=""
        />
        <FaLocationCrosshairs className="locationIcon" onClick={detectLocation} />
        <div className="locationSuggestCont">
          {suggestions.map((district,index) => {
            return <p onClick={handleLocationSelect} key={index}>{district}</p>;
          })}
        </div>
      </div>
      <div className="SearchAndIcon">
        <input
          className="locAndSrcInp"
          placeholder="Search Your Text here"
          type="text"
          name=""
          id=""
        />
        <div className="searchIconCont">
          <CiSearch className="locSrchIcon" />
        </div>
      </div>
    </div>
  );
};

export default LocationAndSearch;
