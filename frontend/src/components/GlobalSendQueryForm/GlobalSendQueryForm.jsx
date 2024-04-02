import React, { useState } from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import "./GlobalSendQueryForm.css"
import { SendQueryToAdmin } from '../../apis/UserApi';
import { toast } from 'react-toastify';
const GlobalSendQueryForm = ({user,subCat,mainCategory,district}) => {
  
  const [showForm,setShowForm] = useState(false);
  const [contact,setContact] = useState('')

  const handleSubmit = async()=>{
    if(!contact){
      toast.warning("Enter your contact details!");
      return;
    }
    try{
      const question = `List of ${subCat} ${mainCategory} in ${district}`
      const resp = await SendQueryToAdmin({
        question,
        UserId:user._id,
        contact:contact
      })
      if(resp.status===200){
        toast.success("Query Sent")
        setShowForm(false);
      }
    }
    catch(e){
      console.log(e);
      toast.error("Something Went Wrong")
    }
  }


  return (
    <div className={`GlobalSendQueryForm ${showForm ? 'showGlobalform' : ''}`}>
     {!showForm&& <div className="GetBestDealsTag" onClick={()=>setShowForm(true)}>Get Best Deal</div>}
      {showForm&&<div onClick={()=>setShowForm(false)} className="HideGlobalFormbtn">
      <FaAngleDoubleRight />
      </div>}
      
      <p className='GetBestdealHead'>Get List of Best {subCat!=='null'&&<span>{subCat}</span>} <span>{mainCategory}</span></p>
      <input type="text" placeholder='Name' value={user.name} disabled/>
      <input type="text" placeholder='Contact' onChange={(e)=>setContact(e.target.value)} value={contact}/>
      <button className='getbstDealbtn' onClick={handleSubmit}>Get Best Deal</button>
    </div>
  )
}

export default GlobalSendQueryForm