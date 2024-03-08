import React, { useEffect, useState } from 'react'
import "../UserDashboard/UserDashboard.css"
import "./UserDashboardCard"
import bikeService from '../../assets/bikeService.jpg'
import UserDashboardCard from './UserDashboardCard'
import BusinessDasboard from '../BusinessDasboard/BusinessDasboard'
import { EditProfileApi, LogoutApi, ProfileApi } from '../../apis/UserApi'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import { ImageToUrl } from '../../utils/ImagetoUrl'
import ReactLoading from "react-loading";

const UserDashboard = () => {
  const [user,setUser] = useState(false);
  const [businessList,setBusinessList] = useState ('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [newName,setNewName] = useState("")
  const [newPic,setNewPic] = useState("")
  const [isEditing,setIsEditing] = useState(false);

  const HandleFileChange =async (e)=>{
    const files = Array.from(e.target.files);
    console.log(files)
    setLoading(true)
    const resp = await ImageToUrl(files);
    const Item = resp[0];
    setLoading(false)
    // console.log("item",Item)
    setNewPic(Item)
  }

  const handleEditFormSubmit = async()=>{
    if(newName===""||newPic===""){
      toast.warning("All fields are Required!")
      return;
    }

    try{
      const resp = await EditProfileApi({
        _id: user._id,
        newName,
        newPic,
      })
      console.log("Resp",resp);
      fetchData();
      setNewName("");
      setNewPic("");
      setIsEditing(false);
    }
    catch(e){
      console.log(e);
      toast.error("Soemthing went wrong!")
    }
  }

  const fetchData = async ()=>{
    try{
    const resp = await ProfileApi()
    console.log("Resp",resp);
    setUser(resp.data.user);
    setBusinessList(resp.data.user.ownedBussinesses)
    }catch(e){
      console.log(e);
      toast.error("Something went Wrong")
    }
  };
  useEffect(()=>{
    fetchData();
  },[])
  const UpdateProfilePicture = ()=>{
    console.log("update profile")
  }
  const handleLogout = async()=>{
    try {
      const resp = await LogoutApi()
      if(resp.status===200){
        toast.success("Logged Out")
        navigate('/login')
      }
    } catch (error) {
      toast.error("Something went Wrong")
    }
    
  }
  return (
    
    <div className='userDashboardMainDiv'>
      <div className='userDashUpperDiv'>
        <div className="logout" onClick={handleLogout}>
          Logout
        </div>
        <div className='userDashUpperDivProfilePic'>
          <img className='UserDashboardImageDisplay' src={user?.profileImage} />
          <div className="UserDashboardInfo">
              <h3 className='userDashboardName'>{user?user.name:"Dummy"}</h3>
              <p>{user?user.email:"dummy Email"}</p>
          </div>
        </div>
       
      </div>
      {isEditing&&<div className='profileEditForm'>
        <div className="bussinessEditLabelandInp">
          <label htmlFor="">New Name</label>
          <input type="text" onChange={(e)=>setNewName(e.target.value)} value={newName}/>
        </div>
        {loading && (
          <div className="Loading" style={{ width: "100%" }}>
            <ReactLoading
              type="spokes"
              color="purple"
              height={120}
              width={120}
            />
          </div>
        )}
        {!loading&&<div className="BusinessEditCatalougeCont" style={{margin:"4vh"}}>
          <div className="AddCatalougeCard">
            <p className='plusSign'>+</p>
            <p>Add Photo</p>
            <input type="file" className='BussinessEditCatalougeFile' onChange={HandleFileChange} />
          </div>
        </div>}
      </div>}
      <div className='userDashCardcontainer'>
        {isEditing?<UserDashboardCard info={"Submit"} fun={handleEditFormSubmit}  />:<UserDashboardCard info={"Edit Profile"} fun={()=>setIsEditing(true)}  />}
        
        
        <UserDashboardCard info={"Upgrade"} fun={UpdateProfilePicture}/>
        <UserDashboardCard info={"Get Verified"} fun={UpdateProfilePicture}/>
        {/* <UserDashboardCard/>
        <UserDashboardCard/> */}
        
      </div>
      <BusinessDasboard businessList={businessList}/>
    </div>
    
   
  )
}

export default UserDashboard
