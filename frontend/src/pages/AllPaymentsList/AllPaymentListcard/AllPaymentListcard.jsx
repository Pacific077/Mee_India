import React from 'react'
import {useNavigate} from "react-router-dom"
import "./AllPaymentListcard.css"
const AllPaymentListcard = ({paymntId,amnt,id,name,date,MembershipType}) => {
  const navigate = useNavigate()
  return (
    <div className='UserListCard' onClick={()=>navigate(`/admin/ShowAllPayments/specific/${id}`)}>
    <p className='userlistCardP'>{paymntId}</p>
    <p className='userlistCardP'>{name}</p>
    <p className='userlistCardP'>{date}</p>
    <p className='userlistCardP'>{amnt}</p>
    <p className='userlistCardP'>{MembershipType}</p>
  </div>
  )
}

export default AllPaymentListcard