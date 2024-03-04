import React, { useEffect, useState } from 'react'
import "../UserDashboard/UserDashboard.css"
import "./UserDashboardCard"
import bikeService from '../../assets/bikeService.jpg'
import UserDashboardCard from './UserDashboardCard'
import BusinessDasboard from '../BusinessDasboard/BusinessDasboard'
import { ProfileApi } from '../../apis/UserApi'

const UserDashboard = () => {
  const [user,setUser] = useState(false);
  const [businessList,setBusinessList] = useState ('')
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
  return (
    
    <div className='userDashboardMainDiv'>
      <div className='userDashUpperDiv'>
        <div className='userDashUpperDivProfilePic'>
          <img className='UserDashboardImageDisplay' src={bikeService} />
          <div className="UserDashboardInfo">
              <h3 className='userDashboardName'>Erik Stiffler</h3>
              <p>@userId</p>
          </div>
        </div>
       
      </div>
      <div className='userDashCardcontainer'>
        <UserDashboardCard info={"Edit Profile"} fun={UpdateProfilePicture}  />
        <UserDashboardCard info={"Update Profile Picture"} fun={UpdateProfilePicture}/>
        <UserDashboardCard info={"Get Verified"} fun={UpdateProfilePicture}/>
        {/* <UserDashboardCard/>
        <UserDashboardCard/> */}
        
      </div>
      <BusinessDasboard businessList={businessList}/>
    </div>
    
   
  )
}

export default UserDashboard
