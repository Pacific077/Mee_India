import React, { useState } from "react";
import "./Home.css";
import logo from "../../assets/logo.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import CategoriesCard from "../../components/Card/CategoriesCard";
import CategoriesArrray from "./CategoriesArray";
import PopularServiceCard from "../../components/Card/PopularServiceCard";
import Marquee from "react-fast-marquee";
import PopularServiceArr from "./PopularServiceArr";
import PopularCategoriesArray from "./PopularCategoriesArray"
// import SubcategoryHomeCard from "../../components/Card/SubcategoryHomeCard";
import SubCategoriesBannerArray from './SubCategoriesBannerArray'
import LocationAndSearch2 from "../../components/Card/LocationAndSearch2/LocationAndSearch2";
import advertisementBanner from "./advertisementBanner";
import Banner from "../../components/Banners/Banner";
import MainCategories from "../../components/MainCat/MainCategories";
import BillsAndBooking from "../../components/BillsAndBookings/BillsAndBooking";
import MainCategoriesArray from "./MainCategories";
import BillsAndBookingArray from "./BillsAndBookingsArray";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import mid1 from '../../assets/BannerPics/midSize/pic1.avif'
import mid2 from '../../assets/BannerPics/midSize/pic2.avif'
import mid3 from '../../assets/BannerPics/midSize/pic3.avif'
import mid4 from '../../assets/BannerPics/midSize/pic4.avif'

import big1 from '../../assets/BannerPics/bigSize/pic1.png'
import big2 from '../../assets/BannerPics/bigSize/pic2.png'

import dis1 from '../../assets/BannerPics/discount/pic1.avif'
import dis2 from '../../assets/BannerPics/discount/pic2.avif'
import dis3 from '../../assets/BannerPics/discount/pic3.avif'
import mostBookedServices from "./mostBookedServices";
import Bill from "../../components/Card/BIll/Bill";


