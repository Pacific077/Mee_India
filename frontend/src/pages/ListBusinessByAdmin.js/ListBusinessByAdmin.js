import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./ListBusinessByAdmin.css";
import AddIcon from "@mui/icons-material/Add";
import list from "../../components/FormPage/states-and-districts.json";
import { toast } from "react-toastify";
import { MenuItem } from "@mui/material";
import CategoriesArray from "../../pages/Home/CategoriesArray";
import SelectedSubCategoryCard from "../../components/Card/SelectedSubCategoryCard/SelectedSubCategoryCard";
import ReactLoading from "react-loading";
import { FreeListByAdmin } from "../../apis/AdminApis";
import { useNavigate } from "react-router-dom";

const ListBusinessByAdmin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    title: "",
    address: "",
    bussinessContact: "",
    bussinessAltContact: "",
    bussinessMail: "",
    pinCode: "",
    bio: "",
  });

  const [imagelinkArr, setImageLinkArr] = useState([]);
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
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
  const [loading, setLoading] = useState(false);

  const [distList, setDistList] = useState([]);
  const stateList = list.states.map((obj) => obj.state);

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const handleClick = (ind) => {
    console.log("index" + ind);
    const element = document.getElementById(ind);
    element.classList.toggle("selected");
    setOpenDays((prev) => {
      const updatedDays = [...prev]; // Create a copy of the previous state array
      updatedDays[ind] = !updatedDays[ind]; // Toggle the value at index 'ind'
      return updatedDays;
    });
  };

  const onAddClick = () => {
    if (openTime === "" || closeTime === "")
      toast.warning("All fields compulsary");
    else {
      setTimingArr((prev) => [...prev, openTime, closeTime]);
      setOpenTime("");
      setCloseTime("");
    }
  };

  const handleStateChange = (event) => {
    const temp = event.target.value;
    setState(temp);
    const selectedStateObj = list.states.find((obj) => obj.state === temp);
    if (selectedStateObj) {
      setDistList(selectedStateObj.districts);
    } else {
      setDistList([]);
    }
  };

  const [subCatArr, setSubCatArr] = useState([]);
  // const [subCat,setSubCat] = useState('');

  const handleCatChange = (event) => {
    setSubCategory([]);
    const temp = event.target.value;
    setMainCategory(event.target.value);
    const selectedCatObj = CategoriesArray.find((obj) => obj.category === temp);
    if (selectedCatObj) {
      setSubCatArr(selectedCatObj.subCat);
    } else {
      // Handle case when selected state is not found
    }
  };
  const selectSubCategories = (event) => {
    if (!subCategory.includes(event.target.value) && event.target.value !== "")
      setSubCategory([...subCategory, event.target.value]);
  };

  const handleChange1 = async (e) => {
    setImageLinkArr([]);
    setLoading(true);
    const files = Array.from(e.target.files);

    try {
      // const ImageToUrl
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (
      loading ||
      formData.email === "" ||
      formData.title === "" ||
      formData.address === "" ||
      state === "" ||
      formData.pinCode === "" ||
      formData.bussinessContact === "" ||
      formData.bussinessAltContact === "" ||
      formData.bussinessMail === "" ||
      formData.bio === "" ||
      mainCategory === "" ||
      subCategory === ""
    ){
      toast.warning("All Fields are necessary");
      return;
    }
    if (imagelinkArr.length < 3){
      toast.warning("Select atleast 3 images.");
      return;
    } 

    try {
      const res = await FreeListByAdmin({
        formData,
        state,
        district,
        timingArr,
        openDays,
        mainCategory,
        subCategory,
        imagelinkArr,
        latitude: 23.6544338,
        longitude: 86.1456444,
      });
      if (res.status === 200) {
        navigate("/admin/dashboard");
        toast.success("Business Registered ");
      } else {
        console.log("rresp" + JSON.stringify(res.data));
        toast.error(JSON.stringify(res.data.message));
      }
    } catch (e) {
      console.log("fsdfa" + e);
      toast.error(e.response.data.message);
    }
  };

  return (
    <div className="formContainer">
      <h1 className="ListByAdminHeading">Business Details</h1>
      <div className="form">
        <TextField
          label="Owner's Email"
          name="email"
          placeholder="Make sure this email is registered"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <div className="twoinputfield">
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="State"
              defaultValue=""
              helperText="Please select your State"
              onChange={handleStateChange}
              value={state}
              size="small"
              margin="normal"
            >
              {stateList.map((state, index) => (
                <MenuItem key={index} value={state}>
                  {state}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="District"
              defaultValue=""
              helperText="Please select your District"
              onChange={(e) => setDistrict(e.target.value)}
              value={district}
              size="small"
              margin="normal"
            >
              {distList.map((state, index) => (
                <MenuItem key={index} value={state}>
                  {state}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <TextField
          label="Pin Code"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Business Contact"
          name="bussinessContact"
          value={formData.bussinessContact}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Business Alternate Contact"
          name="bussinessAltContact"
          value={formData.bussinessAltContact}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Business Mail"
          name="bussinessMail"
          value={formData.bussinessMail}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <label className="formLabel">Select the days you are Open</label>
        <div className="daySelector">
          {/* <div> */}
          {weekdays.map((day, ind) => {
            return (
              <div className="daybtn" id={ind} onClick={() => handleClick(ind)}>
                {day}
              </div>
            );
          })}
          {/* </div> */}
        </div>

        <div className="timeShowContainer">
          {timingArr.map((time, index) => (
            <div>
              {index % 2 !== 0 ? (
                <div className="timeShow">
                  <span>{timingArr[index - 1]}</span>
                  <span> to </span>
                  <span>{timingArr[index]}</span>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
        <div className="timeField">
          <div>
            <label className="formLabel">Opens At:</label>
            <input
              type="time"
              className="timeInput"
              onChange={(event) => {
                setOpenTime(event.target.value);
              }}
              value={openTime}
            />
          </div>
          <div>
            <label className="formLabel">Closes At:</label>
            <input
              type="time"
              className="timeInput"
              onChange={(event) => {
                setCloseTime(event.target.value);
              }}
              value={closeTime}
            />
          </div>
          <div className="addTime" onClick={onAddClick}>
            <p>Add this Timing </p>
            <span>
              <AddIcon />
            </span>
          </div>
        </div>

        <div>
          <label className="formLabel">
            Select a suitable Category for the business:
          </label>
          <select className="formInput small" onChange={handleCatChange}>
            <option value="">Select</option>
            {CategoriesArray.map((cat, index) => (
              <option key={index} value={cat.category}>
                {cat.category}
              </option>
            ))}
          </select>
        </div>
        <div className="BusinessFromSelectedCubCategory">
          {subCategory.map((val, index) => {
            return (
              <SelectedSubCategoryCard
                setSubCategory={setSubCategory}
                subCategory={subCategory}
                val={val}
                key={index}
              />
            );
          })}
        </div>
        {subCatArr.length !== 0 && (
          <div>
            <label className="formLabel">
              Select all suitable Sub-Categories for the business:
            </label>
            <select className="formInput small" onChange={selectSubCategories}>
              <option value="">Select</option>
              {subCatArr.map((cat, index) => (
                <option key={index} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <TextField
          label="Bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />

        <div className="busineesFormImageUploadCont">
          <div className="BussinessFormImageuploadiv">
            <label htmlFor="">Image 1</label>
            <input type="file" onChange={handleChange1} multiple />
          </div>
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

        <button className="btn grnBtn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ListBusinessByAdmin;
