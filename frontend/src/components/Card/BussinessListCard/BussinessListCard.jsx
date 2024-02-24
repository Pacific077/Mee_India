import React from 'react'
import './BussinessListCard.css'
import BussinessRating from './BussinessRating/BussinessRating'
import bussinesspic from './bussinessPic.png'
import { IoLocationOutline } from "react-icons/io5";
import BussinessContact from './BussinessContact/BussinessContact';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { useNavigate } from 'react-router-dom';

const BussinessListCard = () => {
    const navigate = useNavigate();

    const bussinessId = '65d435dfd33ee75a91e2a98a';

    const handleClick = ()=>{
        navigate(bussinessId, { replace: false });
    }


  return (
    <div className='BussinessListCardContainer' onClick={handleClick}>
        <div className='BussinessListCardLeft'><img src={bussinesspic} alt='bussinesspic'/></div>
        <div className='BussinessListCardRight'>
            <h2>Odisha School Of Management & Technology</h2>
            <BussinessRating ratingCnt={30} ratersCnt={8}/>
            <p className='address'><IoLocationOutline/> Mirganj, Bihar, Pin-841438</p>    
            <BussinessContact/>        
        </div>        
    </div>
  )
}

export default BussinessListCard