import React from 'react'
import './BussinessContact.css'
import { IoCallSharp } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";


const BussinessContact = ({contact}) => {
  const handleClick = () => {
    console.log("clicked")
    window.open('https://wa.me/917667327346', '_blank');
  }
  return (
    <div className='ContactContainer'>
    <div className='squareBtn ContactNo'><IoCallSharp/>{contact}</div>
        <div className='squareBtn Enquiry'><RiMessage2Fill/>Send Enquiry</div>
        <div className='squareBtn Chat'  onClick={handleClick}><img style={{marginRight:"4px"}} src='https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_whatsapp.svg'/>Chat</div>
    </div>
  )
}

export default BussinessContact