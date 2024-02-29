import React from 'react'
import "./SubcategoryCard.css"
import surgeon from "../../../assets/surgeon.jpg"
const SubCategoriesCard = () => {
  return (
    <div className='subCategoryCard'>
      <img src="https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_beautyparlours.png" className='SubcategoryImg' alt="" />
      <p className='subcategoryLabel'>Physician</p>
    </div>
  )
}

export default SubCategoriesCard