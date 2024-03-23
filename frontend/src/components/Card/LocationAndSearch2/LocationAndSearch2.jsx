import React, { useContext, useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { toast } from "react-toastify";
import CatContext from "../../../context/CategoryContext.jsx"
import "./LocationAndSearch2.css";
import axios from "axios";
import Districts from "../../Navbar/District";
import CategoryArr from "../../../pages/Home/CategoriesArray.js"
import { useLocation, useNavigate } from "react-router-dom";

const LocationAndSearch2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [locinputValue, setlocInputValue] = useState("");
  const [searchInput,SetSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const CatCon = useContext(CatContext);
  const suggestionRef = useRef(null);
  const {latitude,longitude,setLatitude,setLongitude,district,setDistrict} = CatCon;
  const categories = CategoryArr.map((cat=>cat.category));
  const [suggestions2, setSuggestions2] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
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
  }, []);
  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  // useEffect(()=>{
  //   setlocallylocation()
  // },[latitude,longitude])
  // const setlocallylocation  =()=>{
  //     localStorage.setItem("longitude", longitude);
  //     localStorage.setItem("latitude",latitude );
    
  // }
  const handleClickOutside = (e) => {
    if (suggestionRef.current && !suggestionRef.current.contains(e.target)) {
      setSuggestions([]);
      setSuggestions2([]);
    }
  };
  const filterSuggestions = (arr,input,i) => {
    const filtered = arr.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
    if(i===1)setSuggestions(filtered);
    if(i===2)setSuggestions2(filtered);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setlocInputValue(value);
    filterSuggestions(Districts,value,1);
  }; 
  const handleTextInputChange = (e) => {
    const value = e.target.value;
    SetSearchInput(value);
    filterSuggestions(categories,value,2);
  };
  const handleLocationSelect =async (e) => {
    try {
      const resp =await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${e.target.innerText},IN&limit=5&appid=ffcdd1abf435afb68672874babf1d07a`)
      setDistrict(resp.data[0].name)
      setLatitude(resp.data[0].lat)
      setLongitude(resp.data[0].lon)
      console.log(resp.data[0])
    } catch (error) {
      console.log(error)
    }
    setlocInputValue(e.target.innerText);
    setSuggestions([]);
  };;
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
  const handleSearchInput = ()=> {

    const subCatArr = CategoryArr.find((cat)=>cat.category===searchInput)
    if(!subCatArr)toast.warning("No Match!! Try something from List")
    else if(subCatArr.subCat.length===0){
      navigate(`/bussiness-list/${district}/${subCatArr.category}/null`)
    }else{
      navigate(`/subList/${subCatArr.category}`)
    }
  }
  return (
    <div className={`locationAndSrchCont2 ${isVisible ? "visible2" : ""}`}>
      <div className="locationAndIcon">
        <input
          className="locAndSrcInp"
          value={locinputValue}
          onChange={handleInputChange}
          placeholder={district}
          type="text"
          name=""
          id=""
        />
        <FaLocationCrosshairs className="locationIcon" onClick={detectLocation} />
        <div className="locationSuggestCont" ref={suggestionRef}>
          {suggestions.map((district, index) => {
            return (
              <p onClick={handleLocationSelect} key={index}>
                {district}
              </p>
            );
          })}
        </div>
      </div>
      <div className="SearchAndIcon" ref={suggestionRef}>
        <input
          className="locAndSrcInp"
          placeholder="What are you looking for?"
          type="text"
          name=""
          id=""
          onChange={handleTextInputChange}
          value={searchInput}
        />
        <div className="searchIconCont" onClick={handleSearchInput}>
          <CiSearch className="locSrchIcon" />
        </div>
        <div className="locationSuggestCont textSuggestCont">
          {suggestions2.map((cat,index) => {
            return <p onClick={()=>{
              SetSearchInput(cat);
              setSuggestions2([]);
              }} key={index}>{cat}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default LocationAndSearch2;
