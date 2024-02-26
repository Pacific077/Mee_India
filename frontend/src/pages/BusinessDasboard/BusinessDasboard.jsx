import React from 'react'
import "./BusinessDasboard.css"
import MyBusinessCard from '../../components/Card/MyBusinessCard/MyBusinessCard'
const BusinessDasboard = () => {
  return (
    <div className="BusinessDasboard">
<div className="MyBusiness">
<h1 className='businessDashboardHead'>My Business</h1>
    <div className='MyBusineesCont'>
        <MyBusinessCard/>
        <MyBusinessCard/>
        <MyBusinessCard/>
        
    </div>
</div>
    </div>
  )
}

export default BusinessDasboard