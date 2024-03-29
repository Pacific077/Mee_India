import React, { useState } from "react";
import { GiSkullCrossedBones } from "react-icons/gi";
import {toast} from "react-toastify"
import { AdminFilterPayment, AdminFilterQueries, AdminFilterUser } from "../../../apis/AdminApis";
import list from "../../AllShopList/ShopFilterList/states-and-districts.json";

const QueryFilterSearch = ({ setFilterVis,setQueryList }) => {
  const [membership, setMembership] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [distList, setDistList] = useState([]);
  const [state, setstate] = useState('');
  const [district, setdistrict] = useState('');

  const stateList = list.states.map((obj) => obj.state);
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

  const handleSubmit = async () => {
    //add precentage for query with spaces
    const encodedMembership = encodeURIComponent(membership);
    try {
      const resp = await AdminFilterQueries({
        membership: encodedMembership,
        startDate: startDate,
        endDate: endDate,
        district: district,
        email:""
      });
      if(resp.status===200){
        console.log(resp)
        setQueryList(resp.data.data);
      }
    } catch (error) {
      toast.error("Internal server error")
      console.log(error)
    }
    setFilterVis(false);
    // console.log("details",encodedMembership,purchaseDate)
  };
  return (
    <div className="Filtersearchcomponent">
      <GiSkullCrossedBones
        className="filtersearcCrossIcon"
        onClick={() => setFilterVis(false)}
      />
      <h1 className="filterSearcHead">Filter Search</h1>
      <div className="filterSearchItemsCont">
        <div className="filterSearchItems">
          <p>Membership: </p>
          <select onChange={(e) => setMembership(e.target.value)}>

            <option value="">------</option>
            <option value="Free List">Free List</option>
            <option value="Shop List">Shop List</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            <option value="Pro">Pro</option>
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
          <p>From: </p>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="filterSearchItems">
          <p>To: </p>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <div className="filtersearchBtnCont">
        <button onClick={handleSubmit} className="ApplyfilterBtn">
          Filter
        </button>
        <button onClick={() => setFilterVis(false)} className="CancelFilterBtn">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default QueryFilterSearch;
