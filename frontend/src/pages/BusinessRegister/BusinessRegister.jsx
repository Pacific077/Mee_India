import React, { useState } from 'react'
import img1 from "../../assets/registerFormSIdeBanner.avif"
import img2 from "../../assets/registerFormSIdeBanner2.avif"
import './Businessregister.css'
import BusinessFormCard from '../../components/Card/BusinessFormCard/BusinessFormCard'
import BusinessFormInpcont from '../../components/Card/BussinessForminp/BusinessFormInpcont'
import FormPage1 from '../../components/FormPage/FormPage1'
import FormPage2 from '../../components/FormPage/FormPage2'
import FormPage3 from '../../components/FormPage/FormPage3'
import FormPage4 from '../../components/FormPage/FormPage4'
const BusinessRegister = () => {
  const [title,setTitle] = useState('');
  const [address,setAddress] = useState('');
  const [district,setDistrict] = useState('');
  const [state,setState] = useState('');
  const [pinCode,setPinCode] = useState('');
  const [bussinessContact,setBussinessContact] = useState('');
  const [bussinessMail,setBussinessMail] = useState('');
  const [openTime,setOpenTime] = useState('');
  const [closeTime,setCloseTime] = useState('');
  const [openDays,setOpenDays] = useState([false,false,false,false,false,false,false]);
  const [mainCategory,setMainCategory] = useState('');
  const [subCategory,setSubCategory] = useState('');
  const [bio,setBio] = useState('');

  const [counter,setCounter] = useState('1');

  return (
    <div className='BusinessRegisterPage'>
        <div className="BusinessregisterLeft">
            <img src={img1} alt="" srcset="" className='businessformImg' />
            <img src={img2} alt="" srcset="" className='businessformImg' />
        </div>
        <div className="BusinessregisterRight">
          <div className='formContainer'>
            {counter==='1'&&<FormPage1 
              title={title}
              setTitle={setTitle}
              address={address}
              setAddress={setAddress}
              district={district}
              setDistrict={setDistrict}
              state={state}
              setState={setState}
              pinCode={pinCode}
              setPinCode={setPinCode}
              setCounter={setCounter}
            />}

            {counter==='2'&&<FormPage2
              bussinessMail={bussinessMail}
              setBussinessMail={setBussinessMail}
              bussinessContact={bussinessContact}
              setBussinessContact={setBussinessContact}
              openDays={openDays}
              setOpenDays={setOpenDays}
              openTime={openTime}
              setOpenTime={setOpenTime}
              closeTime={closeTime}
              setCloseTime={setCloseTime}
              setCounter={setCounter}
            />}
            {counter==='3'&&<FormPage3
              mainCategory={mainCategory}
              setMainCategory={setMainCategory}
              subCategory={subCategory}
              setSubCategory={setSubCategory}
              bio={bio}
              setBio={setBio}
              setCounter={setCounter}
            />}
             {counter==='4'&&<FormPage4
             setCounter={setCounter}
            />}
          </div>
        </div>
    </div>
  )
}

export default BusinessRegister