const Home = () => {
  // const [showSubCat, setShowSub] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="homePage">
      <div className="section1">
        <div className="section11">
          <div className="mainLogoCont">
            <div className="mainLogo1"></div>
            <img className="mainLogo" onClick={()=>navigate('/blogs')} src={logo} alt="" srcset="" />
            <div className="mainLogo3"> </div>
          </div>
          <div className="HomePageSrch">
            <LocationAndSearch2 />
          </div>
        </div>
        {/* <Banner/> */}
        <div className="section12">
          <Carousel
            className="BannerCarousel midSize"
            showStatus={false}
            showIndicators={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            swipeable={false} 
          >
            <img src={mid1} alt=""/>
            <img src={mid2} alt=""/>
            <img src={mid3} alt=""/>
            <img src={mid4} alt=""/>
            {/* {bannerImages.map((pic, i) => (
              <div key={i}>
                <img src={pic} alt="businessPic" />
              </div>
            ))} */}
          </Carousel>
          <Carousel
            className="BannerCarousel midSize"
            showStatus={false}
            showIndicators={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            swipeable={false} 
          >
            <img src={mid1} alt=""/>
            <img src={mid2} alt=""/>
            <img src={mid3} alt=""/>
            <img src={mid4} alt=""/>
            {/* {bannerImages.map((pic, i) => (
              <div key={i}>
                <img src={pic} alt="businessPic" />
              </div>
            ))} */}
          </Carousel>
        </div>
        
        <div className="section2">
          <h1 className="main-head">Categories</h1>
          <div className="categoriesContainer" id="categoryid">
            {CategoriesArrray.map((cat,index) => {
              return (
                <CategoriesCard
                key={index}
                  immg={cat.img}
                  count={cat.count}
                  category={cat.category}
                  // setShowSub={setShowSub}
                  subCat={cat.subCat}
                />
              );
            })}
          </div>
        </div>
        
        <div className="section5">
          <div className="popularCategories">
            <h1 className="main-head">Popular Categories</h1>
            <div className="popularCategoriesContainer">
              {PopularCategoriesArray.map((cat,index) => {
                  return (
                  <CategoriesCard
                    key={index}
                    immg={cat.img}
                    count={cat.count}
                    category={cat.category}
                    // setShowSub={setShowSub}
                    subCat={cat.subCat}
                  />
                );
              })}
            </div> 
          </div>
          <div className="popularSubCategories">  
            <h1 className="main-head">Sub Categories</h1>
            <div className="popularSubCategoriesCont">
              {SubCategoriesBannerArray.map((subCat, ind)=>
                <div className="popularSubCategoriesCard" key={ind} onClick={()=>navigate(subCat.link)}>
                  <h3>{subCat.name}</h3>
                  <img src={subCat.bg} alt="SubCat"/>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="longbanner">
          <img src={advertisementBanner[0].imgsrc} alt=""/>
        </div>

        {/* {BillsAndBookingArray.map((ele,ind)=>{
          return (
            <BillsAndBooking key={ind} name={ele.name} Desc={ele.Desc} SubCat={ele.SubCat}/>
          )
        })} */}

        <div className='BillsAndBooking'>
          <Bill name={BillsAndBookingArray[0].name} Desc={BillsAndBookingArray[0].Desc} SubCat = {BillsAndBookingArray[0].SubCat}/>
        </div>
        <div className='BillsAndBooking'>
          <Bill name={BillsAndBookingArray[1].name} Desc={BillsAndBookingArray[1].Desc} SubCat = {BillsAndBookingArray[1].SubCat}/>
        </div>

        <div className="section11">
          <Carousel
            className="BannerCarousel BigSize"
            style={{width:"100%"}}
            showStatus={false}
            showIndicators={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            swipeable={false}
          >
            <img className="lgcarauselImg"  src={big1} alt=""/>
            <img className="lgcarauselImg" src={big2} alt=""/>
            <img className="lgcarauselImg" src={big1} alt=""/>
            <img className="lgcarauselImg" src={big1} alt=""/>
          </Carousel>
        </div>

        <div className="section4">
          <h1 className="main-head">Most Booked Services</h1>
          <div className="MostBookedServiceCardCont">
            {mostBookedServices.map((ser,ind)=><div key={ind} className="MostBookedServiceCard">
              <img src={ser.pic} alt=""/>
              <h3>{ser.name}</h3>
            </div>)}
          </div>
        </div>

        <h1 className="main-head">Discounts and Offers</h1>
        <div className="section3">
          <Carousel
            className="BannerCarousel SmallSize"
            style={{width:"100%"}}
            showStatus={false}
            showIndicators={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            swipeable={false}
          >
            <img src={mid1} alt=""/>
            <img src={mid2} alt=""/>
            <img src={mid1} alt=""/>
            <img src={mid2} alt=""/>
          </Carousel>
          <div className="DiscounBannerCont">

          <div  className="discountBanner">
            <img src={dis1} alt="" style={{height:"100%",width:"100%"}} />
          </div>

          <div className="discountBanner">
            <img src={dis2} alt="" style={{height:"100%",width:"100%"}} />
          </div>

          <div className="discountBanner">
            <img src={dis3} alt="" style={{height:"100%",width:"100%"}} />
          </div>
          </div>
        </div>
        {/* <div className="section2">
          {MainCategoriesArray.map((ele,ind)=>{
            return(
              <MainCategories key={ind} name={ele.name} SubCat = {ele.SubCateggories}/>
            )
          })}
        </div> */}
        {/* <div className="popularServices">
          <h1 className="main-head PopularserviceHead">Popular Services</h1>

          <Marquee
            behavior="scroll"
            direction="left"
            speed={100}
            pauseOnHover={true}
            gradient={false}
          >
            <div className="PopularServiceCont">
              {PopularServiceArr.map((service) => {
                return (
                  <PopularServiceCard
                    img={service.img}
                    service={service.service}
                  />
                );
              })}
            </div>
          </Marquee>
        </div> */}

      </div>
    </div>
  );
};

export default Home;
