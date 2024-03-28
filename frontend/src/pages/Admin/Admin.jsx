import React, { useEffect, useState } from 'react'
import "./Admin.css"
// import { BsArrowLeftSquareFill } from "react-icons/bs";
import LineGraph from './LineGraph/LineGraph'
import BarGraph from './BarGraph/BarGraph'
import AdminCard from './AdminCard/AdminCard'
import AdminCardArr from './AdmiCardArr'
import { GetLastTenPayments, getcounts } from '../../apis/AdminApis'
import PaymentCard from './PaymentCard/PaymentCard'

const Admin = () => {
    const [usercount, setUserCount] = useState();
    const [shopcount, setShopCount] = useState();
    const [payemntArr,setPaymentArr] = useState([]);

  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const resp = await getcounts();
          const resp1 = await GetLastTenPayments()
          setUserCount(resp.data.users);
          setShopCount(resp.data.shops);
          setPaymentArr(resp1.data.payments)

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
    // const handleSideNavDisplay = ()=>{
    //   setshowAdminNAv(true);
    // }
  return (
    <div className='AdminPage'>
{/* <BsArrowLeftSquareFill onClick={handleSideNavDisplay} className='AdminNavDrawerIcon'/> */}
      {/* {showAdminnav&&<AdminSideNav vis={showAdminnav} setshowAdminNAv={setshowAdminNAv}/>} */}
        <div className="adminGraphscont">
            <div className="AdminLineGraphs">
            <h1 className='GraphsHeading'>Registrations Count</h1>
                <LineGraph/>
            </div>
            <div className="AdminLineGraphs">
            <h1 className='GraphsHeading'>Memberships Count</h1>
                <BarGraph/>
            </div>
            
        </div>
        <div className="adminDatabaseInfoCont">
            {AdminCardArr.map((ele,ind)=>{
                return(
                    <AdminCard usercount={usercount} shopcount={shopcount} text={ele.text} key={ind} name={ele.name} count={ele.count} color={ele.color}/>

                )
            })}
            {/* <AdminCard/>
            <AdminCard/> */}
        </div>
     <div className="AdminPaymentDetails">
            <h1 className="paymentDetailsHead">Recent Transactions</h1>
            <div className="PayemntListsCont">
              {payemntArr.map((ele,ind)=>{
                return (
                  <PaymentCard key={ind} date={ele.createdAt?ele.createdAt:"xx-xx-xx"} amnt={ele.AmountPaid}  name={ele.User.name} dp={ele.User.profileImage} />
                )
              })}
            </div>
        </div> 
    </div>
  )
}

export default Admin