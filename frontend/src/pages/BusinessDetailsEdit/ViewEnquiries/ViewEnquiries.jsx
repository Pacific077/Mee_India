import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetBusinessEnquiries } from "../../../apis/BusinessApi";
import "./ViewEnquiries.css";
import EnquiryCard from "./EnquiryCard";

const ViewEnquiries = () => {
  const { BusinessId } = useParams();
  // const [currBusiness, setCurrBusiness] = useState({});
  const [loading, setLoading] = useState(true);
  const [EnquiryArr, SetEnquiryArr] = useState([]);

  const fetchBusinessByID = async () => {
    try {
      const resp = await GetBusinessEnquiries({ businessId: BusinessId });
      if (resp.status === 200) {
        console.log("resp", resp);
        SetEnquiryArr(resp.data.enquiry);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBusinessByID();
  }, []);
  return (
    <div className="ReviewsContainer">
      <h1>Latest Enquiries</h1>
      <h3>Respond to them in 2 days or they will expire.</h3>
      <div className="EnquiryCardCont">
        {loading ? (
          <h5>Wait.....</h5>
        ) : (
          EnquiryArr.map((enq, ind) => (
            <EnquiryCard
              key={ind}
              name={enq.SenderId.name}
              email={enq.SenderId.email}
              dp={enq.SenderId.profileImage}
              contact ={enq.SenderId.contact?enq.SenderId.contact:"xx xxxx xxxx"}
              enquiry={enq.question}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ViewEnquiries;
