import React, { useContext } from 'react'
import dp from "../../assets/doc.jpg"
import "./Sidenav.css"
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserInfo/UserContext'

const SideNav = ({vis}) => {
  const navigate = useNavigate()
  const usercont=  useContext(UserContext);
  const {user} = usercont;

  return (
    <div className={`SideNav ${vis ? 'SideNavIsvis' : ''}`}>
      <div className="sidenavProfileBox">
        <img src={user.profileImage?user.profileImage:dp} alt="" />
        <p>{user.name?user.name:""}</p>
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