import React, { useState } from "react";
import CatContext from "./CategoryContext";

const CatStateProvider = ({ children }) => {
    const [SubCatArr,setSubCatArr] = useState([]);

  return (
    <CatContext.Provider
      value={{
        SubCatArr,
        setSubCatArr
      }}
    >
      {children}
      
    </CatContext.Provider>
  );
};

export default CatStateProvider;
