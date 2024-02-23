import React from 'react'
import "./BusinessForminpCont.css"
const BusinessFormInpcont = () => {
  return (
    <div className='businessinpCont'>
    <div className="BusinesslabelAndInp">
      <label htmlFor="">UserName</label>
      <input type="text" placeholder='John Doe' />
    </div>
    <div className="BusinesslabelAndInp">
      <label htmlFor="">UserName</label>
      <input type="text" />
    </div>
  </div>
  )
}

export default BusinessFormInpcont