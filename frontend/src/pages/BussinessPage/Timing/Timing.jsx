import React from 'react'
import './Timing.css'

const Timing = () => {
  return (
    <div className='weekdays'>
        <span>Sun</span>
        <span className='active'>Mon</span>
        <span className='active'>Tue</span>
        <span className='active'>Wed</span>
        <span className='active'>Thu</span>
        <span className='active'>Fri</span>
        <span>Sat</span>
    </div>
  )
}

export default Timing