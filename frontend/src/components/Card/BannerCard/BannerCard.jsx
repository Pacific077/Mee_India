import React, { useContext } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import "./BannerCard.css"
import { useNavigate } from 'react-router-dom';
import CatContext from '../../../context/CategoryContext';
const BannerCard = ({title,image,bg,name,sub}) => {

  if(!sub)sub = "null";
  const CatCon = useContext(CatContext);
  const {district} = CatCon;
  const navigate = useNavigate();
  return (
    <div className='BannerCard' style={{backgroundColor:bg}} onClick={()=>navigate(`/bussiness-list/${district}/${name}/${sub}`)}>
        <p className='BannerCardTitle'>{title}</p>
        <img src={image} alt="" srcset="" className='BannerCardIMg' />
    <button className='BannerCardBut' style={{backgroundColor:bg}}><FaAngleLeft className='BannerCardIcon'/></button>
    </div>
  )
}

export default BannerCard