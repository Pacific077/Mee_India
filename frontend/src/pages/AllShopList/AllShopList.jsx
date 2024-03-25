import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import "./AllshopList.css";
import AllShopListCard from "./AllShopListCard";
import { getShopsList } from "../../apis/AdminApis";
const AllShopList = () => {
  const [shopsArr, setshopsArr] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getShopsList();
        console.log("tres", resp.data.business);
        setshopsArr(resp.data.business);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="UserListpage">
      <div className="AllUserListHeadCont">
        <h1 className="AllUserListHead">All Shops List</h1>
        <div className="searchByEmailCont">
          <input
            type="text"
            className="AlluserListSearchBar"
            placeholder="Search by Id"
          />
          <IoMdSearch className="searchIcon" />
        </div>
      </div>
      <div className="userListTableHead">
        <p>Name</p>
        <p>Category</p>
        <p>District</p>
        <p>State</p>
      </div>

      {shopsArr.length > 0
        ? shopsArr.map((ele, ind) => {
            return (
              <AllShopListCard
              id={ele._id}
                key={ind}
                title={ele.title}
                district = {ele.districtCard}
                cat={ele.mainCategory}
                dis={ele.district}
                state = {ele.state}
              />
            );
          })
        : "Please Wait Loaddng"}
      
    </div>
  );
};

export default AllShopList;
