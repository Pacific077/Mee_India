import React from 'react'
import "../UserDashboard/UserDashboard.css"
import "./UserDashboardCard"
import bikeService from '../../assets/bikeService.jpg'
import UserDashboardCard from './UserDashboardCard'

const userDashboard = () => {
  return (
    
    <div className='userDashboardMainDiv'>
      <div className='userDashUpperDiv'>
        <div className='userDashUpperDivProfilePic'>
          <img className='UserDashboardImageDisplay' src={bikeService} />
          <div className="UserDashboardInfo">
              <h3 className='userDashboardName'>Erik Stiffler</h3>
          </div>
        </div>
        <div></div>
      </div>
      <div className='userDashCardcontainer'>
        <UserDashboardCard/>
        <UserDashboardCard/>
        <UserDashboardCard/>
        
      </div>
    </div>
    
   
  )
}

export default userDashboard
