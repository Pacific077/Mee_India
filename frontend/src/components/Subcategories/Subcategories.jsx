import React, { useContext } from 'react'
import "./Subcategories.css"
import SubCategoriesCard from '../Card/SubcategoryCard/SubCategoriesCard'
import { RxCross1 } from "react-icons/rx";
import CatContext from '../../context/CategoryContext';
const Subcategories = (props) => {
  const catCont = useContext(CatContext);
  const{setSubCatArr,SubCatArr} = catCont;
  const {setShowSub} = props;
  const onCrossClick = ()=>{
    setShowSub(false);
    document.body.style.overflow = 'scroll';
  }
  return (
    <div className='SubcategoriesCont'>
        <div className="subcategry-bg"></div>
        <div className="subcategory-card-cont">
      <RxCross1 className='sub-cat-cross' onClick={onCrossClick}/>
           {SubCatArr.map((subCat)=>{
            return(<SubCategoriesCard />)
           })}
           
        </div>
    </div>
  )
}

export default Subcategories