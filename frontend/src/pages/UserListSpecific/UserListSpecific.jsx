import React, { useEffect, useState } from 'react'
import "./userListSpecific.css"
import { useNavigate, useParams } from 'react-router-dom'
import ExtractDate from '../../utils/ExtractDate';
import { AdminDeleteUser, getUserbyId } from '../../apis/AdminApis';
import { toast } from 'react-toastify';

const UserListSpecific = () => {
  const navigate = useNavigate()
    const [user,setUser] = useState() 
    const {userId} =useParams();
    useEffect(()=>{
        const fetchData = async () => {
            try {
             const resp =await getUserbyId({id:userId})
             console.log("responde", resp.data)
             setUser(resp.data)
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchData();
    },[])
    const handleUserDelete =async ()=>{
      try {
        const resp = await AdminDeleteUser({id:userId});
        if(resp.status===200){
          toast.success("User Deleted Successfully!!!!")
          navigate("/admin/showUserslist")
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  return (
    <div className='userlistSpecificPage'>
        <h1 className='userspecifcDetailHead'>User Details </h1>
        <div className="UserSpecificCard">
            <div className="UserSpecificDetails">
                <p>Name : {user?user.name:"-"}</p>
                <p>Email : {user?user.email:"-"}</p>
                <p>Contact :{user?user.phone:"-"}</p>

            </div>
            <div className="UserSpecificDetails">
                <p>Register Date: {user?ExtractDate(user.createdAt):"-"}</p>
                <p>Last Updated :{user?ExtractDate(user.updatedAt):"-"}</p>
                <p>ID :{user?user._id:"-"}</p>
            </div>
            <div className="UserSpecificDetails">
                <p>Membership : {user?user.Membership:"-"}</p>
                <p>MemeberShip Expiry Date : 12/12/12</p>
                <p>Shop Owned : {user?user.ownedBussinesses.length:"-"}</p>
            </div>
        </div>
        <div className="UserspecificdetailsBtnCont">
          <button onClick={()=>navigate(`/admin/userList/specific/edit/${userId}`)} className='AdminEditUsersBtn'>Edit Details</button>
          <button onClick={handleUserDelete} className='adminDeluserBtn'>Delete User</button>
        </div>
    </div>
  )
}

export default UserListSpecific