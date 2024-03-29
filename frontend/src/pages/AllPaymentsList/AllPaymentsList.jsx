import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import "./AllPaymentsList.css";
import { AdminFilterPayment, GetAllPaymentsList } from "../../apis/AdminApis";
import AllPaymentListcard from "./AllPaymentListcard/AllPaymentListcard";
import ExtractDate from "../../utils/ExtractDate";
import PaymentFilter from "./PaymentFilter/PaymentFilter";
import { TbFilterSearch } from "react-icons/tb";
import { toast } from "react-toastify";
const AllPaymentsList = () => {
  const [paymentListArr,setPaymentListArr] = useState([]);
  const [isFilterVis, setFilterVis] = useState(false);
  const [email,setEmail] = useState("");

  const handleSubmit = async () => {
    //add precentage for query with spaces
    try {
      const encodedEmail = encodeURIComponent(email);
      const resp = await AdminFilterPayment({
        membership:"",
        startDate:"",
        endDate:"",
        email:encodedEmail
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
      {isFilterVis&&<PaymentFilter setPaymentListArr={setPaymentListArr} setFilterVis={setFilterVis}/>}
      <TbFilterSearch className="filteSearchIcon" onClick={()=>setFilterVis(true)} />
      <div className="AllUserListHeadCont">
        <h1 className="AllUserListHead">All Payment List</h1>
        <div className="searchByEmailCont">
          <input
            type="text"
            value={email}
            className="AlluserListSearchBar"
            placeholder="Search by email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <IoMdSearch className="searchIcon" onClick={handleSubmit}/>
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
