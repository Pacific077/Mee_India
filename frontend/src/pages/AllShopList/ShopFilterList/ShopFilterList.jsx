import React, { useState } from 'react'
import "./ShopFilterList.css"
import { GiSkullCrossedBones } from "react-icons/gi";
import CategoriesArray from '../../Home/CategoriesArray';
import list from "./states-and-districts.json";
import { AdminFilterShop } from '../../../apis/AdminApis';
import IsVailidMongoId from '../../../utils/IsVailidMongoId';
import isEmpty from '../../../utils/IsEmpty';
import { toast } from 'react-toastify';

const ShopFilterList = ({setFilterVis,setshopsArr}) => {
  const [subCatArr, setSubCatArr] = useState([]);
  const [distList, setDistList] = useState([]);
  const [mainCategory, setmainCategory] = useState('');
  const [subCategory, setsubCategory] = useState('');
  const [state, setstate] = useState('');
  const [district, setdistrict] = useState('');
  const [owner, setowner] = useState('');

  const stateList = list.states.map((obj) => obj.state);
  const handleCatChange = (event) => {
    setmainCategory(event.target.value);
    setsubCategory('')
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
    setstate(event.target.value);
    setdistrict('')
    const selectedStateObj = list.states.find((obj) => obj.state === temp);
    if (selectedStateObj) {
      setDistList(selectedStateObj.districts);
    } else {
      setDistList([]);
    }
  };
  const handleSubmit =async()=>{
    try {
      if(!isEmpty(owner)&&!IsVailidMongoId(owner)){
        return toast.warning("Enter a valid Email")
      }
      const encodedmainCategory = encodeURIComponent(mainCategory);
      const encodedsubCategory = encodeURIComponent(subCategory);
      const encodedstate = encodeURIComponent(state);
      const encodeddistrict = encodeURIComponent(district);
      const resp = await AdminFilterShop({
        mainCategory: encodedmainCategory,
        subCategory: encodedsubCategory,
        state:encodedstate,
        district:encodeddistrict,
        owner
      });
      if(resp.status===200){
        setshopsArr(resp.data.data);
      }
      // console.log("resp",resp);
    } catch (error) {
      toast.error("Internal server error")
    }
    setFilterVis(false);
    // console.log("details",mainCategory,subCategory,state,district,owner)
  }
  return (
    <div className="Filtersearchcomponent">
      <GiSkullCrossedBones
        className="filtersearcCrossIcon"
        onClick={() => setFilterVis(false)}
      />
      <h1 className="filterSearcHead">Filter Search</h1>
      <div className="filterSearchItemsCont">
        <div className="filterSearchItems">
          <p>Category</p>
          <select onChange={handleCatChange}>
            <option value="">---------</option>
          {CategoriesArray.map((cat, index) => (
            <option key={index} value={cat.category}>
                {cat.category}
              </option>
            ))}
            </select>
        </div>
        <div className="filterSearchItems">
          <p>Sub Category</p>
          <select onChange={(e) => setsubCategory(e.target.value)}>
          <option value="">---------</option>
          {subCatArr.map((cat, index) => (
                <option key={index} value={cat.name}>
                  {cat.name}
                </option>
              ))}
          </select>
        </div>
        <div className="filterSearchItems">
          <p>State</p>
          <select onChange={handleStateChange} >
          <option value="">---------</option>
          {stateList.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="filterSearchItems">
          <p>District</p>
          <select onChange={(e)=>setdistrict(e.target.value)} >

            <option  value="">------</option>
            {distList.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
          </select>
        </div>
        
        <div className="filterSearchItems">
          <p>Owner Id</p>
          <input type="text" onChange={(e)=>setowner(e.target.value)}/>
        </div>
        {/* <div className="filterSearchItems">
          <p>Date</p>
          <input
            type="date"
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
          />
        </div> */}
      </div>
      <div className="filtersearchBtnCont">
        <button onClick={handleSubmit}  className="ApplyfilterBtn">
          Filter
        </button>
        <button onClick={() => setFilterVis(false)} className="CancelFilterBtn">
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ShopFilterList