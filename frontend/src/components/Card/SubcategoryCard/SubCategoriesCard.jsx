import React from 'react'
import "./SubcategoryCard.css"
import surgeon from "../../../assets/surgeon.jpg"
const SubCategoriesCard = () => {
  return (
    <div className='subCategoryCard'>
      <img src={surgeon} className='SubcategoryImg' alt="" />
      <p className='subcategoryLabel'>Physician</p>
    </div>
  )
}

export default SubCategoriesCard