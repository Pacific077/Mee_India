import React, { useEffect, useState } from "react";
import { TbFilterSearch } from "react-icons/tb";
import "./UserList.css";
import { IoMdSearch } from "react-icons/io";
import UserListCard from "./UserListCard";
import { AdminFilterUser, getUserList } from "../../apis/AdminApis";
import FilterSearch from "./FilterSearch/FilterSearch";
import { toast } from "react-toastify";
const UserList = () => {
  const [UserListArr, setUserList] = useState([]);
  const [isFilterVis,setFilterVis] = useState(false)
  const [email,setEmail] = useState("");

  const handleSubmit = async () => {
    //add precentage for query with spaces
    try {
      const encodedEmail = encodeURIComponent(email);
      const resp = await AdminFilterUser({
        membership: "",
        startDate: "",
        endDate: "",
        email: encodedEmail
      });
      if(resp.status===200){
        setUserList(resp.data.data);
      }
    } catch (error) {
      toast.error("Internal server error")
      console.log(error)
    }
    setFilterVis(false);
    // console.log("details",encodedMembership,purchaseDate)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getUserList();
        setUserList(resp.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="UserListpage">
      {isFilterVis&&<FilterSearch setUserList={setUserList} setFilterVis={setFilterVis}/>}
      <TbFilterSearch className="filteSearchIcon" onClick={()=>setFilterVis(true)} />
      <div className="AllUserListHeadCont">
        <h1 className="AllUserListHead">All Users List</h1>
        <div className="searchByEmailCont">
          <input
            type="text"
            value={email}
            className="AlluserListSearchBar"
            placeholder="Search by email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <IoMdSearch className="searchIcon" onClick={handleSubmit}/>
        </div>
      </div>
      <div className="userlistCont">

      <div className="userListTableHead">
        <p>Name</p>
        <p>Email</p>
        <p>Registration Date</p>
        <p>Shops Owned</p>
      </div>
      {UserListArr.length > 0
        ? UserListArr.map((ele, index) => {
          return (
            <UserListCard
            UserId={ele._id}
            key={index}
            name={ele.name}
            email={ele.email}
            date={ele.createdAt}
            shops={ele.ownedBussinesses.length}
            />
            );
          })
          : "No data Found"}
          </div>
    </div>
  );
};

export default UserList;
