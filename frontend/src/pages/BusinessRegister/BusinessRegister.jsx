import React, { useState } from "react";
import img1 from "../../assets/registerFormSIdeBanner.avif";
import img2 from "../../assets/registerFormSIdeBanner2.avif";
import "./Businessregister.css";
import axios from "axios";
import BusinessFormCard from "../../components/Card/BusinessFormCard/BusinessFormCard";
import BusinessFormInpcont from "../../components/Card/BussinessForminp/BusinessFormInpcont";
import FormPage1 from "../../components/FormPage/FormPage1";
import FormPage2 from "../../components/FormPage/FormPage2";
import FormPage3 from "../../components/FormPage/FormPage3";
import FormPage4 from "../../components/FormPage/FormPage4";
import { FreeListApi } from "../../apis/BusinessApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const BusinessRegister = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [bussinessContact, setBussinessContact] = useState("");
  const [bussinessAltContact, setBussinessAltContact] = useState("");
  const [bussinessMail, setBussinessMail] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [timingArr, setTimingArr] = useState([]);
  const [openDays, setOpenDays] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [bio, setBio] = useState("");

  const [imagelinkArr, setImageLinkArr] = useState([]);

  const [counter, setCounter] = useState("1");
  const navigate = useNavigate()
  // const formdata = new FormData()
  const handleSubmit = async () => {
    try {
      const resp = await FreeListApi({
        title,
        address,
        district,
        state,
        bussinessContact,
        bussinessAltContact,
        bussinessMail,
        timingArr,
        openDays,
        mainCategory,
        subCategory,
        pinCode,
        bio,
        imagelinkArr,
        latitude:	23.6544338,
        longitude:86.1456444
      });
      if(resp.status==200){
        navigate("/userdashboard")
        toast.success("Business Registered ")
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="BusinessRegisterPage">
      <div className="BusinessregisterLeft">
        <img src={img1} alt="" srcset="" className="businessformImg" />
        <img src={img2} alt="" srcset="" className="businessformImg" />
      </div>
      <div className="blurDiv">
        <h1>Register your business with us in few Simple Steps</h1>
      </div>
      <div className="BusinessregisterRight">
        <div className="formContainer">
          {counter === "1" && (
            <FormPage1
              title={title}
              setTitle={setTitle}
              address={address}
              setAddress={setAddress}
              district={district}
              setDistrict={setDistrict}
              state={state}
              setState={setState}
              pinCode={pinCode}
              setPinCode={setPinCode}
              setCounter={setCounter}
            />
          )}

          {counter === "2" && (
            <FormPage2
              bussinessMail={bussinessMail}
              setBussinessMail={setBussinessMail}
              bussinessContact={bussinessContact}
              setBussinessContact={setBussinessContact}
              bussinessAltContact={bussinessAltContact}
              setBussinessAltContact={setBussinessAltContact}
              openDays={openDays}
              setOpenDays={setOpenDays}
              openTime={openTime}
              setOpenTime={setOpenTime}
              closeTime={closeTime}
              setCloseTime={setCloseTime}
              timingArr={timingArr}
              setTimingArr={setTimingArr}
              setCounter={setCounter}
            />
          )}
          {counter === "3" && (
            <FormPage3
              mainCategory={mainCategory}
              setMainCategory={setMainCategory}
              subCategory={subCategory}
              setSubCategory={setSubCategory}
              bio={bio}
              setBio={setBio}
              setCounter={setCounter}
            />
          )}
          {counter === "4" && (
            <FormPage4
          
              handleSubmit={handleSubmit}
              setCounter={setCounter}
              imagelinkArr={imagelinkArr}
              setImageLinkArr={setImageLinkArr}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessRegister;
