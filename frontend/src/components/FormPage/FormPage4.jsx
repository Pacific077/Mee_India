import React, { useState } from 'react'
import CategoriesArray from '../../pages/Home/CategoriesArray';

const FormPage4 = ({
    setCounter
}) => {

    const handleNext = ()=>{
        
    }
    const handlePrev = ()=>{  
        setCounter('3');
    }

  return (
    <div className='FormPageContainer'>
        <h1 className='formPage3heading'>Upload some photos of your business</h1>
        

        <div className='btnContainer'>
            <button className='btn orngBtn' onClick={handlePrev}>Previous</button>
            <button className='btn grnBtn' onClick={handleNext} >Next</button>
        </div>
  </div>
  )
}

export default FormPage4