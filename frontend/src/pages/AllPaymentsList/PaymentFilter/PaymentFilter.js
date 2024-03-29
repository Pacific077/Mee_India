import React, { useState } from "react";
import { GiSkullCrossedBones } from "react-icons/gi";
import {toast} from "react-toastify"
import { AdminFilterPayment, AdminFilterUser } from "../../../apis/AdminApis";
const PaymentFilter = ({ setFilterVis,setPaymentListArr }) => {
  const [membership, setMembership] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async () => {
    //add precentage for query with spaces
    const encodedMembership = encodeURIComponent(membership);
    try {
      const resp = await AdminFilterPayment({
        membership: encodedMembership,
        startDate: startDate,
        endDate: endDate,
        email:""
      });
      if(resp.status===200){
        setPaymentListArr(resp.data.data);
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
        {/* <div className="filterSearchItems">
          <p>Exact Payment Date</p>
          <input
            type="date"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
          />
        </div> */}
        <div className="filterSearchItems">
          <p>From Payment Date</p>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="filterSearchItems">
          <p>To Payment Date</p>
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

export default PaymentFilter;
