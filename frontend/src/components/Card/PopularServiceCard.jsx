import React from 'react'
import "./PopularServiceCard.css"

const PopularServiceCard = (props) => {
  return (
    <div className='popularService'>
        <div className="PopularServiceImg">
          <img src={props.img} className='fitImage' alt="" srcset="" />

        </div>
        <div className="PopularserviceDesc">
            <p>{props.service}</p>
            <button className='btnPrim btn-sm right-item'>Contact</button>
        </div>
    </div>
  )
}

export default PopularServiceCard