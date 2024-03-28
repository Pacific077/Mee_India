import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { GetpaymentById } from '../../apis/AdminApis'
import ExtractDate from '../../utils/ExtractDate'
import ExtractTime from '../../utils/ExtractTime'
const AdminPaymentListSpecific = () => {
  const [paydetails,setPayDetails] = useState()
  const [payuserdetails,setPayUserDetails] = useState()

  const {paymentId} = useParams()
    useEffect(()=>{
        const fetchData = async () => {
            try {
             const resp =await GetpaymentById({id:paymentId})
             console.log("re",resp.data.payment);
             console.log("Usee",resp.data.payment.User);
             setPayDetails(resp.data.payment)
             setPayUserDetails(resp.data.payment.User)
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchData();
    },[])
  return (
    <div className='userlistSpecificPage'>
    <h1 className='userspecifcDetailHead'>Payment  Details </h1>
    <div className="UserSpecificCard">
        <div className="UserSpecificDetails">
            <p>Name : {payuserdetails?payuserdetails.name:""}</p>
            <p>Email : {payuserdetails?payuserdetails.email:""}</p>
            <p>Contact : +91{payuserdetails?payuserdetails.contact?payuserdetails.contact:"xxxx-xxxx-xx":""}</p>

        </div>
        <div className="UserSpecificDetails">
            <p>Payment Date : {paydetails?paydetails.createdAt?ExtractDate(paydetails.createdAt):"xx/xx/xx":""}</p>
            <p>Order ID : {paydetails?paydetails.razorpay_order_id:""} </p>
            <p>Payment ID : {paydetails?paydetails.razorpay_payment_id:""}</p>
        </div>
        <div className="UserSpecificDetails">
            <p>Payment Time : {paydetails?paydetails.createdAt?ExtractTime(paydetails.createdAt):"xx/xx/xx":""}</p>
            <p>MemeberShip Expiry Date : {payuserdetails?ExtractDate(payuserdetails.membershipExpiryDate):""} </p>
            <p>Amount Payed : {paydetails?paydetails.AmountPaid:""} </p>
        </div>
    </div>
    {/* <div className="UserspecificdetailsBtnCont">
      <button onClick={()=>navigate(`/admin/userList/specific/edit/${userId}`)} className='AdminEditUsersBtn'>Edit Details</button>
      <button onClick={handleUserDelete} className='adminDeluserBtn'>Delete User</button>
    </div> */}
</div>
  )
}

export default AdminPaymentListSpecific