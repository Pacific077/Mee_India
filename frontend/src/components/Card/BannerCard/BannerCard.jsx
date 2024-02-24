import React from 'react'
import doc from "../../../assets/doc.png"
import { FaAngleLeft } from "react-icons/fa";
import "./BannerCard.css"
const BannerCard = () => {
  return (
    <div className='BannerCard'>
        <p className='BannerCardTitle'>Doctors</p>
        <img src={doc} alt="" srcset="" className='BannerCardIMg' />
    <button className='BannerCardBut'><FaAngleLeft className='BannerCardIcon'/></button>
    </div>
  )
}

export default BannerCard