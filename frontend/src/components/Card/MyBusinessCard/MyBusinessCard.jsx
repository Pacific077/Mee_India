import React from 'react'
import hotel from "../../../assets/hotels.jpg"
import "./MyBusinessCard.css"
import { useNavigate } from 'react-router-dom'
const MyBusinessCard = ({title,id,district,state,photo,address,pincode}) => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate(`/business-dashboard/${id}`)
  }
  return (
    <div className='BusinessCardCont' onClick={handleClick}>
        <div className="businessCardLeft">
        <img src={photo} alt="" />

        </div>
        <div className="BusinessCardRight">
            <h2 className="BusinessCardHead">{ title}</h2>
            <p>{address}, {district}</p>
            <p>{state}, {pincode}</p>
            <div className="businessCardbtnCont">
                <button className='btnPrim btn-md' >Advertise</button>
                <button className='btnPrim btn-md2' onClick={()=>{navigate(`/business-dashboard/${id}/editName`)}}>Edit Business Profile</button>
                <button className='btnPrim btn-md2'>Reviews</button>
            </div>
        </div>
    </div>
  )
}

export default MyBusinessCard