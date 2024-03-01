import React, { useState } from 'react'
import Breaker from './Breaker/Breaker'

const FormPage3 = () => {

    const [cat,setCat] = useState('');
    const [subCatArr,setSubCatArr] = useState([]); 
    const [subCat,setSubCat] = useState(''); 

    const array = [
        {
            'Cat':"Hotel",
            'SubCat':['1Star','2Star']
        },
        {
            'Cat':"Restaurant",
            'SubCat':[]
        },
        {
            'Cat':"School",
            'SubCat':[]
        },
        {
            'Cat':"Salon",
            'SubCat':['Men','Women','Unisex']
        }
    ]

    const handleCatChange = (event)=>{
        const temp = event.target.value;
        setCat(event.target.value);
        const selectedCatObj = array.find((obj) => obj.Cat === temp);
        if (selectedCatObj) {
            setSubCatArr(selectedCatObj.SubCat);
        } else {
            // Handle case when selected state is not found
        }
    }

  return (
    <div className='FormPageContainer'>
        <div>
            <label className='formLabel'>Select suitable Category for your business:</label>
            <select className='formInput half' onChange={handleCatChange}>
                <option value=''>Select State</option>
                {array.map((cat, index) => (
                <option key={index} value={cat.Cat}>{cat.Cat}</option>
                ))}
            </select>
        </div>

    <button className='btn grnBtn'>Next</button>
  </div>
  )
}

export default FormPage3