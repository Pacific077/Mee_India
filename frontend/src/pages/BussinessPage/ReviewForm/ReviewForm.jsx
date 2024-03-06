import React from 'react'
import './ReviewForm.css'
import ReactStars from "react-rating-stars-component";
import AutoSizeInputField from '../AutoSizeInputField/AutoSizeInputField';

const ReviewForm = ({rating,setRating,reviewMsg,setReviewMsg,handleReviewFormSubmit}) => {


  return (
    <div className='reviewForm'>
        <div className='star-rating'>
            <p>How many stars would you Rate this business.</p>
            <div>
              <ReactStars
                count={5}
                onChange={(newRating) => setRating(newRating)}
                size={24}
                activeColor="#ffd700"
              />
        </div>
            </div>
            <p>Want to Review this Business. Enter your review and Click submit.</p>
            <AutoSizeInputField reviewMsg={reviewMsg} setReviewMsg={setReviewMsg}/>
            <button className='textareaSubmit' onClick={handleReviewFormSubmit}>Submit</button>
    </div>
  )
}

export default ReviewForm