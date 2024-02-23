import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";
import "./LocationAndSearch2.css";

import Districts from "../../Navbar/District";

const LocationAndSearch2 = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [locinputValue, setlocInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 50) {
        // Change 100 to whatever scroll position you desire
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
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
    <div className={`locationAndSrchCont2 ${isVisible ? "visible2" : ""}`}>
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

export default LocationAndSearch2;
