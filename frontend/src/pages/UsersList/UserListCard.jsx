import React from 'react'
import "./UserListCard.css"
import { useNavigate } from 'react-router-dom'
const UserListCard = ({name,email,date,shops,UserId}) => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate(`/admin/userList/specific/${UserId}`)
  }
  return (
    <div className='UserListCard' onClick={handleClick}>
      <p className='userlistCardP'>{name}</p>
      <p className='userlistCardP'>{email}</p>
      <p className='userlistCardP'>{date}</p>
      <p className='userlistCardP'>{shops}</p>
    </div>
  )
}

export default UserListCard