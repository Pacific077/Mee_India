import React, { useEffect, useState } from 'react'
import "./Admin.css"
import LineGraph from './LineGraph/LineGraph'
import BarGraph from './BarGraph/BarGraph'
import AdminCard from './AdminCard/AdminCard'
import AdminCardArr from './AdmiCardArr'
import { getcounts } from '../../apis/AdminApis'
const Admin = () => {
    const [usercount, setUserCount] = useState();
    const [shopcount, setShopCount] = useState();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Define getcounts or import it from another module
          const resp = await getcounts();
          setUserCount(resp.data.users);
          setShopCount(resp.data.shops);

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <div className='AdminPage'>
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
            <h1 className="paymentDetailsHead">Payments History</h1>
            <div className="PayemntListsCont">

            </div>
        </div>
    </div>
  )
}

export default Admin