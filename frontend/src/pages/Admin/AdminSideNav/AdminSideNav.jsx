import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import "./AdminSideNav.css"
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const AdminSideNav = () => {
  const navigate = useNavigate()
  const [vis,setvis]=useState(false);
  const handleCroossCLick =()=>{
    // setshowAdminNAv(false)
    setvis(false)
  }
  const handleAdminDrawerCLick=()=>{
    setvis(true);
  }
  return (
    <div className={`AdminSidenav ${vis ? 'AdminSideNavvis' : ''}`}>
      {!vis&&<BsArrowLeftSquareFill onClick={handleAdminDrawerCLick}  className='AdminNavDrawerIcon'/>}
      <RxCross1 onClick={handleCroossCLick} className='crossIconAdminSideNav'/>
      <div className="greetAdminSidenav">
        <p>Hello Admin!!</p>
      </div>
      <div className="AdminSideNavListCont">
        <p onClick={()=> navigate("/admin/dashboard")}>Admin Dashboard</p>
        <p onClick={()=> navigate('/admin/showUserslist')}>All Users Lists</p>
        <p onClick={()=> navigate("/admin/showShopslist")}>All Shops Lists</p>
        <p onClick={()=> alert("kya ji")}>Payment Details</p>
        <p onClick={()=> navigate("/admin/queries")}>All Queries</p>
        <p onClick={()=> navigate("/admin/createNewAdmin")}>Create Admin</p>
      </div>
    </div>
  )
}

export default AdminSideNav