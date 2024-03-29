import React, { useContext } from 'react'
import "./BussinessDashIconsCard.css"
import {  useNavigate, useParams  } from "react-router-dom";
import UserContext from '../../../context/UserInfo/UserContext';
const BussinessDashIconsCard = ({tag,col,Icon,loc}) => {
  const UserContex = useContext(UserContext);
  const navigate = useNavigate();
  const {user} = UserContex
  const {BusinessId} = useParams()
  const handleClick = ()=>{

    if(loc==='Catalouge'){
    if(user.Membership==="Premimum"){
      navigate(`/business-dashboard/${BusinessId}/${loc}`)
    }else{
      navigate('/pricing-details')
    }
    }else{
      navigate(`/business-dashboard/${BusinessId}/${loc}`)
    }
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