import React, { useContext } from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom';
import CatContext from '../../context/CategoryContext';

const CategoriesCard = (props) => {
    const navigate = useNavigate();
    const CatCont= useContext(CatContext);
    const{setSubCatArr,SubCatArr} = CatCont;
    const {setShowSub,subCat} = props;
    const handleCategoryClick = () => {
        if(subCat.length===0){
            navigate('/login');
            // to be change(only location)
        }else{

            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.body.style.overflow = 'hidden';
            setShowSub(true);
            setSubCatArr(subCat);
        }
      };
  return (
    <div className='categoryCard'>
        <div className="categorycardHead">
        <h3 className='categroyCount'>{props.count}+</h3>
            <img src={props.immg} alt="" className='categoryCardImg'/>
        </div>
        <div className="categoryCardDesc">
            <h2 className="categoryHead" onClick={handleCategoryClick}>
                {props.category}
            </h2>
            <p className="CategoryCardDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores quidem atque vitae veritatis?
            </p>
        </div>
    </div>
  )
}

export default CategoriesCard