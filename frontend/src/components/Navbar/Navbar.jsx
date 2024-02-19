import React from 'react'
import { useNavigate  } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  const navigate  = useNavigate();
  const HandleLoginclick = ()=>{
    navigate('/login')
  }
  return (
    <>
   
    <div className='navbar'>
      
      <div className='navbarBrand' >
      <span className='yellowtext'>Mee</span>India
      </div>
    <div className="navItems">
      <p>English</p>
      <p>Advertise</p>
      <p>Free Listing</p>
      <p>Business</p>
      <p>Premium</p>
    <button className='btnPrim loginbtn' onClick={HandleLoginclick}>Login</button>
    </div>
    </div>
    </>
  )
}

export default Navbar