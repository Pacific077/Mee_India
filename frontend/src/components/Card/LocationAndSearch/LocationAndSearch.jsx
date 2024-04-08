import React, { useContext, useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { toast } from "react-toastify";
import { FaLocationCrosshairs } from "react-icons/fa6";
import CatContext from "../../../context/CategoryContext.jsx"
import "./LocationAndSearch.css";
import axios from 'axios'
import Districts from "../../Navbar/District";
// import CategoryArr from "../../../pages/Home/CategoriesArray.js"
import { useLocation, useNavigate } from "react-router-dom";
import { SearchOnTypeApi } from "../../../apis/BusinessApi.js";
import isEmpty from "../../../utils/IsEmpty.jsx";

const LocationAndSearch = () => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(false);
  // const [locinputValue, setlocInputValue] = useState("");
  const [searchInput,SetSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const CatCon = useContext(CatContext);
  const {latitude,longitude,setLatitude,setLongitude,district,setDistrict,locinputValue, setlocInputValue} = CatCon;
  const suggestionRef = useRef(null);
  // const categories = CategoryArr.map((cat=>cat.category));
  const [suggestions2, setSuggestions2] = useState([]);
  const navigate = useNavigate();

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
  const filterSuggestions = (arr,input,i) => {
    const filtered = arr.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
    if(i===1)setSuggestions(filtered);
    if(i===2)setSuggestions2(filtered);
  };
  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  // useEffect(()=>{
  //   setlocallylocation()
  // },[latitude,longitude,district])
  const handleClickOutside = (e) => {
    if (suggestionRef.current && !suggestionRef.current.contains(e.target)) {
      setSuggestions([]);
      setSuggestions2([]);
    }
  };
  // const setlocallylocation  =()=>{
  //   localStorage.setItem("district", district);
  //   localStorage.setItem("longitude", longitude);
  //   localStorage.setItem("latitude", latitude);
  // }
  const handleInputChange = (e) => {
    const value = e.target.value;
    setlocInputValue(value);
    filterSuggestions(Districts,value,1);
  }; 
  // const handleTextInputChange = (e) => {
  //   const value = e.target.value;
  //   SetSearchInput(value);
  //   filterSuggestions(categories,value,2);
  // };
  const handleLocationSelect =async (e) => {
    // try {
    //   const resp =await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${e.target.innerText},IN&limit=5&appid=ffcdd1abf435afb68672874babf1d07a`)
    //   setDistrict(resp.data[0].name)
    //   setLatitude(resp.data[0].lat)
    //   setLongitude(resp.data[0].lon)
    //   console.log(resp.data[0])
    // } catch (error) {
    //   console.log(error)
    // }
    setDistrict(e.target.innerText)
    setlocInputValue(e.target.innerText);
    setSuggestions([]);
  };
  
  const detectLocation = ()=>{
    if (navigator.geolocation) {
      console.log("Serr")
      navigator.geolocation.getCurrentPosition((position)=>{
      // setLatitude(position.coords.latitude)
      // setLongitude(position.coords.longitude)
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

  const handleSearchInput =async ()=> {

    try {
      if(isEmpty(searchInput)){
        toast.warning("Search field can't be empty")
        return;
      }else{
        
        navigate(`/bussiness-list/${district}/null/null?search=${searchInput}`)
      }
    } catch (error) {
      toast.error("somthing is wrong")
    }
    // const subCatArr = CategoryArr.find((cat)=>cat.category===searchInput)
    // if(!subCatArr)toast.warning("No Match!! Try something from List")
    // else if(subCatArr.subCat.length===0){
    //   navigate(`/bussiness-list/${district}/${subCatArr.category}/null`)
    // }else{
    //   navigate(`/subList/${subCatArr.category}`)
    // }
  }
  return (
    <div className={`locationAndSrchCont ${isVisible ? "visible" : ""}`}>
      <div className="locationAndIcon" ref={suggestionRef}>
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
        <div className="locationSuggestCont">
          {suggestions.map((district,index) => {
            return <p onClick={handleLocationSelect} key={index}>{district}</p>;
          })}
        </div>
      </div>
      <div className="SearchAndIcon" ref={suggestionRef}>
        <input
          className="locAndSrcInp"
          placeholder="What are you looking for?"
          type="text"
          name=""
          id="CategorySearch"
          onChange={(e)=>SetSearchInput(e.target.value)}
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

export default LocationAndSearch;
