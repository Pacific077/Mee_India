import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Checkout.css";
import ExtractDate from "../../utils/ExtractDate";
const Checkout = () => {
  const { type } = useParams();
  const [MebershipType, setMembershipType] = useState("");
  const [basicPrice, SetBasicPrice] = useState(0);
  const [monthDuration, SetMonthDuration] = useState(1);
  const [discoun, setDiscount] = useState(0);
  const [validTillDate, setValidTillDate] = useState(0);
  const navigate = useNavigate()
  useEffect(() => {
    if (monthDuration === 1) {
      setDiscount(0);
    } else if (monthDuration === 2) {
      setDiscount(5);
    } else {
      setDiscount(10);
    }
  }, [monthDuration]);

  useEffect(() => {
    if (type === "freeList") {
      setMembershipType("FreeList");
      SetBasicPrice(0);
    } else if (type === "shopList") {
      setMembershipType("Shop List");
      SetBasicPrice(30);
    } else if (type === "standard") {
      setMembershipType("Standard List");
      SetBasicPrice(600);
    } else if (type === "premium") {
      setMembershipType("Premium List");
      SetBasicPrice(1500);
    } else {
      setMembershipType("Pro List");
      SetBasicPrice(3000);
    }
  }, [type]);
  useEffect(() => {
    const currentDate = new Date();
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + monthDuration));
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = newDate.toLocaleDateString('en-US', options);

    setValidTillDate(formattedDate);
}, [monthDuration]);
  const handleMonthChange = (e) => {
    console.log(e.target.value);
    SetMonthDuration(parseInt(e.target.value));
  };
  return (
    <div className="CheckoutPageCont">
      <h1 className="CheckOutPageHead">Your Order Details</h1>
      <p className="subscriptionTypeCheckout">
        Subscription Type : <span>{MebershipType}</span>
      </p>
      <div className="SelectPlanCheckout">
        <h1>Select Duration</h1>
        <div className="monthsCheckout">
          <div>
            <input
              type="radio"
              checked={monthDuration === 1} 
              name="duration"
              value="1"
              onChange={handleMonthChange}
            />
            <label htmlFor="">1 month</label>
          </div>
          <div>
            <input
              type="radio"
              name="duration"
              checked={monthDuration === 2} 
              onChange={handleMonthChange}
              value="2"
            />
            <label htmlFor="">2 months</label>
          </div>
          <div>
            <input
              type="radio"
              checked={monthDuration === 3} 
              name="duration"
              onChange={handleMonthChange}
              value="3"
            />
            <label htmlFor="">3 months</label>
          </div>
        </div>
      </div>
      <div className="AmountDetailsCont">
        <h1>Billing Details</h1>

        <div className="amountDetailsCheckOut">
          <p>
            Price : <span>{basicPrice * monthDuration}</span>{" "}
          </p>
          <p>
            Discount : <span>-{discoun}%</span>
          </p>
          <p>
            Total Amount :{" "}
            <span className="bordertop">
              {basicPrice * monthDuration -
                basicPrice * monthDuration * (discoun / 100)}
            </span>
          </p>
          <p>
            Valid Till :<span>{validTillDate}</span>
          </p>
        </div>
      </div>
      <div className="PaymentMethodCheckOut">
        <h3>Select Payment Method</h3>
        <div className="PaymentCheckout">
          <div>
            <input type="radio" name="duration" value="1 month" />
            <label htmlFor="">UPI</label>
          </div>
          <div>
            <input type="radio" name="duration" value="2 months" />
            <label htmlFor="">Card</label>
          </div>
          <div>
            <input type="radio" name="duration" value="3 months" />
            <label htmlFor="">Net Banking</label>
          </div>
        </div>
      </div>
      <div className="btnContCheckout">
        <button className="PaynowCheckBtn">Pay Now</button>
        <button className="GoBackCheckBtn" onClick={()=>navigate('/pricing-details')}>Go Back</button>
      </div>
    </div>
  );
};

export default Checkout;
