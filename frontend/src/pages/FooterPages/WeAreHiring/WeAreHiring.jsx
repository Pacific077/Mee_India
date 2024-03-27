import React from 'react'
import './WeAreHiring.css'
import wearehiring from "../../../assets/we-are-hiring.jpg"

const WeAreHiring = () => {
   
  return (
    <div>
        <div className='firstDivContainer'>
            <div className='firstDivContainer-firstBox'>
                <div className='fistBox-firstHeading'>Grow with Us And Build Your</div>
                <div className='fistBox-secondHeading'>Career</div>
                <div className='fistBox-thirdHeading'>Come on board with the India's No 1 Local Search Engine</div>
                <div className='hiringForm'>
                    <input className='inputField' placeholder='name' ></input>
                    <input className='inputField' placeholder='abc@gmail.com'></input>
                    <div className='submitButton' >Submit</div>
                </div>
            </div>
            <div className='firstDivContainer-secondBox'>
                <div>
                    <img className='hiringImage' src={wearehiring}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default WeAreHiring
