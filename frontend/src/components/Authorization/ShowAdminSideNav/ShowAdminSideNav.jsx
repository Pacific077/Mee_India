import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const ShowAdminSideNav = ({children}) => {
    const location = useLocation()
    const [showAdminNav,setShowAdminNav] = useState(false);
    useEffect(()=>{
        setShowAdminNav(location.pathname.includes('/admin'));
    },[location])
  return (
    <>
    {showAdminNav&&children}
</>
  )
}

export default ShowAdminSideNav