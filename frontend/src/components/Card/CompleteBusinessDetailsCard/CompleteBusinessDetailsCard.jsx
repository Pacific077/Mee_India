import React from 'react'
import "./CompleteBusinessDetailsCard.css"
const CompleteBusinessDetailsCard = ({ind}) => {
  return (
    <div className="CompleteBusinessDetailsCard" id={`scrollCard${ind}`}>
        <div className="conpleteBusinessdetailsCardtop">
            <div className="ComplBusDetailsHead">
                <h2>Add your complete Address</h2>
                <p>Add store location for yourcustomer to locate you easily</p>
            </div>
            <div className="ComplBusDetailsImg"></div>
        </div>
        <button className='BussinessDetailCardbtn'>Add</button>
    </div>
  )
}

export default CompleteBusinessDetailsCard