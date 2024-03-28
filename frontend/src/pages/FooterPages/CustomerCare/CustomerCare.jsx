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
                <label>HeadQuater 1 <p>+91-2165451845</p><p>meeIndiaHeadquater1@gmail.com</p></label>
                <label>HeadQuater 2 <p>+91-2165451845</p><p>meeIndiaHeadquater2@gmail.com</p></label>
                <label>HeadQuater 3 <p>+91-2165451845</p><p>meeIndiaHeadquater3@gmail.com</p></label>
                <label>HeadQuater 4 <p>+91-2165451845</p><p>meeIndiaHeadquater4@gmail.com</p></label>
            </div>
        </div>
      
    </div>
  )
}

export default CustomerCare
