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
import { ReviewSubmit, findByID } from '../../apis/BusinessApi';
import { TextField } from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { ProfileApi } from '../../apis/UserApi';
import ReviewForm from './ReviewForm/ReviewForm';
import Cookies from 'js-cookie';

const BussinessPage = () => {

    const {bussinessId} = useParams();

    const [wait,setWait] = useState(true);

    const [currBusiness,setCurrBusiness] = useState({})
    //use this fetch the bussiness Detail in future.
    const [user,setUser] = useState(false);
    const [ratedBusinesses,setRatedBusinesses] = useState([])

    const [rating,setRating] = useState(0);
    const [reviewMsg,setReviewMsg] = useState("");

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    
    const fecthBusinessByID = async () => {
      try {
          const resp = await findByID({bussinessId });
          if (resp.status === 200) {
              // console.log("resp",resp)
              setWait(false)
              setCurrBusiness(resp.data.businessDetail);
          }
      } catch (error) {
          console.log(error);
      }
    };

    const fetchUserByID = async()=>{
      try{
        const resp = await ProfileApi()
      // console.log("Resp",resp);
        if(resp.status===200){
          setUser(resp.data.user);
          setRatedBusinesses(resp.data.user.ratedBussinesses);
          if(!isLoggedIn)setIsLoggedIn(true);
        }
        else{
          toast.warning(resp.message);
        }
      }
      catch(error){
        console.log(error);
        toast.error("Something Went Wrong")
      }
    }

    // Function to group timingArr into pairs
    const groupIntoPairs = (arr) => {
      const result = [];
      for (let i = 0; i < arr.length; i += 2) {
        const pair = arr.slice(i, i + 2);
        const formattedPair = pair.map((time) => {
          const [hour, minute] = time.split(':');
          const isAM = parseInt(hour) < 12;
          const hourSuffix = isAM ? 'AM' : 'PM';
          const hourDisplay = isAM ? hour : parseInt(hour) % 12 || 12;
          return `${hourDisplay}:${minute} ${hourSuffix}`;
        });
        result.push(formattedPair);
      }
      return result;
    };

    const handleReviewFormSubmit = async()=>{
      try{
        const resp = await ReviewSubmit({
          userId:user._id,
          message:reviewMsg,
          rating: rating,
          bussinessId:currBusiness._id
        })

        if(resp.status === 200)
        {
          toast.success(resp.data.message);
          fetchUserByID();
        }
      }
      catch(error)
      {
        console.log(error);
        toast.error(error.response.data.message);
      }
    }


  useEffect(() => {
    fecthBusinessByID();
    const token = Cookies.get('token');
    if(token)fetchUserByID();
    }, [])

  return (
    <div>{wait?<h1>WAIT</h1>:<div className='BusinesspecPage'>
        <div className='bussinessPagesection1'>
          <div className='ImagesSection'>
            <img className='imageSectionimg' style={{width:"30%", height:"40vh"}} src={currBusiness.buseinessImages[0]} alt='businessPic'/>
            <img className='imageSectionimg' style={{width:"30%", height:"40vh"}} src={currBusiness.buseinessImages[1]} alt='businessPic'/>
            <Carousel className='ImageSectioncarousel' showStatus={false} showIndicators={false} autoPlay={true} interval={3000} infiniteLoop={true}>
                {currBusiness.buseinessImages.map((pic,i)=><div key={i}><img src={pic} alt='businessPic'/></div>)}
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
            <div>
              {groupIntoPairs(currBusiness.timingArr).map((pair, index) => (
                <p key={index}>{pair.join(' - ')}</p>
              ))}
            </div>
            <Timing openDays={currBusiness.openDays}/>
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
          {!isLoggedIn&&<h3>Login to submit Review.</h3>}
          {isLoggedIn&&!ratedBusinesses.includes(currBusiness._id)&&<ReviewForm rating={rating} setRating={setRating} reviewMsg={reviewMsg} setReviewMsg={setReviewMsg} handleReviewFormSubmit={handleReviewFormSubmit}/>}
          {isLoggedIn&&ratedBusinesses.includes(currBusiness._id)&&<h3>You have already Reviewed this Business.</h3>}
          <div className='reviewList'>
            {
              currBusiness.reviews.map((rev,ind) => <Review key={ind} name={rev.userId.name} ratedCnt={rev.userId.ratedBussinesses?.length} message={rev.message}/>)
            }
            {/* <Review/>
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
            <Review/> */}
          </div>
        </div>
    </div>}</div>
  )
}

export default BussinessPage