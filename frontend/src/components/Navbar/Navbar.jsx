import React, { useState } from 'react'
import { GiLightBulb } from "react-icons/gi";
import bulbrope from "../../assets/bulbrope.png"
import "./Navbar.css"
const Navbar = () => {
  const [IsGlow,setglow] = useState(false);
  const handleRopeClick = ()=>{
    setglow(!IsGlow);
    const navb = document.getElementsByClassName('navbar');
    const homeban = document.getElementsByClassName('homebanners');
    if (navb.length > 0) {
      navb[0].style.backgroundColor = IsGlow ? 'rgb(240, 240, 240)' : '';
    }
    if (homeban.length > 0) {
      homeban[0].style.backgroundColor = IsGlow ? 'white' : '';
    }
  }
  return (
    <div className='navbar'>
      <GiLightBulb  className={`bulb ${IsGlow ? '' : 'glow'}`}/>
      <img src={bulbrope} className="bulbrope"  onClick={handleRopeClick} alt="" srcset="" />
      <div className='navbarBrand' >
      <span className='yellowtext'>Mee</span>India
      </div>
    <div className="navItems">
      <p>Home</p>
      <p>About</p>
      <p>Hire</p>
      <p>Business</p>
      <p>Premium</p>
    </div>
    </div>
  )
}

export default Navbar