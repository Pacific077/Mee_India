import React from 'react'
import "./MainCatCard.css"
const MainCatCard = ({name,img}) => {
  return (
    <div className='mainCatCard'>
      <img className='mainCatCardImg' src={img} alt="" />
      <p className='MainCatCardDesc'>{name}</p>
    </div>
  )
}

export default MainCatCard