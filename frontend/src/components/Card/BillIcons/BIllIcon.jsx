import React from 'react'
import cook from "../../../assets/cook1.jpg"
import "./BillIcon.css"
const BIllIcon = ({name,incon}) => {
  return (
    <div className='BillIcon'>
        <img src={incon} alt="" srcset="" className='billIconImg' />
        <p className='billIconTitle'>{name}</p>
    </div>
  )
}

export default BIllIcon