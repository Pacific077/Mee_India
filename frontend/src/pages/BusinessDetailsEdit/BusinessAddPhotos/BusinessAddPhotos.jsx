import React, { useState } from "react";
import { IoCameraSharp } from "react-icons/io5";
import "./BusinessAddPhotos.css";
import ReactLoading from "react-loading";
import { ImageToUrl } from "../../../utils/ImagetoUrl";
import { BusienessEdit } from "../../../apis/BusinessApi";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
const BusinessAddPhotos = () => {
const {BusinessId} =useParams();
  const navigate = useNavigate();
  const [photos,setPhoto] = useState('')
  const [loading, setLoading] = useState(false);
  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    setLoading(true)
    const resp = await ImageToUrl(files);
    setLoading(false)
    setPhoto(resp);
    console.log("resp", resp);
  };
  const handleClick =async () =>{
    try{
        const Data = {
          photos,businessId:BusinessId
        }
        console.log("Data",Data);
        const resp = await BusienessEdit(Data);
        if(resp.status===200){
          toast.success("Photo Added Successfully")
          navigate(`/business-dashboard/${BusinessId}`)
        }
      }catch(er){
        console.log(er.message)
        toast.error("Something Went Wrong")
      }
  }
  return (
    <>
      <h1 className="BusinessEditHeading"> Photo Gallery </h1>
      <div className="BusinessAddPhotosdesc">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
          asperiores itaque tempora iusto impedit voluptas necessitatibus
          repellendus. Alias voluptates debitis aut voluptatum qui inventore
          dolorem iste iure aperiam, rem perferendis sed maxime commodi
          voluptate vitae accusantium eum at neque cupiditate fugiat odio
          repudiandae dolorum culpa fugit! Facilis eligendi dolorum ipsam.
        </p>
      </div>
      {loading && (
          <div className="Loading" style={{ width: "100%" }}>
            <ReactLoading
              type="spokes"
              color="purple"
              height={120}
              width={120}
            />
          </div>
        )}
      <div className="BusinessAddphotodiv">
        <div className="BusinessAddphotoBtnCont">
          <IoCameraSharp className="businessCameraIcon" />
          <p>Upload Photos Of Your Business</p>
          <input
            type="file"
            className="BusinessEditInptFile"
            onChange={handleFileChange}
          />
        </div>
    
        <div className="BusinessAddPhotoInfo">
          <p>Recommended Size :1000px x 1000px</p>
        </div>
      </div>
      <button className="btnPrim btn-lg" onClick={handleClick}>Save</button>
    </>
  );
};

export default BusinessAddPhotos;
