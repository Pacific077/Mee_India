import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
import { ProfileApi } from '../../apis/UserApi';
import Cookies from 'js-cookie';

const UserInfoProvider = ({children}) => {
  const [user,setUser] = useState("faisal");
  // console.log("hi")
  const token = Cookies.get('token');
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const resp = await ProfileApi();
        setUser(resp.data.user)
        console.log("userProfile",resp.data.user)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if(token){
      fetchData();
    }else{
      console.log("User is Not logged in")
    }
  },[token])
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserInfoProvider