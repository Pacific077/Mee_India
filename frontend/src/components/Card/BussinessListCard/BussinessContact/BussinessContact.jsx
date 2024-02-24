import React from 'react'
import './BussinessContact.css'
import { IoCallSharp } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";


const BussinessContact = () => {
  return (
    <div className='ContactContainer'>
        <div className='squareBtn ContactNo'><IoCallSharp/>+91 7859060034</div>
        <div className='squareBtn Enquiry'><RiMessage2Fill/>Send Enquiry</div>
        <div className='squareBtn Chat'><img style={{marginRight:"4px"}} src='https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_whatsapp.svg'/>Chat</div>
    </div>
  )
}

export default BussinessContact