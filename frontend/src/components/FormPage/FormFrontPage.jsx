import React from 'react'
import './FormPage.css'

const FormFrontPage = ({setCounter}) => {
  return (
    <div className='formPageBannerCntnr'>
        <h1 className='formBannerHeading'>Mark your Online presence</h1>
        <button className='btn btnPrim' onClick={()=>setCounter('1')}>Proceed</button>
    </div>
  )
}

export default FormFrontPage