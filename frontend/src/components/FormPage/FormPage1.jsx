import React, { useState } from 'react'
import './FormPage.css'
import Breaker from './Breaker/Breaker'
import list from './states-and-districts.json'

const FormPage1 = () => {

  const [state,setState] = useState('');
  const [dist,setDist] = useState('');

  const [distList,setDistList] = useState([]);

  const stateList = list.states.map((obj)=>obj.state)
  console.log(stateList);


  const handleStateChange = (event) => {
    const temp = event.target.value;
    setState(event.target.value);
    const selectedStateObj = list.states.find((obj) => obj.state === temp);
    if (selectedStateObj) {
        setDistList(selectedStateObj.districts);
    } else {
        // Handle case when selected state is not found
        setDistList([]);
    }
  }

  const handleDistChange = (event)=>{
    setDist(event.target.value);
  }
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
            <select className='formInput half' onChange={handleStateChange}>
              <option value=''>Select State</option>
              {stateList.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <label className='formLabel'>District:</label>
            <select className='formInput half' onChange={handleDistChange}>
              <option value=''>Select District</option>
              {distList.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>
        <label className='formLabel'>PinCode:</label>
        <input placeholder='PinCode' className='formInput small'/>

        <button className='btn grnBtn'>Next</button>
    </div>
  )
}

export default FormPage1