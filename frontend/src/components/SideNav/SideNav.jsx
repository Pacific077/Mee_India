import React from 'react'
import dp from "../../assets/doc.jpg"
import "./Sidenav.css"
import { useNavigate } from 'react-router-dom'

const SideNav = ({vis}) => {
  const navigate = useNavigate()
  return (
    <div className={`SideNav ${vis ? 'SideNavIsvis' : ''}`}>
      <div className="sidenavProfileBox">
        <img src={dp} alt="" />
        <p>ALberttross</p>
      </div>
      <div className="sidenavitemsCont">
        <div className="sideNavItems" onClick={()=>navigate('/')}>Home</div>
        <div className="sideNavItems" onClick={()=>navigate('/bussiness-register')}>Free listing</div>
        <div className="sideNavItems" onClick={()=>navigate('/userdashboard')}>My Profile</div>

      </div>
    </div>
  )
}

export default SideNav