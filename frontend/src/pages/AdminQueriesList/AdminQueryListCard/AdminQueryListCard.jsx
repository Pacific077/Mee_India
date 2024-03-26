import React from 'react'
import {useNavigate} from "react-router-dom"
const AdminQueryListCard = ({name,qdate,qasked,email,id}) => {
  const navigate = useNavigate()
    const handleClick = ()=>{
        navigate(`/admin/queries/specific/${id}`)
    }
  return (
    <div className='UserListCard' onClick={handleClick}>
    <p className='userlistCardP'>{name}</p>
    <p className='userlistCardP'>{email}</p>
    <p className='userlistCardP'>{qdate}</p>
    <p className='userlistCardP'>{qasked}</p>
  </div>
  )
}

export default AdminQueryListCard