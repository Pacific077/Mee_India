import React from 'react'
import hotel from "../../../assets/hotels.jpg"
import "./MyBusinessCard.css"
import { useNavigate } from 'react-router-dom'
const MyBusinessCard = ({title,id,district,state}) => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate(`/business-dashboard/${id}`)
  }
  return (
    <div className='BusinessCardCont' onClick={handleClick}>
        <div className="businessCardLeft">
        <img src={hotel} alt="" />

        </div>
        <div className="BusinessCardRight">
            <h2 className="BusinessCardHead">{ title}</h2>
            <p className="businessCardLocation">{district}, {state}</p>
            <div className="businessCardbtnCont">
                <button className='btnPrim btn-md' >btn1</button>
                <button className='btnPrim btn-md2'>btn2</button>
                <button className='btnPrim btn-md2'>btn3</button>
            </div>
        </div>
    </div>
  )
}

export default MyBusinessCard