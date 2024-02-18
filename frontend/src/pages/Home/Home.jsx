import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import laptop from "../../assets/laptop2.png"
const Home = () => {
  return (
    <div className='homePage'>
        <Navbar/>
        <div className="homebanners">
          <div className="homebanleft">
          <h1> <span className='colorGreen'>Communicate</span> like you never did before</h1>
          <h2>Lorem ipsum dolor, sit amet consectetur.</h2>
          <div className="homeBannerBtnCont">
            <button className='btnPrim'>Start Now</button>
            <button className='btn-sec'>Free Trail</button>
          </div>
          </div>
          <div className="homebannerRight">
            <img className='laptop' src={laptop} alt="" srcset="" />
          </div>
        </div>
        <div className="section3">

        hidhakfn
        </div>
    </div>
  )
}

export default Home