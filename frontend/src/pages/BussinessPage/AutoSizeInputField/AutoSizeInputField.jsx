import React, { useState } from 'react'
import './AutoSizeInputField.css'
import { toast } from 'react-toastify';

const AutoSizeInputField = ({reviewMsg,setReviewMsg}) => {

    // const [text,setText] = useState("");
    const [cnt,setCnt] = useState(0);

    const handleChange = (event) => {
        if (event.target.value.length < cnt || event.target.value === "") {
            // If the length of the input is less than the current count
            // or if the input is empty, allow the change
            setReviewMsg(event.target.value);
            setCnt(event.target.value.length);
        } else if (event.target.value.length === cnt && event.nativeEvent.inputType === "deleteContentBackward") {
            // If the input length equals the count and the input type is backspace
            // Allow the change and decrease the count
            setReviewMsg(event.target.value);
            setCnt(event.target.value.length - 1);
        } else if (cnt < 200) {
            // If the count is less than 200, allow the change
            setReviewMsg(event.target.value);
            setCnt(event.target.value.length);
        } else {
            // Otherwise, show a warning
            toast.warning("Max 200 letters allowed!");
        }
    }
    

  return (
    <div className='AutoSizeInputField'>
        <textarea onChange={handleChange} value={reviewMsg}/>
        <span>{cnt}/200</span>
    </div>
  )
}

export default AutoSizeInputField