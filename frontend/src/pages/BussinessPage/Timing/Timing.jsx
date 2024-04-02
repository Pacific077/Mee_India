import React from 'react'
import './Timing.css'

const Timing = ({openDays}) => {


  return (
    <div className='weekdays'>
        <span className={openDays&&openDays[0]==='true' ? 'active' : ''}>Sun</span>
        <span className={openDays&&openDays[1]==='true' ? 'active' : ''}>Mon</span>
        <span className={openDays&&openDays[2]==='true' ? 'active' : ''}>Tue</span>
        <span className={openDays&&openDays[3]==='true' ? 'active' : ''}>Wed</span>
        <span className={openDays&&openDays[4]==='true' ? 'active' : ''}>Thu</span>
        <span className={openDays&&openDays[5]==='true' ? 'active' : ''}>Fri</span>
        <span className={openDays&&openDays[6]==='true' ? 'active' : ''}>Sat</span>
    </div>
  )
}

export default Timing