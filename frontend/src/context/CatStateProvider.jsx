import React, { useEffect, useState } from "react";
import CatContext from "./CategoryContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CatStateProvider = ({ children }) => {
    const [SubCatArr,setSubCatArr] = useState([]);
    // const [district,setDistrict]= useState('Mumbai');
    // const [latitude,setLatitude]= useState(19.0760);
    // const [longitude,setLongitude]= useState(72.8777);
    const [district, setDistrict] = useState(localStorage.getItem('district') || 'Mumbai');
    const [latitude, setLatitude] = useState(parseFloat(localStorage.getItem('latitude')) || 19.0760);
    const [longitude, setLongitude] = useState(parseFloat(localStorage.getItem('longitude')) || 72.8777);

    useEffect(() => {
      localStorage.setItem('latitude', latitude);
      localStorage.setItem('longitude', longitude);
      localStorage.setItem('district', district);
  }, [latitude, longitude, district]);

  return (
    <CatContext.Provider
      value={{
        SubCatArr,
        setSubCatArr,latitude,setLatitude,longitude,setLongitude,district,setDistrict
      }}
    >
      {children}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </CatContext.Provider>
  );
};

export default CatStateProvider;
