import React from 'react'
import "./Card.css"
const CategoriesCard = (props) => {

  const handleClick = ()=>{
    
  }

  return (
    <div onClick={handleClick} className='CategoryCard'>
        <img className='CategoryImg' src={props.immg} alt="" srcset="" />
        <p className='CategoryName'>{props.category}</p>
    </div>
  )
}

export default CategoriesCard