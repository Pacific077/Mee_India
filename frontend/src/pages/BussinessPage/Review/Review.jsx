import React from 'react'
import './Review.css'
import { FaUser } from "react-icons/fa";

const Review = () => {
  return (
    <div className='reviewContainer'>
        <div className='userInfo'>
            <FaUser/>
            <div>
              <h3>Shubham Jha</h3>
              <p>278 review</p>
            </div>
        </div>
        <div className='comment'>
            <p>Navajyoti Science Higher Secondary School is an excellent choice for students seeking quality education. With multiple facilities, reasonable fees, resourceful library, and clean facilities, it provides a conducive environment for learning. The relevant curriculum and subject matter expertise make it a top-notch institution for academic excellence.</p>
        </div>
    </div>
  )
}

export default Review