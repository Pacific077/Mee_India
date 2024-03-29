import React from 'react'
import './ReportBug.css'
const ReportBug = () => {
  return (
    <div className='reportBugMainDiv'>
      <textarea className='reportBugMessageField' placeholder='write bug...'></textarea>
      <div className='submitButton'>Submit </div>
    </div>
  )
}

export default ReportBug
