import React, { useState } from "react";
import "./AdminEditShop.css";
import CategoriesArray from "../Home/CategoriesArray";
import list from "./states-and-districts.json";
import SelectedSubCategoryCard from "../../components/Card/SelectedSubCategoryCard/SelectedSubCategoryCard";
import isEmpty from "../../utils/IsEmpty";
import { toast } from "react-toastify";
import isEmail from "../../utils/IsValidEmail";
import { useNavigate, useParams } from "react-router-dom";
import { AdminEditShopdetails } from "../../apis/AdminApis";
const AdminEditShop = () => {
  const { shopId } = useParams();
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [Pincode, setPincode] = useState("");
  const [subCatArr, setSubCatArr] = useState([]);
  const [SelectedsubCatArr, setSelectedSubCatArr] = useState([]);
  const [distList, setDistList] = useState([]);
  const [mainCategory, setMainCategory] = useState("");
  const stateList = list.states.map((obj) => obj.state);

  const handleCatChange = (event) => {
    setMainCategory(event.target.value);
    setSelectedSubCatArr([])
    const temp = event.target.value;
    const selectedCatObj = CategoriesArray.find((obj) => obj.category === temp);
    if (selectedCatObj) {
      if(selectedCatObj.subCat.length===0){
        console.log("emptysubcat")
        setSelectedSubCatArr(["empty"])
      }
      setSubCatArr(selectedCatObj.subCat);  
    } else {
      // Handle case when selected state is not found
    }
  };
  const handleStateChange = (event) => {
    const temp = event.target.value;
    setState(event.target.value);
    const selectedStateObj = list.states.find((obj) => obj.state === temp);
    if (selectedStateObj) {
      setDistList(selectedStateObj.districts);
    } else {
      setDistList([]);
    }
  };
  const selectSubCategories = (event) => {
    if (
      !SelectedsubCatArr.includes(event.target.value) &&
      event.target.value !== ""
    )
      setSelectedSubCatArr([...SelectedsubCatArr, event.target.value]);
  };

  const handleSubmit = async () => {
    if (isEmpty(title)) {
      setTitle("");
    }
    if (isEmpty(email)) {
      setemail("");
    }
    if (isEmpty(contact)) {
      setcontact("");
    }
    if (isEmpty(state)) {
      setState("");
    }
    if (isEmpty(Pincode)) {
      setPincode("");
    }
    if (isEmpty(district)) {
      setDistrict("");
    }
    if (SelectedsubCatArr.length === 0) {

      setSelectedSubCatArr([]);
    }
    if (!isEmail(email) && !isEmpty(email)) {
      return toast.warning("Enter a valid Email");
    }
    try {
      const resp = await AdminEditShopdetails({
        id: shopId,
        title,
        bussinessMail: email,
        mainCategory,
        subCategory:SelectedsubCatArr,
        state,
        district,
        pinCode:Pincode,
      });
      if(resp.status===200){
        toast.success("Updated Successfully")
        navigate(`/admin/shoplist/specific/${shopId}`)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };
  return (
    <div className="EditUserAdminPAge">
      <h1 className="AdminUserDetailsEditHead">Edit Shop Details</h1>
      <div className="inputwithLabelbox">
        <div className="singleInputlabel">
          <p>Shop Name</p>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="XYZ enterprises"
          />
        </div>
        <div className="singleInputlabel">
          <p>Business Email</p>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="text"
            placeholder="example@123.com"
          />
        </div>
      </div>
      <div className="inputwithLabelbox">
        <div className="singleInputlabel">
          <p>Business Contact</p>
          <input
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
            type="Number"
            placeholder="+918765432101"
          />
        </div>

        <div className="singleInputlabel">
          <p>Categories</p>
          <select className="" onChange={handleCatChange}>
            <option value="">Select</option>
            {CategoriesArray.map((cat, index) => (
              <option key={index} value={cat.category}>
                {cat.category}
              </option>
            ))}
          </select>
        </div>
        {subCatArr.length !== 0 && (
          <div className="selectedSubcategoryAdmin">
            {SelectedsubCatArr.map((ele, index) => {
              return (
                <SelectedSubCategoryCard
                  setSubCategory={setSelectedSubCatArr}
                  subCategory={SelectedsubCatArr}
                  val={ele}
                  key={index}
                />
              );
            })}
          </div>
        )}

        {subCatArr.length !== 0 && (
          <div className="singleInputlabel">
            <p>SubCategories</p>
            <select className="" onChange={selectSubCategories}>
              <option value="">Select</option>
              {subCatArr.map((cat, index) => (
                <option key={index} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className="inputwithLabelbox">
        <div className="singleInputlabel">
          <p>Pin Code</p>
          <input
            value={Pincode}
            onChange={(e) => setPincode(e.target.value)}
            type="Number"
            placeholder="823001"
          />
        </div>

        <div className="singleInputlabel">
          <p>State</p>
          <select className="" onChange={handleStateChange}>
            <option value="">Select State</option>
            {stateList.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        {distList.length !== 0 && (
          <div className="singleInputlabel">
            <p>Districts</p>
            <select className="" onChange={(e) => setDistrict(e.target.value)}>
              <option value="">Select District</option>
              {distList.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="btnContEditUserAdmin">
        <button className="updateUserAdminBtn" onClick={handleSubmit}>
          Update
        </button>
        <button className="CancelUserAdminBtn">Cancel</button>
      </div>
    </div>
  );
};

export default AdminEditShop;
