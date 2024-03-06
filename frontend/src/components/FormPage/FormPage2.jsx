import React, { useState } from 'react'
import './FormPage.css'
import Breaker from './Breaker/Breaker'
import { toast } from "react-toastify";
import list from './states-and-districts.json'
import AddIcon from '@mui/icons-material/Add';

const FormPage2 = ({
  bussinessMail,
  setBussinessMail,
  bussinessContact,
  setBussinessContact,
  bussinessAltContact,
  setBussinessAltContact,
  openDays,
  setOpenDays,
  openTime,
  setOpenTime,
  closeTime,
  timingArr,
  setTimingArr,
  setCloseTime,
  setCounter
}) => {

    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const onAddClick = ()=>{
      if(openTime==''||closeTime=='')toast.warning("All fields compulsary");
      else{
        setTimingArr((prev)=>[...prev,openTime,closeTime])
        setOpenTime('');setCloseTime('');
      }
    }
//
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

        if(bussinessContact==''||bussinessMail==''||timingArr.length===0){
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
    </div>
    <div className='twoinputfield'>
      <div>
        <label className='formLabel'>Contact:</label>
        <input placeholder='' className='formInput' onChange={(event)=>{setBussinessContact(event.target.value)}} value={bussinessContact}/>
      </div>
      <div>
        <label className='formLabel'>Alternate Contact:</label>
        <input placeholder='' className='formInput' onChange={(event)=>{setBussinessAltContact(event.target.value)}} value={bussinessAltContact}/>
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
        <div className='addTime' onClick={onAddClick}>
          <p>Add this Timing </p>
          <span ><AddIcon/></span>
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