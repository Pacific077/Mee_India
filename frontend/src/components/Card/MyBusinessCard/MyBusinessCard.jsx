import React from 'react'
import hotel from "../../../assets/hotels.jpg"
import "./MyBusinessCard.css"
const MyBusinessCard = () => {
  return (
    <div className='BusinessCardCont'>
        <div className="businessCardLeft">
        <img src={hotel} alt="" />

        </div>
        <div className="BusinessCardRight">
            <h2 className="BusinessCardHead">R N R Corporation</h2>
            <p className="businessCardLocation">VivekVihar, Delhi</p>
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