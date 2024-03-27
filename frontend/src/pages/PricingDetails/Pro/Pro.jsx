import React from 'react'
import "./Pro.css"
import Pricingcard from '../../../components/Card/PricingCard/Pricingcard'
import { PricingDetailsProArr } from '../PricingDetailsArr'
const Pro = () => {
  return (
    <div className='ProPricing'>
        {PricingDetailsProArr.map((ele,ind)=>{
            return(
                <Pricingcard path={ele.path} key={ind} name={ele.Name} points={ele.points} price={ele.price} />
            )
        })}
    </div>
  )
}

export default Pro