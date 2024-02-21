import React, { useState } from "react";
import "./Home.css";
import laptop from "../../assets/t3.png";
import animate from "../../assets/animate.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import CategoriesCard from "../../components/Card/CategoriesCard";
import CategoriesArrray from "./CategoriesArray";
import PopularServiceCard from "../../components/Card/PopularServiceCard";
import Marquee from "react-fast-marquee";
import PopularServiceArr from "./PopularServiceArr";
import Footer from "../../components/Footer/Footer";
import Subcategories from "../../components/Subcategories/Subcategories";
const Home = () => {
  const [showSubCat, setShowSub] = useState(false);
  return (
    <div className="homePage">
      {showSubCat && <Subcategories setShowSub={setShowSub} />}
      <div className="homebanners">
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
      </div>
      <div className="section3">
        <div className="categoriessection">
          <h1 className="main-head">Categories</h1>
          <div className="categoriesContainer" id="categoryid">
            {CategoriesArrray.map((cat) => {
              return (
                <CategoriesCard
                  immg={cat.img}
                  count={cat.count}
                  category={cat.category}
                  setShowSub={setShowSub}
                  subCat={cat.subCat}
                />
              );
            })}
          </div>
        </div>
        <div className="popularServices">
          <h1 className="main-head">Popular Services</h1>

          <Marquee
            behavior="scroll"
            direction="left"
            speed={100}
            pauseOnHover={true}
            gradient={true}
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
