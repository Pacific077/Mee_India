import React from 'react'
import { RxCross1 } from "react-icons/rx";
import "./SelectedSubCategoryCard.css"
const SelectedSubCategoryCard = ({val,subCategory,setSubCategory}) => {
    const handleCrossClick = ()=>{
        setSubCategory(subCategory.filter(item=>item!==val))
      }
  return (
    <p className="SelectedsubCategorycard">
    {val}
    <RxCross1 className='SubCatcrossicon' onClick={handleCrossClick} />
  </p>
  )
}

export default SelectedSubCategoryCard