import React, { useState } from 'react';
import './FormPage.css';
import Breaker from './Breaker/Breaker';
import list from './states-and-districts.json';
import { toast } from "react-toastify";
import TextField from '@mui/material/TextField';
import { Button, MenuItem } from '@mui/material';
import axios from 'axios';
const FormPage1 = ({
  title,
  setTitle,
  address,
  setAddress,
  district,
  setDistrict,
  longitude,
  setLongitude,
  latitude,
  setLatitude,
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

  const setCoordinates = async()=>{
    if(!district){
      toast.warning("Please select a District!")
    }
    try {
      const resp = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${district},IN&limit=5&appid=ffcdd1abf435afb68672874babf1d07a`)
      setDistrict(resp.data[0].name)
      setLatitude(resp.data[0].lat)
      setLongitude(resp.data[0].lon)
      console.log(resp.data[0])
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong!")
    }
  }

  const handleNextClick = ()=>{
    if(title===''||pinCode===''||address===''||state===''||district===''||longitude===''||latitude===''){
      toast.warning("All fields compulsary")
    }else{
      console.log(title,pinCode,address,state,district) 
      setCounter('2');

    }
  }
  return (
    <div className='FormPageContainer'>
      <h1 className='formPage3heading'>Where is your business located?</h1>
      {/* <label className='formLabel'>Title:</label>
      <input
        placeholder='Name of your Business'
        className='formInput wide'
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      /> */}
      <TextField
          required
          id="Title"
          label="Title"
          defaultValue=""
          size="small"
          placeholder='Name of your Business'
          className='formInput wide'
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />

      <Breaker field='Address' />
      <div>
        {/* <label className='formLabel'>Locality:</label>
        <input
          placeholder='Local Area in descriptive form'
          className='formInput wide'
          onChange={handleAddressChange}
          value={address}
        /> */}
        <TextField
          required
          id="Address"
          label="Address"
          defaultValue=""
          size="small"
          fullWidth
          placeholder='Local Area in descriptive form'
          className='formInput wide'
          onChange={handleAddressChange}
          value={address}
        />
      </div>

      <div className='twoinputfield'>
        <div>
        <TextField
          id="outlined-select-currency"
          select
          label="State"
          defaultValue=""
          helperText="Please select your State"
          onChange={handleStateChange}
          value={state}
          size='small'
          margin='normal'
        >
          {stateList.map((state, index) => (
            <MenuItem key={index} value={state}>
              {state}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="District"
            // defaultValue=""
            helperText="Please select your District"
            onChange={handleDistChange}
            value={district}
            size='small'
            margin='normal'
          >
            {distList.map((state, index) => (
              <MenuItem key={index} value={state}>
                {state}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Button variant="contained" className='setCoordinateBtn' onClick={setCoordinates}>
          <span>Set Coordinates</span>
          <span style={{fontSize:"10px"}}>Latitude: {latitude}</span>
          <span style={{fontSize:"10px"}}>Longitude: {longitude}</span>
        </Button>
      </div>
      <TextField
          required
          id="Pincode"
          label="Pincode"
          defaultValue=""
          size="small"
          placeholder='Pincode'
          className='formInput small'
          onChange={handlePinCodeChange}
          value={pinCode}
        />
      {/* <label className='formLabel'>PinCode:</label>
      <input
        placeholder='PinCode'
        className='formInput small'
        onChange={handlePinCodeChange}
        value={pinCode}
      /> */}

      <button className='btn grnBtn' onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default FormPage1;
