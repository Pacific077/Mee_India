import React, { useState } from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import "./GlobalSendQueryForm.css"
const GlobalSendQueryForm = () => {
  const [showForm,setShowForm] = useState(false);
  return (
    <div className={`GlobalSendQueryForm ${showForm ? 'showGlobalform' : ''}`}>
     {!showForm&& <div className="GetBestDealsTag" onClick={()=>setShowForm(true)}>Get Best Deal</div>}
      {showForm&&<div onClick={()=>setShowForm(false)} className="HideGlobalFormbtn">
      <FaAngleDoubleRight />
      </div>}
      
      <p className='GetBestdealHead'>Get List of Best <span>Gyms</span></p>
      <input type="text" />
      <input type="text" />
      <button className='getbstDealbtn'>Get Best Deal</button>
    </div>
  )
}

export default GlobalSendQueryForm