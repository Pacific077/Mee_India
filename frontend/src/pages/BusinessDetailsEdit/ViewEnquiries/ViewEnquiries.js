import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { findByID } from '../../../apis/BusinessApi';
import './ViewEnquiries.css'

const ViewEnquiries = () => {
  const { BusinessId } = useParams();
  const [currBusiness, setCurrBusiness] = useState({});
  const [loading,setLoading] = useState(true);

  const fetchBusinessByID = async () => {
    try {
      const resp = await findByID({ bussinessId: BusinessId });
      if (resp.status === 200) {
        setCurrBusiness(resp.data.businessDetail);
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBusinessByID();
  }, []);
  return (
    <div className='ReviewsContainer'>
        <h1>Latest Enquiries</h1>
        <h3>Respond to them in 2 days or they will expire.</h3>
        {loading ? (
            <h5>Wait.....</h5>
        ) : (
            currBusiness.enquiry.map((rev, ind) => (
                <div className='enquiryContainer'>
                    <h4>{rev.name}</h4>
                    <p>{rev.contact}</p>
                    <p>{rev.question}</p>
                </div>
            ))
        )}
    </div>
  )
}

export default ViewEnquiries