import React from 'react'
import './CustomerCare.css'

const CustomerCare = () => {
  return (
    <div className='customerCareMainDivContainer'>
        <div>
            <div className='customeCareProblemHeading'> How can we help you ?</div>
            <textarea className='customerCareTextArea'></textarea>
            <div className='customerCareSubmitButton'>submit</div>
        </div>
        <div>
            <div className='customeCareProblemHeading'>Contact Us</div>
            <div>
                <label className='customerCarelabel'>HeadQuater 1 <p className='customerCareContacts'>+91-2165451845</p><p className='customerCareContacts'>meeIndiaHeadquater1@gmail.com</p></label>
                <label className='customerCarelabel' >HeadQuater 2 <p className='customerCareContacts'>+91-2165451845</p><p className='customerCareContacts'>meeIndiaHeadquater2@gmail.com</p></label>
                <label className='customerCarelabel'>HeadQuater 3 <p className='customerCareContacts'>+91-2165451845</p><p className='customerCareContacts'>meeIndiaHeadquater3@gmail.com</p></label>
                <label className='customerCarelabel'>HeadQuater 4 <p className='customerCareContacts'>+91-2165451845</p><p className='customerCareContacts'>meeIndiaHeadquater4@gmail.com</p></label>
            </div>
        </div>
      
    </div>
  )
}

export default CustomerCare
