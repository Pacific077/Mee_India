import React, { useState } from "react";
import CategoriesArray from "../../pages/Home/CategoriesArray";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
const FormPage4 = ({
  setCounter,
  handleSubmit,
  imagelinkArr,
  setImageLinkArr,
}) => {
  const [loading, setLoading] = useState(false);
  const handleNext = () => {
    console.log("imglits", imagelinkArr);
    if (imagelinkArr.length < 3) {
      toast.warning("Select at least 3 images");
    } else {
      //   const formdata = new FormData()
      //   for (let i = 0; i < img1.length; i++) {
      //     console.log("i",img1[i])
      //     formdata.append('files', img1[i]);
      //   }
      //   console.log("list prepared",  JSON.stringify([...formdata.entries()]));
      handleSubmit();
    }
    // console.log(img1);
  };
  const handlePrev = () => {
    setCounter("3");
  };
  const handleChange1 = async (e) => {
    setImageLinkArr([]);
    setLoading(true);
    const files = Array.from(e.target.files);

    try {
      for (let i = 0; i < files.length; i++) {
        let pics = files[i];
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
          const data = new FormData();
          data.append("file", pics);
          data.append("upload_preset", "chat-app");
          data.append("cloud_name", "piyushproj");

          const response = await fetch(
            "https://api.cloudinary.com/v1_1/piyushproj/image/upload",
            {
              method: "POST",
              body: data,
            }
          );

          if (!response.ok) {
            throw new Error("Upload failed");
          }

          const imageData = await response.json();
          console.log("url", imageData.url);
          setImageLinkArr((prev) => [...prev, imageData.url]);
        }
      }
      setLoading(false);
    } catch (error) {
      console.error("Error uploading images:", error);
      setLoading(false);
      // Handle error
    }
  };

  return (
    <div className="FormPageContainer">
      <h1 className="formPage3heading">Upload some photos of your business</h1>
      <div className="busineesFormImageUploadCont">
        <div className="BussinessFormImageuploadiv">
          <label htmlFor="">Image 1</label>
          <input type="file" onChange={handleChange1} multiple />
        </div>
      </div>
      {loading&& (
        <div className="Loading" style={{ width: "100%" }}>
          <ReactLoading type="spokes" color="purple" height={120} width={120} />
        </div>
      )}
      <div className="btnContainer">
        <button className="btn orngBtn" onClick={handlePrev}>
          Previous
        </button>
        <button className="btn grnBtn" onClick={handleNext}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormPage4;
