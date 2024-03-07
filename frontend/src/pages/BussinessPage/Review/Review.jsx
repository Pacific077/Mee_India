import React from 'react'
import './Review.css'
import { FaUser } from "react-icons/fa";

const Review = ({name,ratedCnt,message}) => {
  return (
    <div className='reviewContainer'>
        <div className='userInfo'>
            <FaUser/>
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