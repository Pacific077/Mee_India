import React from 'react'
import doc from "../../../assets/doc.png"
import { FaAngleLeft } from "react-icons/fa";
import "./BannerCard.css"
const BannerCard = ({bg}) => {
  return (
    <div className='BannerCard' style={{backgroundColor:bg}}>
        <p className='BannerCardTitle'>Doctors</p>
        <img src={doc} alt="" srcset="" className='BannerCardIMg' />
    <button className='BannerCardBut' style={{backgroundColor:bg}}><FaAngleLeft className='BannerCardIcon'/></button>
    </div>
  )
}

export default BannerCard