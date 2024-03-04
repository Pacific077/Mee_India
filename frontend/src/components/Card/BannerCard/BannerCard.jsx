import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import "./BannerCard.css"
const BannerCard = ({title,image,bg}) => {
  return (
    <div className='BannerCard' style={{backgroundColor:bg}}>
        <p className='BannerCardTitle'>{title}</p>
        <img src={image} alt="" srcset="" className='BannerCardIMg' />
    <button className='BannerCardBut' style={{backgroundColor:bg}}><FaAngleLeft className='BannerCardIcon'/></button>
    </div>
  )
}

export default BannerCard