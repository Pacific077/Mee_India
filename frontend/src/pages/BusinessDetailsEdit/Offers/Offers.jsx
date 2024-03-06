import React from 'react'

const Offers = () => {
  return (
    <>
    <h1 className='BusinessEditHeading'>Add Offers</h1>
    <div className="BusinessNameEditFormDesc">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga sectetur adipisicing elit. Adipisci, fuga.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga etur adipisicing elit. Adipisci, fuga sectetur adipisicing elit. .</p>
    </div>
    <div className="BusinessNameEditForm">
      <div className="bussinessEditLabelandInp">
        <label htmlFor="">Offer in Percentage</label>
        <input type="text" />
      </div>
      <div className="bussinessEditLabelandInp">
        <label htmlFor="">Offer Description</label>
        <input type="text" />
      </div>
    </div>
    <button className='btnPrim btn-lg'>Save</button>
    </>
  )
}

export default Offers