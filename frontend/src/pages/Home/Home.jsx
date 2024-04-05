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


const Home = () => {
  // const [showSubCat, setShowSub] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="homePage">
      {/* {showSubCat && <Subcategories setShowSub={setShowSub} />} */}
      {/* <div className="homebanners">
        <div className="homebanleft">
          <h1>
            Find your Ideal Business match: Connecting People with
            services,Simplyfing your search for what you need!!{" "}
          </h1>
          <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            veniam natus quia molestiae veritatis illum ipsum saepe repellendus
            qui nihil.
          </h2>
          <div className="homeBannerBtnCont">
            <button className="btnPrim btn-lg">Start Now</button>
            <button className="btn-sec btn-lg">Free Trail</button>
          </div>
        </div>
        <div className="homebannerRight">
          <img className="Phone" src={laptop} alt="" srcset="" />
          <img className="phone_animate" src={animate} alt="" srcset="" />
        </div>
      </div> */}
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
          >
            <img src={mid1}/>
            <img src={mid2}/>
            <img src={mid3}/>
            <img src={mid4}/>
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
        
        <div className="section3">
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
                  <div className="popularSubCategoriesCard" onClick={navigate('/')}>
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

        <div className="section11">
          <Carousel
            className="BannerCarousel BigSize"
            style={{width:"100%"}}
            showStatus={false}
            showIndicators={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
          >
            <img src={big1}/>
            <img src={big2}/>
            <img src={big1}/>
            <img src={big1}/>
          </Carousel>
        </div>

        <div className="section11">
          <h1 className="main-head">Most Booked Services</h1>
          <div className="MostBookedServiceCardCont">
            {mostBookedServices.map((ser,ind)=><div key={ind} className="MostBookedServiceCard">
              <img src={ser.pic} alt=""/>
              <h3>{ser.name}</h3>
            </div>)}
          </div>
        </div>

        <div className="section3">
          <Carousel
            className="BannerCarousel SmallSize"
            style={{width:"100%"}}
            showStatus={false}
            showIndicators={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
          >
            <img src={mid1} alt=""/>
            <img src={mid2} alt=""/>
            <img src={mid1} alt=""/>
            <img src={mid2} alt=""/>
          </Carousel>

          <div >
            <img src={dis1} alt="" className="discountBanner"/>
          </div>

          <div>
            <img src={dis2} alt="" className="discountBanner"/>
          </div>

          <div>
            <img src={dis3} alt="" className="discountBanner"/>
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
