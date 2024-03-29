import React, { useEffect, useState } from "react";
import "./AdminQueriesList.css";
import { TbFilterSearch } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";
import QueryFilterSearch from "./QueryFilterSearch/QueryFilterSearch";
import { AdminFilterQueries, GetAllAdminqueries } from "../../apis/AdminApis";
import AdminQueryListCard from "./AdminQueryListCard/AdminQueryListCard";
import ExtractDate from "../../utils/ExtractDate";
import { toast } from "react-toastify";

const AdminQueriesList = () => {
  const [QueryListArr, setQueryList] = useState([]);
  const [isFilterVis, setFilterVis] = useState(false);
  const [email,setEmail] = useState("")

  const handleSubmit = async () => {
    //add precentage for query with spaces
    // try {
    //   const resp = await AdminFilterQueries({
    //     membership: "",
    //     startDate: "",
    //     endDate: "",
    //     district: "",
    //     email:email
    //   });
    //   if(resp.status===200){
    //     console.log(resp)
    //     setQueryList(resp.data.data);
    //   }
    // } catch (error) {
    //   toast.error("Internal server error")
    //   console.log(error)
    // }
    // setFilterVis(false);
    // console.log("details",encodedMembership,purchaseDate)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await GetAllAdminqueries();
        // console.log("tres", resp);
        setQueryList(resp.data.Queries);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="UserListpage">
      {isFilterVis && (
        <QueryFilterSearch
          setQueryList={setQueryList}
          setFilterVis={setFilterVis}
        />
      )}
      {/* <TbFilterSearch
        className="filteSearchIcon"
        onClick={() => setFilterVis(true)}
      /> */}
      <div className="AllUserListHeadCont">
        <h1 className="AllUserListHead">All Queries</h1>
        <div className="searchByEmailCont">
          <input
            type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="AlluserListSearchBar"
            placeholder="Search by email"
          />
          <IoMdSearch className="searchIcon" onClick={handleSubmit}/>
        </div>
      </div>
      <div className="userlistCont">
        <div className="userListTableHead">
          <p>Name</p>
          <p>Email</p>
          <p>Query Date</p>
          <p>Question Asked</p>
        </div>
        {QueryListArr&&QueryListArr.length > 0
          ? QueryListArr.map((ele, index) => {
              return (
                <AdminQueryListCard
                  key={index}
                  id={ele._id}
                  name={ele.SenderId.name}
                  email={ele.SenderId.email}
                  qdate={ExtractDate(ele.createdAt)}
                  qasked={ele.question.substring(0,10)+"...read more"}
                />
              );
            })
          : "No data Found"}
      </div>
    </div>
  );
};

export default AdminQueriesList;
