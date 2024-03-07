import React, { useEffect, useState } from 'react'
import "../UserDashboard/UserDashboard.css"
import "./UserDashboardCard"
import bikeService from '../../assets/bikeService.jpg'
import UserDashboardCard from './UserDashboardCard'
import BusinessDasboard from '../BusinessDasboard/BusinessDasboard'
import { LogoutApi, ProfileApi } from '../../apis/UserApi'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'

const UserDashboard = () => {
  const [user,setUser] = useState(false);
  const [businessList,setBusinessList] = useState ('')
  const navigate = useNavigate()
  useEffect(()=>{
    const fetchData = async ()=>{
      const resp = await ProfileApi()
      console.log("Resp",resp);
      setUser(resp.data.user);
      setBusinessList(resp.data.user.ownedBussinesses)
    };
    fetchData();
  },[])
  const UpdateProfilePicture = ()=>{
    console.log("update profile")
  }
  const handleLogout = async()=>{
    try {
      const resp = await LogoutApi()
      if(resp.status===200){
        toast.success("Logged Out")
        navigate('/login')
      }
    } catch (error) {
      toast.error("Something went Wrong")
    }
    
  }
  return (
    
    <div className='userDashboardMainDiv'>
      <div className='userDashUpperDiv'>
        <div className="logout" onClick={handleLogout}>
          Logout
        </div>
        <div className='userDashUpperDivProfilePic'>
          <img className='UserDashboardImageDisplay' src={bikeService} />
          <div className="UserDashboardInfo">
              <h3 className='userDashboardName'>{user?user.name:"Dummy"}</h3>
              <p>{user?user.email:"dummy Email"}</p>
          </div>
        </div>
       
      </div>
      <div className='userDashCardcontainer'>
        <UserDashboardCard info={"Edit Profile"} fun={UpdateProfilePicture}  />
        <UserDashboardCard info={"Upgrade"} fun={UpdateProfilePicture}/>
        <UserDashboardCard info={"Get Verified"} fun={UpdateProfilePicture}/>
        {/* <UserDashboardCard/>
        <UserDashboardCard/> */}
        
      </div>
      <BusinessDasboard businessList={businessList}/>
    </div>
    
   
  )
}

export default UserDashboard
