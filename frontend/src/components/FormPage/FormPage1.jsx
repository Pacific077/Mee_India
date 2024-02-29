import React from 'react'
import './FormPage.css'
import Breaker from './Breaker/Breaker'
import list from './states-and-districts.json'

const FormPage1 = () => {

  const stateList = list.states.map((obj)=>obj.state)
  console.log(stateList);

  return (
    <div className='FormPageContainer'>
        <label className='formLabel'>Title:</label>
        <input placeholder='Name of your Business' className='formInput wide'/>

        <Breaker field="Address"/>
        <div>
          <label className='formLabel'>Locality:</label>
          <input placeholder='Local Area in descriptive form' className='formInput wide'/>
        </div>
        <div className='twoinputfield'>
          <div>
            <label className='formLabel'>State:</label>
            <select className='formInput half'>
              <option value=''>Select State</option>
              {stateList.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <label className='formLabel'>District:</label>
            <input placeholder='District' className='formInput half'/>
          </div>
        </div>
        <label className='formLabel'>PinCode:</label>
        <input placeholder='PinCode' className='formInput small'/>
    </div>
  )
}

export default FormPage1