import React from 'react'
import "./basic.css"
import Pricingcard from '../../../components/Card/PricingCard/Pricingcard'
import { PricingDetailsBasicArr } from '../PricingDetailsArr'

const Basic = () => {
  return (
    <div className='BasicPricing'>
      {PricingDetailsBasicArr.map((ele,ind)=>{
        return(
          <Pricingcard path={ele.path} key={ind} name={ele.Name} points={ele.points} price={ele.price} />

        )
      })}
        {/* <Pricingcard/> */}
    </div>
  )
}

export default Basic