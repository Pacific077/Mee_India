import React from 'react'
import hall from "../../../assets/hall.jpg"
import "./MainCatCard.css"
const MainCatCard = () => {
  return (
    <div className='mainCatCard'>
      <img className='mainCatCardImg' src={hall} alt="" />
      <p className='MainCatCardDesc'>Banquet Hall</p>
    </div>
  )
}

export default MainCatCard