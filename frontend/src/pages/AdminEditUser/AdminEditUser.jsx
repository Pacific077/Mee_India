import React, { useState } from "react";
import "./AdminEditUser.css";
import {toast} from "react-toastify"
import { AdminEditUserdetails } from "../../apis/AdminApis";
import isEmail from "../../utils/IsValidEmail";
import isEmpty from "../../utils/IsEmpty";
import { useNavigate, useParams } from "react-router-dom";
const AdminEditUser = () => {
  const {userId} = useParams()
  const navigate = useNavigate()
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [contact,setcontact]=useState('')
  const [Membership,setMembership]=useState('')
  const handleSubmit =async ()=>{
    console.log("check details",name,email,contact,Membership)
    if(isEmpty(email)){
      setemail('')
    }
    if(isEmpty(name)){
      setname('')
    }
    if(isEmpty(contact)){
      setcontact('')
    }
    if(isEmpty(Membership)){
      setMembership('')
    }
    if(!isEmail(email)&&!isEmpty(email)){
      return toast.warning("Enter a valid Email")
    }
    try {
      const resp =await AdminEditUserdetails({name,email,contact,Membership,id:userId})
      if(resp.status===200){
        toast.success("User Details Updated")
        navigate(`/admin/userList/specific/${userId}`)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div className="EditUserAdminPAge">
      <h1 className="AdminUserDetailsEditHead">Edit User Details</h1>
      <div className="inputwithLabelbox">
        <div className="singleInputlabel">
          <p>Name</p>
          <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="John Doe" />
        </div>
        <div className="singleInputlabel">
          <p>Email</p>
          <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="example@123.com" />
        </div>
      </div>
      <div className="inputwithLabelbox">
        <div className="singleInputlabel">
          <p>Contact</p>
          <input value={contact} onChange={(e)=>setcontact(e.target.value)} type="Number" placeholder="+918765432101" />
        </div>
        <div className="singleInputlabel">
          <p>Membership</p>
          <select value={Membership} onChange={(e)=>setMembership(e.target.value)}>
            <option value="Free List">Free List</option>
            <option value="Shop List">Shop List</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            <option value="Pro">Pro</option>
          </select>
        </div>
      </div>
      <div className="btnContEditUserAdmin">
        <button className="updateUserAdminBtn" onClick={handleSubmit}>Update</button>
        <button className="CancelUserAdminBtn" onClick={()=>navigate(`/admin/userList/specific/${userId}`)}>Cancel</button>
      </div>
    </div>
  );
};

export default AdminEditUser;
