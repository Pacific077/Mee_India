import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
import { ProfileApi } from '../../apis/UserApi';

const UserInfoProvider = ({children}) => {
  const [user,setUser] = useState("faisal");
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        // Define getcounts or import it from another module
        const resp = await ProfileApi();
        setUser(resp.data.user)
        console.log("userProfile",resp.data.user)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  },[])
  return (
    <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserInfoProvider