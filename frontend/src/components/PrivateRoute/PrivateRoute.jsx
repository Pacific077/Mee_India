import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const token = Cookies.get('token');
  
      if (token ) {
        return children
      }else{
        // console.log("lof",isLoggedIn)
          return <Navigate to="/login" />
      }
        
}

export default PrivateRoute