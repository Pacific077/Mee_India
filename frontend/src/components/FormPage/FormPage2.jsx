import React, { useState } from 'react'
import './FormPage.css'
import Breaker from './Breaker/Breaker'
import list from './states-and-districts.json'

const FormPage2 = () => {

    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const [daySelected,setDaySelected] = useState([true,true,true,true,true,true,true]);

    const handleClick = (ind)=>{
        console.log("index" + ind);
        const element = document.getElementById(ind);
        element.classList.toggle('selected');
        setDaySelected((prev)=>{
            const updatedDays = [...prev]; // Create a copy of the previous state array
            updatedDays[ind] = !updatedDays[ind]; // Toggle the value at index 'ind'
            return updatedDays; 
        })
    }

return (
  <div className='FormPageContainer'>
    <Breaker field="Contacts" />
    <div className='twoinputfield'>
      <div>
        <label className='formLabel'>Email:</label>
        <input type='email' placeholder='' className='formInput' />
      </div>
      <div>
        <label className='formLabel'>Contact No.:</label>
        <input placeholder='' className='formInput' />
      </div>
    </div>

    <Breaker field="Schedule" />
    <label className='formLabel'>Select the days you are Open</label>
    <div className='daySelector'>
        {/* <div> */}
            {weekdays.map((day,ind)=>{
               return  <div className='daybtn' id={ind} onClick={()=>handleClick(ind)}>{day}</div>
            })}
        {/* </div> */}
    </div>

    <div className='timeField'>
        <div>
            <label className='formLabel'>Opens At:</label>
            <input type='time' className='timeInput'></input>
        </div>
        <div>
            <label className='formLabel'>Closes At:</label>
            <input type='time' className='timeInput'></input>
        </div>
    </div>

    <button className='btn grnBtn'>Next</button>
  </div>
)
}

export default FormPage2