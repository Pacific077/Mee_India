import React, { useState } from "react";
import CatContext from "./CategoryContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CatStateProvider = ({ children }) => {
    const [SubCatArr,setSubCatArr] = useState([]);
    const [latitude,setLatitude]= useState(19.0760)
    const [longitude,setLongitude]= useState(72.8777)

  return (
    <CatContext.Provider
      value={{
        SubCatArr,
        setSubCatArr,latitude,setLatitude,longitude,setLongitude
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
