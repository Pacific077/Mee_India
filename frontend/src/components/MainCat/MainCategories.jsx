import React from 'react'
import "./MainCategories.css"
import MainCatCard from '../Card/MainCatCard/MainCatCard'
const MainCategories = ({name,SubCat}) => {
  return (
    <div className='MainCategories'>
      <p className='MainCategoryHead'>{name}</p>
      <div className="MainCatCardCont">
        {SubCat.map((ele,ind)=>{
          return(
            <MainCatCard key={ind} name={ele.name} img={ele.img}/>
          )
        })}
        {/* <MainCatCard/>
        <MainCatCard/> */}
      </div>
    </div>
  )
}

export default MainCategories