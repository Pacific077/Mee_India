import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { findByID } from '../../../apis/BusinessApi';
import Review from '../../BussinessPage/Review/Review';

const ManageReviews = () => {
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
        <h1>Public Reviews</h1>
        {loading ? (
            <h5>Wait.....</h5>
        ) : (
            currBusiness.reviews.map((rev, ind) => (
            <Review key={ind} name={rev.userId.name} ratedCnt={rev.userId.ratedBussinesses?.length} message={rev.message} img={rev.userId.profileImage}/>
            ))
        )}
    </div>
  )
}

export default ManageReviews