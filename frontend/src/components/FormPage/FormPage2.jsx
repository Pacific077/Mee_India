import React, { useState } from 'react'
import './FormPage.css'
import Breaker from './Breaker/Breaker'
import { toast } from "react-toastify";
import list from './states-and-districts.json'

const FormPage2 = ({
  bussinessMail,
  setBussinessMail,
  bussinessContact,
  setBussinessContact,
  openDays,
  setOpenDays,
  openTime,
  setOpenTime,
  closeTime,
  setCloseTime,
  setCounter
}) => {

    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    

    const handleClick = (ind)=>{
        console.log("index" + ind);
        const element = document.getElementById(ind);
        element.classList.toggle('selected');
        setOpenDays((prev)=>{
            const updatedDays = [...prev]; // Create a copy of the previous state array
            updatedDays[ind] = !updatedDays[ind]; // Toggle the value at index 'ind'
            return updatedDays; 
        })
    }

    const handleNext = ()=>{

        if(bussinessContact==''||bussinessMail==''||openTime==''||closeTime==''){
          toast.warning("All fields compulsary")
        }else if (!(openDays.find(day=>day==true))){  
          toast.warning("All fields compulsary")
        }else{
          setCounter('3');
        }
      
    }
    const handlePrev = ()=>{

      setCounter('1');
    }

return (
  <div className='FormPageContainer'>
    <h1 className='formPage3heading'>How to reach you? </h1>
    {/* <Breaker field="Contacts" /> */}
    <div className='twoinputfield'>
      <div>
        <label className='formLabel'>Email:</label>
        <input type='email' placeholder='' className='formInput' onChange={(event)=>{setBussinessMail(event.target.value)}} value={bussinessMail}/>
      </div>
      <div>
        <label className='formLabel'>Contact No.:</label>
        <input placeholder='' className='formInput' onChange={(event)=>{setBussinessContact(event.target.value)}} value={bussinessContact}/>
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
            <input type='time' className='timeInput' onChange={(event)=>{setOpenTime(event.target.value)}} value={openTime}/>
        </div>
        <div>
            <label className='formLabel'>Closes At:</label>
            <input type='time' className='timeInput' onChange={(event)=>{setCloseTime(event.target.value)}} value={closeTime}/>
        </div>
    </div>
          
    <div className='btnContainer'>
    <button className='btn orngBtn' onClick={handlePrev}>Previous</button>
    <button className='btn grnBtn' onClick={handleNext} >Next</button>
    </div>
  </div>
)
}

export default FormPage2