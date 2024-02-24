import React from 'react'
import "./MainCategories.css"
import MainCatCard from '../Card/MainCatCard/MainCatCard'
const MainCategories = () => {
  return (
    <div className='MainCategories'>
      <p className='MainCategoryHead'>Wedding Requisites</p>
      <div className="MainCatCardCont">

        <MainCatCard/>
        <MainCatCard/>
        <MainCatCard/>
      </div>
    </div>
  )
}

export default MainCategories