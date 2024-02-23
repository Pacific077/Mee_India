import React from 'react'
import img1 from "../../assets/bsnsForm1.jpg"
import img2 from "../../assets/bsnsForm2.jpg"
import './Businessregister.css'
import BusinessFormCard from '../../components/Card/BusinessFormCard/BusinessFormCard'
import BusinessFormInpcont from '../../components/Card/BussinessForminp/BusinessFormInpcont'
const BusinessRegister = () => {
  return (
    <div className='BusinessRegisterPage'>
        <div className="BusinessregisterLeft">
            <img src={img1} alt="" srcset="" className='businessformImg' />
            <BusinessFormCard/>
            <img src={img2} alt="" srcset="" className='businessformImg' />
            <BusinessFormCard/>
            
            
        </div>
        <div className="BusinessregisterRight">
          <h1 className='BusinessFormHead'>Register your Business !</h1>
          <div className="BusinessRegisterForm">
        <BusinessFormInpcont/>
        <BusinessFormInpcont/>
        <BusinessFormInpcont/>
          </div>
          <div className="businessFormBtnCont">
            <button className='btn-sec btn-lg'>Cancel</button>
            <button className='btnPrim btn-lg btn-or'>Next</button>
          </div>
        </div>
    </div>
  )
}

export default BusinessRegister