import React from 'react'
import "./BusinessNamEdit.css"
const BusinessNamEdit = () => {
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
        <input type="text" />
      </div>
      <div className="bussinessEditLabelandInp">
        <label htmlFor="">Legal Business Name</label>
        <input type="text" />
      </div>
    </div>
    <button className='btnPrim btn-lg'>Save</button>
    </>
  )
}

export default BusinessNamEdit