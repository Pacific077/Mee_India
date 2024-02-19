import React from "react";
import "./Footer.css";

import { BiLogoFacebookSquare, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="footersec">
        <div className="foot1">
          <img src="" alt="img" className="footerlogo" />
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
          <p>Partner</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="foot3">
          <p className="footehead">LEGAL</p>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Return & Refund Policy</p>
        </div>
        <div className="foot4">
          <p className="footehead">CONTACT</p>
          <p>hello@meeIndia.com</p>
          <p>7420994331</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            deleniti.
          </p>
        </div>
      </div>
      <div className="lastline">
        <p>
          © 2024. All rights reserved by{" "}
          <span className="textblue">Advance Digital Solutions.</span> Made In
          India
        </p>
      </div>
    </div>
  );
};

export default Footer;
