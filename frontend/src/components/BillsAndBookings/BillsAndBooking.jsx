import React from 'react'
import "./BillsAndBooking.css"
import Bill from '../Card/BIll/Bill'
const BillsAndBooking = ({name,Desc,SubCat}) => {
  return (
    <div className='BillsAndBooking'>
        <Bill name={name} Desc={Desc} SubCat = {SubCat}/>
    </div>
  )
}

export default BillsAndBooking