import React, { useEffect, useState } from 'react'
import { GetAdminQueryById } from '../../apis/AdminApis'
import { useParams } from 'react-router-dom'
import ExtractDate from '../../utils/ExtractDate'
import "./AdminQuerySpecific.css"
const AdminQuerySpecific = () => {
    const [query,setQuery] = useState('')
    const {queryId} = useParams();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const resp = await GetAdminQueryById({ id: queryId });
            // console.log("responde", resp.data);
            setQuery(resp.data.query);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <div className='userlistSpecificPage'>
    <h1 className='userspecifcDetailHead'>Query Details </h1>
    <div className="UserSpecificCard">
        <div className="UserSpecificDetails">
            <p>Name : {query?query.SenderId.name:"-"}</p>
            <p>Email : {query?query.SenderId.email:"-"}</p>
            <p>Contact :{query?query.SenderId.phone:"-"}</p>

        </div>
        <div className="UserSpecificDetails">
            <p className='Width50'>Query Date: {query?ExtractDate(query.createdAt):"-"}</p>
            <p className='Width50'>Question : {query?query.question:"-"}</p>
            {/* <p>Last Updated :{user?ExtractDate(user.updatedAt):"-"}</p> */}
            {/* <p>ID :{query?query._id:"-"}</p>     */}
        </div>
        <div className="UserSpecificDetails">
            {/* <p>MemeberShip Expiry Date : 12/12/12</p>
            <p>Shop Owned : {user?user.ownedBussinesses.length:"-"}</p> */}
        </div>
    </div>
    {/* <div className="UserspecificdetailsBtnCont">
      <button onClick={()=>navigate(`/admin/userList/specific/edit/${userId}`)} className='AdminEditUsersBtn'>Edit Details</button>
      <button  className='adminDeluserBtn'>Delete User</button>
    </div> */}
</div>
  )
}

export default AdminQuerySpecific