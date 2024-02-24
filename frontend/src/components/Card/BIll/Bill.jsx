import React from 'react'
import "./Bill.css"
import BIllIcon from '../BillIcons/BIllIcon'
const Bill = () => {
  return (
    <div className='billCont'>
        <div className="billLeftcont">
            <h2 className='billLeftHead'>Bills and Reacharge</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eos.</p>
        </div>
        <div className="billRightcont">
<BIllIcon/>
<BIllIcon/>
<BIllIcon/>
<BIllIcon/>
<BIllIcon/>
<BIllIcon/>
        </div>
    </div>
  )
}

export default Bill