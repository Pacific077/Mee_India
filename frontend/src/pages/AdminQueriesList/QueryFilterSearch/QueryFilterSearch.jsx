import React, { useState } from "react";
import { GiSkullCrossedBones } from "react-icons/gi";
import {toast} from "react-toastify"
import "./QueryFilterSearch.css";
import { AdminFilterUser } from "../../../apis/AdminApis";
const QueryFilterSearch = ({ setFilterVis,setQueryList }) => {
  const [membership, setMembership] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  

  const handleSubmit = async () => {
    //add precentage for query with spaces
    const encodedMembership = encodeURIComponent(membership);
    try {
      const resp = await AdminFilterUser({
        membership: encodedMembership,
        startDate: purchaseDate,
      });
      if(resp.status===200){
        // setUserList(resp.data.data);
      }
    } catch (error) {
      toast.error("Internal server error")
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
          <p>Membership</p>
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
          <p>Date</p>
          <input
            type="date"
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
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
