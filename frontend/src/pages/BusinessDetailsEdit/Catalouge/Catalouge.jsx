import React from 'react'
import "./Catalouge.css"
const Catalouge = () => {
  return (
    <>
    <h1 className='BusinessEditHeading'>Add Catalouges </h1>
    <div className="CatalougeEditFormDesc">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga sectetur adipisicing elit. Adipisci, fuga.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fuga etur adipisicing elit. Adipisci, fuga sectetur adipisicing elit. .</p>
    </div>
    <div className="BusinessEditCatalougeCont">
      <div className="AddCatalougeCard">
        <p className='plusSign'>+</p>
        <p>Add Photo</p>
        <input type="file" className='BussinessEditCatalougeFile' />
      </div>
      <div className="AddCatalougeCard">
        <p className='plusSign'>+</p>
        <p>Add Photo</p>
        <input type="file" className='BussinessEditCatalougeFile' />
      </div>
      <div className="AddCatalougeCard">
        <p className='plusSign'>+</p>
        <p>Add Photo</p>
        <input type="file" className='BussinessEditCatalougeFile' />
      </div>
    </div>
    <button className='btnPrim btn-lg'>Save</button>
    </>
  )
}

export default Catalouge