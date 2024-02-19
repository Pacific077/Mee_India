import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import laptop from "../../assets/laptop2.png"
import c1 from "../../assets/c1.jpg"
import c2 from "../../assets/c2.jpg"
import c3 from "../../assets/c3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

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
            <Carousel showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                <div>
                  <img src={c1} alt='pic'/>
                </div>
                <div>
                  <img src={c2} alt='pic'/>    
                </div>
                <div>
                  <img src={c3} alt='pic'/>    
                </div>
            </Carousel>
          </div>
        </div>
        <div className="section3">

        hidhakfn
        </div>
    </div>
  )
}

export default Home