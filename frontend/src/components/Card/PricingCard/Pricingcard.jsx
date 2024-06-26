import React from 'react'
import {useNavigate} from "react-router-dom"
import "./PricingCard.css"
const Pricingcard = ({name,points,price,path}) => {
  const navigate = useNavigate()
  return (
    <div className='Pricingcard'>
      <div className="pricingCardHead">
      <p>{name}</p>
      </div>
        <div className="PricingCardDetails">
          <div className="pricingdescpoints">
            {points.map((ele,ind)=>{
              return(
                <p key={ind}>{ele}</p>
              )
            })}
            {/* <p>Search visiblity : 0</p>
            <p>No Verified Seal</p>
            <p>No Trust stamp</p>
            <p>No online  Catalouge</p>
            <p>No Premimum Support</p> */}
          </div>
          <div className="PricingDetailsBtnCont">
            <p className='AmountInRs'>{price}₹<span className='smalltext'>/day</span></p>
            <button onClick={()=>navigate(`/checkout/${path}`)} className='PurchaseBtn'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default Pricingcard