import React, { useState } from 'react'
import "./BusinessNamEdit.css"
import { toast } from "react-toastify";
import { BusienessEdit } from '../../../apis/BusinessApi'
import { useNavigate, useParams } from 'react-router-dom';
const BusinessNamEdit = () => {
  const {BusinessId} =useParams();
  const navigate = useNavigate();
  const [BusinessName,SetBusinessName]= useState("");
  const [LegalBusinessName,SetLegalBusinessName]= useState("");
  const handleEditCLick = async()=>{
    try{
      const Data = {
        name:BusinessName,LegalBusinessName,
        businessId:BusinessId
      }

      const resp = await BusienessEdit(Data);
      if(resp.status===200){
        toast.success("Name Changed Successfully")
        navigate(`/business-dashboard/${BusinessId}`)
      }
    }catch(er){
      toast.error("Something Went Wrong")
    }
  }
  return (
    <>
    <h1 className='BusinessEditHeading'>Business Name </h1>
    <div className="BusinessNameEditFormDesc">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga sectetur adipisicing elit. Adipisci, fuga.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga etur adipisicing elit. Adipisci, fuga sectetur adipisicing elit. .</p>
    </div>
    <div className="BusinessNameEditForm">
      <div className="bussinessEditLabelandInp">
        <label htmlFor="">Business Name</label>
        <input type="text" onChange={(e)=>SetBusinessName(e.target.value)} />
      </div>
      <div className="bussinessEditLabelandInp">
        <label htmlFor="">Legal Business Name</label>
        <input type="text" onChange={(e)=>SetLegalBusinessName(e.target.value)} />
      </div>
    </div>
    <button className='btnPrim btn-lg' onClick={handleEditCLick}>Save</button>
    </>
  )
}

export default BusinessNamEdit