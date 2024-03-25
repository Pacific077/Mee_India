import React from 'react'
import {useNavigate} from "react-router-dom"
import "./AdminCard.css"
const AdminCard = ({usercount,shopcount,name,count,color,text}) => {
  const navigate= useNavigate()

  const handleClick = ()=>{
    if(name==="Total Users Count"){
      navigate('/admin/showUserslist')
    }else{
      navigate('/admin/showShopslist')
    }
  }
  return (
    <div className='adminCard' style={{backgroundColor:`${color}`,color:`${text}`}}>
        <h1>{name}</h1>
        <p>
        {name === 'Total Users Count' ? usercount :
          (name === "Total Shops Count" ? shopcount : count)}
      </p>
        {name!=="Total Earnings"?<a onClick={handleClick} className='AdminCardListShowBtn'>Show List</a>:""} 
    </div>
  )
}

export default AdminCard