import React from 'react'
import "./AdminCard.css"
const AdminCard = ({name,count,color,text}) => {
  return (
    <div className='adminCard' style={{backgroundColor:`${color}`,color:`${text}`}}>
        <h1>{name}</h1>
        <p>{count}</p>
        {name!=="Total Earnings"?<a className='AdminCardListShowBtn'>Show List</a>:""}
        
    </div>
  )
}

export default AdminCard