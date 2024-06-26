import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import CatContext from "../../context/CategoryContext.jsx"
import "./Card.css"
const CategoriesCard = (props) => {
  const navigate = useNavigate()

  
  const CatCon = useContext(CatContext);
  const {district} = CatCon;

  const handleClick = ()=>{
    // console.log(props.subCat.length)
    if(props.subCat.length===0){
      navigate(`/bussiness-list/${district}/${props.category}/null`)
    }else{
      navigate(`/subList/${props.category}`)
    }
  }

  return (
    <div onClick={handleClick} className='CategoryCard'>
        <img className='CategoryImg' src={props.immg} alt="img" srcset="" />
        <p className='CategoryName'>{props.category}</p>
    </div>
  )
}

export default CategoriesCard