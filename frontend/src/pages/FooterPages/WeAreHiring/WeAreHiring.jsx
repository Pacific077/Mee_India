import React from 'react'
import './WeAreHiring.css'
import wearehiring from "../../../assets/we-are-hiring.jpg"

const WeAreHiring = () => {
   
  return (
    <div>
        <div className='hiringFirstDivContainer'>
            <div className='hiringFirstDivContainer-firstBox'>
                <div className='hiringFistBox-firstHeading'>Grow with Us And Build Your</div>
                <div className='hiringFistBox-secondHeading'>Career</div>
                <div className='hiringFistBox-thirdHeading'>Come on board with the India's No 1 Local Search Engine</div>
                <div className='hiringForm'>
                    <input className='hiringInputField' placeholder='name' ></input>
                    <input className='hiringInputField' placeholder='abc@gmail.com'></input>
                    <div className='submitButton' >Submit</div>
                </div>
            </div>
            <div className='hiringFirstDivContainer-secondBox'>
                <div>
                    <img className='hiringImage' src={wearehiring}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default WeAreHiring
