import React from 'react'
import img from "../../../assets/DefaultDp.png"
import "./PaymentCard.css"
const PaymentCard = ({name,amnt,dp,date}) => {
  return (
    <div className='PaymentCard'>
        <div className="PaymentCardImg">
            <img src={dp?dp:img} alt="" />
        </div>
        <div className="PaymenCardName"><p>{name}</p></div>
        <div className="PaymenCardDate"><p id='mediumFont'>{new Date(date).toLocaleString()}</p></div>
        <div className="PaymenCardAmount"><p>₹{amnt}</p></div>
    </div>
  )
}

export default PaymentCard