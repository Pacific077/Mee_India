import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
import { toast } from 'react-toastify';
import { findByID } from '../../apis/BusinessApi';

const BussinessPage = () => {

    const {bussinessId} = useParams();

    const [wait,setWait] = useState(true);

    const [currBusiness,setCurrBusiness] = useState({})
    //use this fetch the bussiness Detail in future.
    
    const fecthBusinessByID = async () => {
      try {
          const resp = await findByID({bussinessId });
          if (resp.status === 200) {
              console.log("resp",resp)
              setWait(false)
              setCurrBusiness(resp.data.businessDetail);
          }
      } catch (error) {
          console.log(error);
      }
    };

  useEffect(() => {
    fecthBusinessByID();
    }, [])

  return (
    <div>{wait?<h1>WAIT</h1>:<div className='BusinesspecPage'>
        <div className='bussinessPagesection1'>
          <div className='ImagesSection'>
            <img className='imageSectionimg' style={{width:"30%", height:"40vh"}} src='https://images.jdmagicbox.com/comp/bhubaneshwar/dc/0674px674.x674.100324183148.v5n3dc/catalogue/navajyoti-science-higher-secondary-school-sisupalgarh-bhubaneshwar-colleges-o07ahiruk8.jpg'/>
            <img className='imageSectionimg' style={{width:"30%", height:"40vh"}} src='https://images.jdmagicbox.com/comp/bhubaneshwar/dc/0674px674.x674.100324183148.v5n3dc/catalogue/navajyoti-junior-science-college-sisupalgarh-bhubaneshwar-colleges-3t2nwoc.jpg'/>
            <Carousel className='ImageSectioncarousel' showStatus={false} showIndicators={false} autoPlay={true} interval={3000} infiniteLoop={true}>
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
            <h2>{currBusiness.title}</h2>
            <BussinessRating ratingCnt={currBusiness.ratingCount} ratersCnt={currBusiness.reviews.length}/>
            <p className='address'><IoLocationOutline/> {currBusiness.address}</p>    
            <BussinessContact contact={currBusiness.bussinessContact}/>        
          </div> 
        </div>

        <div className='bussinessPagesection2'>
          <div className='bussinessPageTiming'>
            <h2>Timings</h2>
            <Timing/>
            <p> represents Open days<span style={{color:"var(--indiaGreen)",marginRight:"2px"}}><FaSquare/></span></p>
            <p> represents Close days<span style={{color:"gray",marginRight:"2px"}}><FaSquare/></span></p>
          </div>
          <div className='bussinessPageAddress'>
            <h2>Address</h2>
            <p>{currBusiness.address}</p>
          </div>
        </div>

        <div className='bussinessPagesection3'>
          <h2>Reviews and Ratings</h2>
          <div className='reviewHead'>
            <span>{parseFloat((currBusiness.ratingCnt/currBusiness.reviews.length).toFixed(1))}</span>
            <div>
              <h3>{currBusiness.reviews.length} Reviews</h3>
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
    </div>}</div>
  )
}

export default BussinessPage