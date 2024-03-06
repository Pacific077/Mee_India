import React from 'react'
import "./BussinessDashIconsCard.css"
import {  useNavigate, useParams  } from "react-router-dom";
const BussinessDashIconsCard = ({tag,col,Icon,loc}) => {
  const navigate = useNavigate();
  const {BusinessId} = useParams()
  const handleClick = ()=>{
    navigate(`/business-dashboard/${BusinessId}/${loc}`)
  }
  return (
    <div className='BussinessDashIconsCard'>
      <div className="BusinessDashIconCont" style={{ backgroundColor: `${col}` }}
      onClick={handleClick}>
        <Icon/>
      </div>
      <p className="BussinessDashIconsDesc">{tag}</p>

    </div>
  )
}

export default BussinessDashIconsCard