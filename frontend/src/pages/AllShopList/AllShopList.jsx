import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import "./AllshopList.css";
import { TbFilterSearch } from "react-icons/tb";
import AllShopListCard from "./AllShopListCard";
import { AdminFilterShop, getShopsList } from "../../apis/AdminApis";
import ShopFilterList from "./ShopFilterList/ShopFilterList";
import { toast } from "react-toastify";
const AllShopList = () => {
  const [isFilterVis, setFilterVis] = useState(false);
  const [shopsArr, setshopsArr] = useState([]);
  const [email,setEmail] = useState("");

  const handleSubmit = async () => {
    //add precentage for query with spaces
    try {
      const encodedEmail = encodeURIComponent(email);
      const resp = await AdminFilterShop({
        mainCategory: "",
        subCategory: "",
        state:"",
        district:"",
        owner:"",
        startDate: "",
        endDate: "",
        email:encodedEmail
      });
      if(resp.status===200){
        setshopsArr(resp.data.data);
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
      {isFilterVis&&<ShopFilterList setshopsArr={setshopsArr} setFilterVis={setFilterVis}/>}
      <TbFilterSearch className="filteSearchIcon" onClick={()=>setFilterVis(true)} />
      <div className="AllUserListHeadCont">
        <h1 className="AllUserListHead">All Shops List</h1>
        <div className="searchByEmailCont">
          <input
            type="text"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            className="AlluserListSearchBar"
            placeholder="Search by Business Email"
          />
          <IoMdSearch className="searchIcon" onClick={handleSubmit}/>
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
                district={ele.districtCard}
                cat={ele.mainCategory}
                dis={ele.district}
                state={ele.state}
              />
            );
          })
        : "No Data Found"}
    </div>
  );
};

export default AllShopList;
