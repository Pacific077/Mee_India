import React, { useEffect, useState } from "react";
import "./BussinessPage.css";
import { useParams } from "react-router-dom";
import BussinessRating from "../../components/Card/BussinessListCard/BussinessRating/BussinessRating";
import { IoLocationOutline } from "react-icons/io5";
import BussinessContact from "../../components/Card/BussinessListCard/BussinessContact/BussinessContact";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Timing from "./Timing/Timing";
import { FaSquare } from "react-icons/fa";
import Review from "./Review/Review";

import { toast } from "react-toastify";
import { EnquirySubmit, ReviewSubmit, findByID } from "../../apis/BusinessApi";
import { TextField } from "@mui/material";
import { TiTick } from "react-icons/ti";
import { ProfileApi } from '../../apis/UserApi';
import ReviewForm from './ReviewForm/ReviewForm';
import Cookies from 'js-cookie';
import { RiMessage2Fill } from 'react-icons/ri';
import Trusted from './Trusted/Trusted';
import Verified from './Verified/Verified';

const BussinessPage = () => {
  const { bussinessId } = useParams();

  const [wait, setWait] = useState(true);

  const [currBusiness, setCurrBusiness] = useState({});
  //use this fetch the bussiness Detail in future.
  const [user, setUser] = useState(false);
  const [ratedBusinesses, setRatedBusinesses] = useState([]);

  const [rating, setRating] = useState(0);
  const [reviewMsg, setReviewMsg] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [enquiry, setEnquiry] = useState("");
  const [contact, setContact] = useState("");
  const [membership, setMembership] = useState("");

  const fecthBusinessByID = async () => {
    try {
      const resp = await findByID({ bussinessId });
      console.log("resp",resp.data.businessDetail)
      if (resp.status === 200) {
        setCurrBusiness(resp.data.businessDetail);
        setMembership(resp.data.businessDetail.owner.Membership);
        setWait(false);
      }
    } catch (error) {
      console.log(error);
    }
    // consol.log("Resp,")
  };

  const fetchUserByID = async () => {
    try {
      setWait(false);
      const userProfileFromLocalStorage = localStorage.getItem("userProfile");
      if (userProfileFromLocalStorage) {
        const userData = JSON.parse(userProfileFromLocalStorage);
        setUser(userData);
        setRatedBusinesses(userData.ratedBussinesses);
        setWait(true);
        if (!isLoggedIn) setIsLoggedIn(true);
      } else {
        const resp = await ProfileApi();
        // console.log("there")
        // console.log("Resp",resp);
        if (resp.status === 200) {
          setUser(resp.data.user);
          setRatedBusinesses(resp.data.user.ratedBussinesses);
          setWait(false);
          if (!isLoggedIn) setIsLoggedIn(true);
        } else {
          toast.warning(resp.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // Function to group timingArr into pairs
  const groupIntoPairs = (arr) => {
    const result = [];
    console.log("arrr",arr);
    let n = arr.length
    for (let i = 0; i < n; i += 2) {
      const pair = arr.slice(i, i + 2);
      const formattedPair = pair.map((time) => {
        const [hour, minute] = time.split(":");
        const isAM = parseInt(hour) < 12;
        const hourSuffix = isAM ? "AM" : "PM";
        const hourDisplay = isAM ? hour : parseInt(hour) % 12 || 12;
        return `${hourDisplay}:${minute} ${hourSuffix}`;
      });
      result.push(formattedPair);
    }
    return result;
  };

  const handleReviewFormSubmit = async () => {
    try {
      const resp = await ReviewSubmit({
        userId: user._id,
        message: reviewMsg,
        rating: rating,
        bussinessId: currBusiness._id,
      });

      if (resp.status === 200) {
        toast.success(resp.data.message);
        localStorage.removeItem("userProfile");
        fetchUserByID();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleEnquirySubmit = async () => {
    try {
      const resp = await EnquirySubmit({
        name: user.name,
        question: enquiry,
        email: user.email,
        contact: contact,
        bussinessId: currBusiness._id,
      });

      if (resp.status === 200) {
        toast.success(resp.data.message);
        localStorage.removeItem("userProfile");
        fetchUserByID();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const openImageInNewTab = (e, pic) => {
    e.preventDefault();
    window.open(pic, "_blank");
  };

  useEffect(() => {
    fecthBusinessByID();
    const token = Cookies.get("token");
    if (token) fetchUserByID();
  }, []);

  return (
    <div>
      {wait ? (
        <h1>WAIT</h1>
      ) : (
        <div className="BusinesspecPage">
          <div className="bussinessPagesection1">
            <div className="ImagesSection">
              <img
                className="imageSectionimg"
                style={{ width: "30%", height: "40vh" }}
                src={currBusiness&&currBusiness.buseinessImages&&currBusiness.buseinessImages[0]}
                alt="businessPic"
              />
              <img
                className="imageSectionimg"
                style={{ width: "30%", height: "40vh" }}
                src={currBusiness&&currBusiness.buseinessImages&&currBusiness.buseinessImages[1]}
                alt="businessPic"
              />
              <Carousel
                className="ImageSectioncarousel"
                showStatus={false}
                showIndicators={false}
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
              >
                {currBusiness&&currBusiness.buseinessImages&&currBusiness.buseinessImages.map((pic, i) => (
                  <div key={i}>
                    <img src={pic} alt="businessPic" />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="BussinessListCardRight">
              <h2>{currBusiness.title}</h2>
              <BussinessRating
                ratingCnt={currBusiness.ratingCount?currBusiness.ratingCount:0}
                ratersCnt={currBusiness.reviews?currBusiness.reviews.length:0}
              />
              <p className="address">
                <IoLocationOutline /> {currBusiness.address}
              </p>
              <BussinessContact contact={currBusiness.bussinessContact} />
            </div>
          </div>

          <div className="bussinessPagesection2">
            <div className="bussinessPageTiming">
              <h2>Timings</h2>
              <div>
                {currBusiness&&currBusiness.timingArr&&groupIntoPairs(currBusiness.timingArr).map((pair, index) => (
                  <h4 key={index}>{pair.join(" - ")}</h4>
                ))}
              </div>
              <Timing openDays={currBusiness.openDays&&currBusiness.openDays} />
              <h>
                {" "}
                represents Open days{" "}
                <span
                  style={{ color: "var(--indiaGreen)", marginRight: "2px" }}
                >
                  <FaSquare />
                </span>
              </h>
              <p>
                {" "}
                represents Close days{" "}
                <span style={{ color: "gray", marginRight: "2px" }}>
                  <FaSquare />
                </span>
              </p>
            </div>
            <div className="bussinessPageAddress">
              <h2>Address</h2>
              <p>
                {currBusiness.address}, {currBusiness.district}
              </p>
              <p>
                {currBusiness.state}, {currBusiness.pincode}
              </p>
              <p>Contact: {currBusiness.bussinessContact}</p>
              <p>Alternate: {currBusiness.bussinessContact}</p>
            </div>
          </div>

          <div className="bussinessPagesection2">
            {currBusiness&&currBusiness.Services&&currBusiness.Services.length > 0 && (
              <div className="bussinessPageServices">
                <h2>Services</h2>
                <div className="ServiceListContainer">
                  {currBusiness.Services.map((service, index) => (
                    <p key={index}>
                      <TiTick style={{ color: "blue", marginRight: "5px" }} />
                      {service}
                    </p>
                  ))}
                </div>
              </div>
            )}
            <div className="bussinessPageAddress">
              <h2>Highlights</h2>
              <h4>Highlight1</h4>
              <h4>Highlight2</h4>
              <h4>Highlight3</h4>
              <h4>Highlight4</h4>
              <h4>Highlight5</h4>
            </div>
          </div>

          <div className="bussinessPagesection2">
            {(membership === "Pro"||membership==="Standard"||membership==="Premium") &&currBusiness&&
              currBusiness.CatalougeImages.length > 0 && (
                <div className="bussinessPageTiming">
                  <h2>Rate Cards</h2>
                  <div className="CataloguePicContainer">
                    {currBusiness&&currBusiness.CatalougeImages.map((pic, index) => (
                      <div
                        className="CataloguePic"
                        onClick={(e) => openImageInNewTab(e, pic)}
                      >
                        <img
                          className=""
                          key={index}
                          src={pic}
                          alt="businessPic"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            <div className="bussinessPageAddress" id="enquiry">
              <h2>Enquire About this Business</h2>
              <TextField
                fullWidth
                label="Question"
                id="fullWidth"
                onChange={(e) => setEnquiry(e.target.value)}
                value={enquiry}
              />
              <TextField
                fullWidth
                label="Contact"
                id="fullWidth"
                margin="normal"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Name"
                  defaultValue={user.name}
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Email"
                  defaultValue={user.email}
                />
              </div>
              <div
                className="squareBtn Enquiry"
                style={{ marginLeft: 0, marginTop: "10px" }}
                onClick={handleEnquirySubmit}
              >
                <RiMessage2Fill />
                Send Enquiry
              </div>
            </div>
          </div>

          <div className="bussinessPagesection3">
            <h2>Reviews and Ratings</h2>
            <div className="reviewHead">
              <span>
                {currBusiness&&currBusiness.ratingCount&&parseFloat(
                  (
                    currBusiness.ratingCount / currBusiness.reviews.length
                  ).toFixed(1)
                )}
              </span>
              <div>
                <h3>{currBusiness&&currBusiness.reviews&&currBusiness.reviews.length} Reviews</h3>
                <p>
                  Rating index based on {currBusiness&&currBusiness.reviews&&currBusiness.reviews.length} ratings
                  across the web
                </p>
              </div>
            </div>
            {!isLoggedIn && <h3>Login to submit Review.</h3>}
            {isLoggedIn && !ratedBusinesses.includes(currBusiness._id) && (
              <ReviewForm
                rating={rating}
                setRating={setRating}
                reviewMsg={reviewMsg}
                setReviewMsg={setReviewMsg}
                handleReviewFormSubmit={handleReviewFormSubmit}
              />
            )}
            {isLoggedIn && ratedBusinesses.includes(currBusiness._id) && (
              <h3 className="alreadyreview">
                You have already Reviewed this Business.
              </h3>
            )}
            <div className="reviewList">
              {currBusiness&&currBusiness.reviews&&currBusiness.reviews.map((rev, ind) => (
                <Review
                  key={ind}
                  name={rev.userId.name}
                  ratedCnt={rev.userId.ratedBussinesses?.length}
                  message={rev.message}
                  img={rev.userId.profileImage}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BussinessPage;
