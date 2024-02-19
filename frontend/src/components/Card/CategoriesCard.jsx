import React from 'react'
import './Card.css'

const CategoriesCard = (props) => {
  return (
    <div className='categoryCard'>
        <div className="categorycardHead">
        <h3 className='categroyCount'>{props.count}+</h3>
            <img src={props.immg} alt="" className='categoryCardImg'/>
        </div>
        <div className="categoryCardDesc">
            <h2 className="categoryHead">
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