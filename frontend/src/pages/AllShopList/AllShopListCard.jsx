import React from 'react'
import { useNavigate } from 'react-router-dom'

const AllShopListCard = ({title,cat,dis,state,id}) => {
  const navigate = useNavigate()
    const handleClick = ()=>{
        navigate(`/admin/shoplist/specific/${id}`)
    }
  return (
    <div className='UserListCard' onClick={handleClick}>
      <p className='userlistCardP'>{title}</p>
      <p className='userlistCardP'>{cat}</p>
      <p className='userlistCardP'>{dis}</p>
      <p className='userlistCardP'>{state}</p>
    </div>
  )
}

export default AllShopListCard