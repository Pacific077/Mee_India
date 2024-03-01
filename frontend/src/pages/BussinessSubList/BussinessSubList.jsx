import React, { useEffect, useState } from 'react'
import './BussinessSubList.css'
import { useParams } from 'react-router-dom'
import SubCategoriesCard from '../../components/Card/SubcategoryCard/SubCategoriesCard'
import CategoriesArray from '../Home/CategoriesArray'

const BussinessSubList = () => {
  const [SubaCatArray,setSUbCatArr] = useState([]);
  const {Category} = useParams()
  useEffect(()=>{
    const ind = CategoriesArray.findIndex((category) => category.category === Category);
    setSUbCatArr(CategoriesArray[ind].subCat)
    console.log(CategoriesArray[ind].subCat)
  },[])
  return (
    <div className='BussinessSubListContainer'>
        <div className='BussinessSubListContainerBanner'>
          <img src="https://www.justdial.com/web-images/b_264.jpg?w=1920&q=75" alt='subCatBanner'/>
        </div>
        <h1>Sub-Categories</h1>
        <div className='SubcategoryContainer'>
           {SubaCatArray.map((subCat,ind)=>{
            return(
              <SubCategoriesCard key={ind} name={subCat.name} cat={Category}/>
            )
           })}
        </div>
    </div>
  )
}

export default BussinessSubList