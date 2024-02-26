import React from 'react'
import BussinessdetailsArray from './BussinesedetailsCardAaray'
import "./CompleteBusinessDetails.css"
import CompleteBusinessDetailsCard from '../Card/CompleteBusinessDetailsCard/CompleteBusinessDetailsCard'
const CompleteBusinessDetails = () => {
  const handleClick=(ind)=>{
    const container = document.getElementById(`scrollCard${ind}`);
    console.log(container)
    container.scrollIntoView({behavior:"smooth"});
  }
  return (
    <div className='CompleteBusinessDetails'>
        <div className="BusinessDetailsCardCont">
          {BussinessdetailsArray.map((ele,index)=>{
            return <CompleteBusinessDetailsCard key={index} ind={index}/>
          })}
        </div>
       <div className="navigationdots">
        <p onClick={()=>handleClick(0)}></p>
        <p onClick={()=>handleClick(1)}></p>
        <p onClick={()=>handleClick(2)}></p>
        <p onClick={()=>handleClick(3)}></p>
        <p onClick={()=>handleClick(4)}></p>
       </div>
    </div>
  )
}

export default CompleteBusinessDetails