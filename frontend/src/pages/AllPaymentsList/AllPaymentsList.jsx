import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import "./AllPaymentsList.css";
import { GetAllPaymentsList } from "../../apis/AdminApis";
import AllPaymentListcard from "./AllPaymentListcard/AllPaymentListcard";
import ExtractDate from "../../utils/ExtractDate";
const AllPaymentsList = () => {
  const [paymentListArr,setPaymentListArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await GetAllPaymentsList();
        setPaymentListArr(resp.data.payments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="UserListpage">
      {/* {isFilterVis&&<FilterSearch setUserList={setUserList} setFilterVis={setFilterVis}/>} */}
      {/* <TbFilterSearch className="filteSearchIcon" onClick={()=>setFilterVis(true)} /> */}
      <div className="AllUserListHeadCont">
        <h1 className="AllUserListHead">All Payment List</h1>
        <div className="searchByEmailCont">
          <input
            type="text"
            className="AlluserListSearchBar"
            placeholder="Search by email"
          />
          <IoMdSearch className="searchIcon" />
        </div>
      </div>
      <div className="userlistCont">
        <div className="userListTableHead">
          <p>Payment ID</p>
          <p>Recipient Name</p>
          <p>Date</p>
          <p>Amount</p>
          <p>Membership</p>
        </div>
        {paymentListArr.length > 0
        ? paymentListArr.map((ele, index) => {
          return (
            <AllPaymentListcard
            key={index}
            paymntId={ele.razorpay_payment_id}
            id={ele._id}
            name={ele.User.name}
            date={ele.createdAt?ExtractDate(ele.createdAt):"No Idea"}
            amnt = {ele.AmountPaid}
            MembershipType={ele.MembershipType}
            // UserId={ele._id}
            // name={ele.name}
            // email={ele.email}
            // date={ele.createdAt}
            // shops={ele.ownedBussinesses.length}
            />
            );
          })
          : "No data Found"}
 
      </div>
    </div>
  );
};

export default AllPaymentsList;
