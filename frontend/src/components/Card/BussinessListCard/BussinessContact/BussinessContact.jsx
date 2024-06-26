import React from 'react'
import './BussinessContact.css'
import { IoCallSharp } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";


const BussinessContact = ({contact}) => {
  const handleClick = () => {
    // console.log("clicked")
    window.open(`https://wa.me/91${contact}`, '_blank');
  }

  const handleEnquiryClick = ()=>{
    const enq = document.getElementById('enquiry')
    if(enq)enq.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className='ContactContainer'>
    <div className='squareBtn ContactNo'><IoCallSharp/>{contact}</div>
        <div className='squareBtn Enquiry' 
          onClick={handleEnquiryClick}
        ><RiMessage2Fill/>Send Enquiry</div>
        <div className='squareBtn Chat'  onClick={handleClick}><img style={{marginRight:"4px"}} src='https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_whatsapp.svg'/>Chat</div>
    </div>
  )
}

export default BussinessContact