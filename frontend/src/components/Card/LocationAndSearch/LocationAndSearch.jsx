import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";
import "./LocationAndSearch.css";

import Districts from "../../Navbar/District";
import { useLocation } from "react-router-dom";

const LocationAndSearch = () => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(false);
  const [locinputValue, setlocInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
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
    <div className={`locationAndSrchCont ${isVisible ? "visible" : ""}`}>
      <div className="locationAndIcon">
        <input
          className="locAndSrcInp"
          value={locinputValue}
          onChange={handleInputChange}
          placeholder="Mumbai"
          type="text"
          name=""
          id=""
        />
        <FaLocationCrosshairs className="locationIcon" />
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
