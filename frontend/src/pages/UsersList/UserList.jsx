import React, { useEffect, useState } from 'react'
import "./UserList.css"
import { IoMdSearch } from "react-icons/io";
import UserListCard from './UserListCard'
import { getUserList } from '../../apis/AdminApis';
const UserList = () => {
  const [UserListArr,setUserList] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const resp = await getUserList();
        // console.log("tres",resp.data.users);
        setUserList(resp.data.users)

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='UserListpage'>
      <div className="AllUserListHeadCont">
      <h1 className='AllUserListHead'>All Users List</h1>
      <div className="searchByEmailCont">
      <input type="text" className='AlluserListSearchBar' placeholder='Search by email' />
      <IoMdSearch className='searchIcon'/> 
      </div>
      </div>
      <div className='userListTableHead'>
        <p>Name</p>
        <p>Email</p>
        <p>Registration Date</p>
        <p>Shops Owned</p>
      </div>
      {console.log("userlist",UserListArr)}
{
  UserListArr.length>0?UserListArr.map((ele,index)=>{
    return (
      <UserListCard UserId={ele._id} key={index} name={ele.name} email={ele.email} date={ele.createdAt}
      shops={ele.ownedBussinesses.length}/>

    )
  }):"Loading Please Wait"
}
    </div>
  )
}

export default UserList