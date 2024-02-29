import React from 'react'
import './Breaker.css'

const Breaker = (props) => {
  return (
    <div className='breaker'>
        <div className='line1'></div>
        <span className='breakerText'>{props.field}</span>
        <div className='line2'></div>
    </div>
  )
}

export default Breaker