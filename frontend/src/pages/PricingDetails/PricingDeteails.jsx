import React, { useState } from 'react'
import "./PricingDeteails.css"
import Basic from './Basic/Basic'
import Pro from './Pro/Pro'
const PricingDeteails = () => {
  const [basic,Setbasic] = useState(true);
  return (
    <div className='PricingDetailsPage'>
       <h1 className='PricingMainHead'>Choose Your Plan</h1>
       <h3 className='PricingMaindesc'>Cancel anytime you want</h3>
       <div className="PricinBtnCont">
        <button onClick={()=>Setbasic(true)} className='basicPricingbtn'>Basic</button>
        <button onClick={()=>Setbasic(false)} className='ProPricingbtn'>Pro</button>
       </div>
       <div className="PricingDetailsCont">
        {basic?<Basic/>:<Pro/>}
        
       
       </div>
    </div>
  )
}

export default PricingDeteails