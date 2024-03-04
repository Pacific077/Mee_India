import React, { useContext } from 'react'
import "./SubcategoryCard.css"
import { useNavigate } from "react-router-dom";
import CatContext from '../../../context/CategoryContext.jsx'

const SubCategoriesCard = ({name,cat}) => {
  const navigate  = useNavigate()

  const CatCon = useContext(CatContext);
  const {district} = CatCon;

  const handleClick = ()=>{
    navigate(`/bussiness-list/${district}/${cat}/${name}`)
  }
  return (
    <div className='subCategoryCard' onClick={handleClick}>
      <img src="https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_beautyparlours.png" className='SubcategoryImg' alt="" />
      <p className='subcategoryLabel'>{name?name:"random"}</p>
    </div>
  )
}

export default SubCategoriesCard