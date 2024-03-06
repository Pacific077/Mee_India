import React from 'react'
import "./Websites.css"
const Websites = () => {
  return (
    <>
    <h1 className='BusinessEditHeading'>Add your Website </h1>
    <div className="BusinessNameEditFormDesc">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga sectetur adipisicing elit. Adipisci, fuga.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga etur adipisicing elit. Adipisci, fuga sectetur adipisicing elit. .</p>
    </div>
    <div className="BusinessNameEditForm">
      <div className="bussinessEditLabelandInp">
        <label htmlFor="">Add Website url</label>
        <input type="text" />
      </div>
      <div className="bussinessEditLabelandInp">
        <label htmlFor="">Website Description</label>
        <input type="text" />
      </div>
    </div>
    <button className='btnPrim btn-lg'>Save</button>
    </>
  )
}

export default Websites