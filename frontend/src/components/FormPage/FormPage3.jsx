import React, { useState } from 'react'
import Breaker from './Breaker/Breaker'
import CategoriesArray from '../../pages/Home/CategoriesArray';

const FormPage3 = ({
    mainCategory,
    setMainCategory,
    subCategory,
    setSubCategory,
    bio,
    setBio,
    setCounter
}) => {

    // const [cat,setCat] = useState('');
    const [subCatArr,setSubCatArr] = useState([]); 
    // const [subCat,setSubCat] = useState(''); 

    const handleCatChange = (event)=>{
        const temp = event.target.value;
        setMainCategory(event.target.value);
        const selectedCatObj = CategoriesArray.find((obj) => obj.category === temp);
        if (selectedCatObj) {
            setSubCatArr(selectedCatObj.subCat);
        } else {
            // Handle case when selected state is not found
        }
    }

    const handleNext = ()=>{
        setCounter('4');
    }
    const handlePrev = ()=>{  
        setCounter('2');
    }

  return (
    <div className='FormPageContainer'>
        <h1 className='formPage3heading'>Tell us something about your business</h1>
        <div>
            <label className='formLabel'>Select suitable Category for your business:</label>
            <select className='formInput small' onChange={handleCatChange}>
                <option value=''>Select</option>
                {CategoriesArray.map((cat, index) => (
                <option key={index} value={cat.category}>{cat.category}</option>
                ))}
            </select>
        </div>
        {subCatArr.length!==0 &&<div>
            <label className='formLabel'>Select suitable Sub-Category:</label>
            <select className='formInput small' onChange={(event)=>{setSubCategory(event.target.value)}}>
                <option value=''>Select</option>
                {subCatArr.map((cat, index) => (
                <option key={index} value={cat.name}>{cat.name}</option>
                ))}
            </select>
        </div>}

        <div className='businessBio'>
            <label className='formLabel'>Write a small Bio for your Business:</label>
            <input type='text' placeholder='Crisp and accurate bio helps customers to gain more insights about your business.' className='formInput bio' 
                onChange={(event)=>{setBio(event.target.value)}} value={bio}
            />
        </div>

        <div className='btnContainer'>
            <button className='btn orngBtn' onClick={handlePrev}>Previous</button>
            <button className='btn grnBtn' onClick={handleNext} >Next</button>
        </div>
  </div>
  )
}

export default FormPage3