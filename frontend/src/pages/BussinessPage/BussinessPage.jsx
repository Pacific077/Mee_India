import React from 'react'
import './BussinessPage.css'
import { useParams } from 'react-router-dom'
import BussinessRating from '../../components/Card/BussinessListCard/BussinessRating/BussinessRating';
import { IoLocationOutline } from 'react-icons/io5';
import BussinessContact from '../../components/Card/BussinessListCard/BussinessContact/BussinessContact';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bussinesspic from './bussinessPic.png'
import Timing from './Timing/Timing';
import { FaSquare } from "react-icons/fa";
import Review from './Review/Review';

const BussinessPage = () => {

    const {bussinessId} = useParams();
    //use this fetch the bussiness Detail in future.

  return (
    <div style={{padding:"2vh 18vh", fontFamily:"var(--fontMain)"}}>
        <div className='bussinessPagesection1'>
          <div className='ImagesSection'>
            <img style={{width:"60vh", height:"40vh"}} src='https://images.jdmagicbox.com/comp/bhubaneshwar/dc/0674px674.x674.100324183148.v5n3dc/catalogue/navajyoti-science-higher-secondary-school-sisupalgarh-bhubaneshwar-colleges-o07ahiruk8.jpg'/>
            <img style={{width:"60vh", height:"40vh"}} src='https://images.jdmagicbox.com/comp/bhubaneshwar/dc/0674px674.x674.100324183148.v5n3dc/catalogue/navajyoti-junior-science-college-sisupalgarh-bhubaneshwar-colleges-3t2nwoc.jpg'/>
            <Carousel showStatus={false} showIndicators={false} autoPlay={true} interval={3000} infiniteLoop={true}>
                <div>
                    <img src={bussinesspic} />
                </div>
                <div>
                    <img src={bussinesspic} />
                </div>
                <div>
                    <img src={bussinesspic} />
                </div>
            </Carousel>
          </div>
          <div className='BussinessListCardRight'>
            <h2>Odisha School Of Management & Technology</h2>
            <BussinessRating ratingCnt={30} ratersCnt={8}/>
            <p className='address'><IoLocationOutline/> Mirganj, Bihar, Pin-841438</p>    
            <BussinessContact/>        
          </div> 
        </div>

        <div className='bussinessPagesection2'>
          <div className='bussinessPageTiming'>
            <h2>Timings</h2>
            <Timing/>
            <p> represents Open days<span style={{color:"var(--indiaGreen)",marginRight:"2px"}}><FaSquare/></span></p>
            <p> represents Open days<span style={{color:"gray",marginRight:"2px"}}><FaSquare/></span></p>
          </div>
          <div className='bussinessPageAddress'>
            <h2>Address</h2>
            <p>Plot No 104/2439, 116/2343, 166, Mahaveer Nagar, Sisupalgarh, Bhubaneshwar - 751002 (Near Mahaveer Temple)</p>
          </div>
        </div>

        <div className='bussinessPagesection3'>
          <h2>Reviews and Ratings</h2>
          <div className='reviewHead'>
            <span>4.4</span>
            <div>
              <h3>293 Reviews</h3>
              <p>Rating index based on 293 ratings across the web</p>
            </div>
          </div>
          <div className='reviewList'>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
          </div>
        </div>
    </div>
  )
}

export default BussinessPage