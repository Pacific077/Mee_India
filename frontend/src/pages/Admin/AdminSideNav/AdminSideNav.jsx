import React from 'react'
import { RxCross1 } from "react-icons/rx";
import "./AdminSideNav.css"
import { useNavigate } from 'react-router-dom';
const AdminSideNav = ({vis,setshowAdminNAv}) => {
  const navigate = useNavigate()
  const handleCroossCLick =()=>{
    setshowAdminNAv(false)
  }
  return (
    <div className={`AdminSidenav ${vis ? 'AdminSideNavvis' : ''}`}>
      <RxCross1 onClick={handleCroossCLick} className='crossIconAdminSideNav'/>
      <div className="greetAdminSidenav">
        <p>Hello Admin!!</p>
      </div>
      <div className="AdminSideNavListCont">
        <p onClick={()=> navigate('/admin/showUserslist')}>All Users Lists</p>
        <p onClick={()=> navigate("/admin/showShopslist")}>All Shops Lists</p>
        <p onClick={()=> alert("kya ji")}>Payment Details</p>
      </div>
    </div>
  )
}

export default AdminSideNav