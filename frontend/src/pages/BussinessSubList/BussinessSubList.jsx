import React from 'react'
import './BussinessSubList.css'
import SubCategoriesCard from '../../components/Card/SubcategoryCard/SubCategoriesCard'

const BussinessSubList = () => {
  return (
    <div className='BussinessSubListContainer'>
        <div className='BussinessSubListContainerBanner'>
          <img src="https://www.justdial.com/web-images/b_264.jpg?w=1920&q=75" alt='subCatBanner'/>
        </div>
        <h1>Sub-Categories</h1>
        <div className='SubcategoryContainer'>
            <SubCategoriesCard/>
            <SubCategoriesCard/>
            <SubCategoriesCard/>
        </div>
        <div className='SubcategoryContainer'>
            <SubCategoriesCard/>
            <SubCategoriesCard/>
            <SubCategoriesCard/>
        </div>
    </div>
  )
}

export default BussinessSubList