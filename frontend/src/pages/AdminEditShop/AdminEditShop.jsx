import React, { useState } from 'react'
import CategoriesArray from '../Home/CategoriesArray';
import list from './states-and-districts.json';
const AdminEditShop = () => {
  const [subCatArr, setSubCatArr] = useState([]);
  const [distList, setDistList] = useState([]);
  const stateList = list.states.map((obj) => obj.state);

  const handleCatChange = (event) => {
    const temp = event.target.value;
    const selectedCatObj = CategoriesArray.find((obj) => obj.category === temp);
    if (selectedCatObj) {
      setSubCatArr(selectedCatObj.subCat);
    } else {
      // Handle case when selected state is not found
    }
  };
  const handleStateChange = (event) => {
    const temp = event.target.value;
    // setState(temp);
    const selectedStateObj = list.states.find((obj) => obj.state === temp);
    if (selectedStateObj) {
      setDistList(selectedStateObj.districts);
    } else {
      setDistList([]);
    }
  };
  return (
    <div className="EditUserAdminPAge">
      <h1 className="AdminUserDetailsEditHead">Edit Shop Details</h1>
      <div className="inputwithLabelbox">
        <div className="singleInputlabel">
          <p>Shop Name</p>
          <input type="text" placeholder="XYZ enterprises" />
        </div>
        <div className="singleInputlabel">
          <p>Business Email</p>
          <input type="text" placeholder="example@123.com" />
        </div>
      </div>
      <div className="inputwithLabelbox">
        <div className="singleInputlabel">
          <p>Business Contact</p>
          <input type="Number" placeholder="+918765432101" />
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
        {subCatArr.length !== 0 &&(
          <div className="singleInputlabel">
          <p>SubCategories</p>
          <select className="">
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
          <input type="Number" placeholder="823001" />
        </div>
        
        <div className="singleInputlabel">
          <p>State</p>
          <select
            className=''
            onChange={handleStateChange}
          >
            <option value=''>Select State</option>
            {stateList.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        {distList.length !== 0 &&(
          <div className="singleInputlabel">
          <p>Districts</p>
          <select
            className=''  
          >
            <option value=''>Select District</option>
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
        <button className="updateUserAdminBtn">Update</button>
        <button className="CancelUserAdminBtn">Cancel</button>
      </div>
    </div>
  );
}

export default AdminEditShop