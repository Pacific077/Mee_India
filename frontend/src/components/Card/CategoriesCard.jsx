import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Card.css"
const CategoriesCard = (props) => {
  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate(`/bussiness-list/district/${props.category}`)
  }

  return (
    <div onClick={handleClick} className='CategoryCard'>
        <img className='CategoryImg' src={props.immg} alt="" srcset="" />
        <p className='CategoryName'>{props.category}</p>
    </div>
  )
}

export default CategoriesCard