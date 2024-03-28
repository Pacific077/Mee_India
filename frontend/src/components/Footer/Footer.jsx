import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg"
import "./Footer.css";
import googlePlaystore from "../../assets/googlePlaystore.png"
import appleStore from "../../assets/appleStore.png"


import { BiLogoFacebookSquare, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="footersec">
        <div className="foot1">
          <img src={logo} alt="img" className="footerlogo" />
          <div className="footerdescCont">
            <p className="footerdesc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              tempore ipsa repellat necessitatibus libero labore obcaecati
              maxime. Eum iusto animi dolorum odit perferendis.
            </p>
          </div>
          <di className="footerbrnds">
            <BiLogoFacebookSquare className="ftrbrnds" />
            <BiLogoLinkedinSquare className="ftrbrnds" />
            <BsInstagram className="ftrbrnd" />
            <FaXTwitter className="ftrbrnd" />
          </di>
        </div>
        <div className="foot2">
          <p className="footehead">MeeIndia</p>
          <p style = { { cursor:"pointer"}} onClick={()=>{navigate('/aboutus')}}>About Us</p>
          <p style = { { cursor:"pointer"}} onClick={()=>{navigate('')}}>Advertise or Media</p>
          <p style = { { cursor:"pointer"}} onClick={()=>{navigate('')}}>Highlights</p>
          <p style = { { cursor:"pointer"}} onClick={()=>{navigate('')}}>Enquire Now</p>
          <p style = { { cursor:"pointer"}} onClick={()=>{navigate('/quicklinks')}}>Quick Links</p>
          <p style = { { cursor:"pointer"}} onClick={()=>{navigate('/reportbug')}}>Report a bug</p>
          <p style = { { cursor:"pointer"}} onClick={()=>{navigate('/whats-new')}}>What's new</p>
          <p style = { { cursor:"pointer"}} onClick={()=>{navigate('/we-are-hiring')}}>We are hiring</p>
          {/* <p>We are Hiring</p> */}


        </div>
        <div className="foot3">
          <p className="footehead">LEGAL</p>
          <p style = { { cursor:"pointer"}} onClick={()=>{navigate('/terms-and-services')}}>Terms and Services</p>
          <p>Privacy Policy</p>
          <p>Return & Refund Policy</p>
          <div className="appIconBox">
          <img className="storeIcon" src={googlePlaystore} alt="Google Play Store" />
            <div>
              <div className="smallText">GET IT ON</div>
              <div className="largeText">Google Play</div>
            </div>
          </div>
          <div className="appIconBox">
          <img className="storeIcon" src={appleStore} alt="Google Play Store" />
            <div>
              <div className="smallText">GET IT ON</div>
              <div className="largeText">Apple Store</div>
            </div>
          </div>
        </div>
        <div className="foot4">
          <p className="footehead">CONTACT</p>
          <p style = { { cursor:"pointer"}} onClick={()=>{navigate('/customer-care')}}>Customer Care</p>
          <p>+91 9987420994</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            deleniti.
          </p>
        </div>
      </div>
      <div className="lastline">
        <p>
          © 2024. All rights reserved.
           Made In
          India
        </p>
      </div>
    </div>
  );
};

export default Footer;
