import React from 'react'
import img1 from "../../assets/registerFormSIdeBanner.avif"
import img2 from "../../assets/registerFormSIdeBanner2.avif"
import './Businessregister.css'
import BusinessFormCard from '../../components/Card/BusinessFormCard/BusinessFormCard'
import BusinessFormInpcont from '../../components/Card/BussinessForminp/BusinessFormInpcont'
import FormPage1 from '../../components/FormPage/FormPage1'
const BusinessRegister = () => {
  return (
    <div className='BusinessRegisterPage'>
        <div className="BusinessregisterLeft">
            <img src={img1} alt="" srcset="" className='businessformImg' />
            <img src={img2} alt="" srcset="" className='businessformImg' />
        </div>
        <div className="BusinessregisterRight">
          <div className='formContainer'>
            <FormPage1/>
          </div>
        </div>
    </div>
  )
}

export default BusinessRegister