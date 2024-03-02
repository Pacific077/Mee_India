import React, { useState } from 'react';
import './FormPage.css';
import Breaker from './Breaker/Breaker';
import list from './states-and-districts.json';

const FormPage1 = ({
  title,
  setTitle,
  address,
  setAddress,
  district,
  setDistrict,
  state,
  setState,
  pinCode,
  setPinCode,
  setCounter
}) => {
  const [distList, setDistList] = useState([]);
  const stateList = list.states.map((obj) => obj.state);

  const handleStateChange = (event) => {
    const temp = event.target.value;
    setState(temp);
    const selectedStateObj = list.states.find((obj) => obj.state === temp);
    if (selectedStateObj) {
      setDistList(selectedStateObj.districts);
    } else {
      setDistList([]);
    }
  };

  const handleDistChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePinCodeChange = (event) => {
    setPinCode(event.target.value);
  };

  return (
    <div className='FormPageContainer'>
      <label className='formLabel'>Title:</label>
      <input
        placeholder='Name of your Business'
        className='formInput wide'
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />

      <Breaker field='Address' />
      <div>
        <label className='formLabel'>Locality:</label>
        <input
          placeholder='Local Area in descriptive form'
          className='formInput wide'
          onChange={handleAddressChange}
          value={address}
        />
      </div>
      <div className='twoinputfield'>
        <div>
          <label className='formLabel'>State:</label>
          <select
            className='formInput half'
            onChange={handleStateChange}
            value={state}
          >
            <option value=''>Select State</option>
            {stateList.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className='formLabel'>District:</label>
          <select
            className='formInput half'
            onChange={handleDistChange}
            value={district}
          >
            <option value=''>Select District</option>
            {distList.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>
      <label className='formLabel'>PinCode:</label>
      <input
        placeholder='PinCode'
        className='formInput small'
        onChange={handlePinCodeChange}
        value={pinCode}
      />

      <button className='btn grnBtn' onClick={()=>{setCounter('2')}}>Next</button>
    </div>
  );
};

export default FormPage1;
