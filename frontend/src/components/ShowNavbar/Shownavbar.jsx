import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Shownavbar = ({children}) => {
    const location = useLocation();
    const [showNavbar,setShowNavbar] = useState(true);
    useEffect(()=>{
        if(location.pathname==='/login'){
            setShowNavbar(false);
        }else{
            setShowNavbar(true)
        }
    },[location])
  return (
    <>
        {showNavbar&&children}
    </>
   
  )
}

export default Shownavbar