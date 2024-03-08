import React from 'react'
import './UserDashboardCard.css'


const UserDashboardCard = ({info,fun}) => {
  return (
    
        <div className='squareBtn userdashCard' onClick={fun}>
            {info}
        </div>
      
    
  )
}

export default UserDashboardCard
