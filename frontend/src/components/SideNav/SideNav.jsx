import React from 'react'
import dp from "../../assets/doc.jpg"
import "./Sidenav.css"
const SideNav = ({vis}) => {
  return (
    <div className={`SideNav ${vis ? 'SideNavIsvis' : ''}`}>
      <div className="sidenavProfileBox">
        <img src={dp} alt="" />
        <p>ALberttross</p>
      </div>
      <div className="sidenavitemsCont">
        <div className="sideNavItems">Home</div>
        <div className="sideNavItems">Free listing</div>
        <div className="sideNavItems">My Profile</div>
        <div className="sideNavItems">Dashboard</div>
      </div>
    </div>
  )
}

export default SideNav