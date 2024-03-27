import React from 'react'
import img from "../../../assets/DefaultDp.png"
import "./EnquiryCard.css"
const EnquiryCard = ({name,email,dp,contact,enquiry}) => {
  return (
    <div className='EnquiryCard'>
        <div className="EnquiryCardSenderDetails">
        <div className="EnquiryCardSenderPic">
            <img src={dp?dp:img} alt="" />
        </div>
        <div className="EnquiryCardSenderDesc">
            <p>{name}</p>
            <p>{email}</p>

        </div>
        </div>
        <div className="EnquiryCardQuestion">
            <p className='EnquiryCardContact'>Contact : +91{contact}</p>
            <p className='EnquiryCardQ'> <span>Enquiry</span> : {enquiry}</p>
        </div>

    </div>
  )
}

export default EnquiryCard