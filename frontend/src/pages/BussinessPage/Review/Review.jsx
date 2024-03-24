import React from 'react'
import './Review.css'
import { FaUser } from "react-icons/fa";

const Review = ({name,ratedCnt,message,img}) => {
  return (
    <div className='reviewContainer'>
        <div className='userInfo'>
            <div className="ReviewUserPicCntnr"><img className="ReviewUserPic" src={img}/></div>
            <div>
              <h3>{name}</h3>
              <p>{ratedCnt} reviews</p>
            </div>
        </div>
        <div className='comment'>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default Review