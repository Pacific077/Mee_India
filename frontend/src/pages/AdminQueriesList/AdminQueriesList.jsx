import React, { useEffect, useState } from "react";
import "./AdminQueriesList.css";
import { TbFilterSearch } from "react-icons/tb";
import QueryFilterSearch from "./QueryFilterSearch/QueryFilterSearch";
import { GetAllAdminqueries } from "../../apis/AdminApis";
import AdminQueryListCard from "./AdminQueryListCard/AdminQueryListCard";
import ExtractDate from "../../utils/ExtractDate";

const AdminQueriesList = () => {
  const [QueryListArr, setQueryList] = useState([]);
  const [isFilterVis, setFilterVis] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await GetAllAdminqueries();
        console.log("tres", resp.data.queries);
        setQueryList(resp.data.queries);
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
      <TbFilterSearch
        className="filteSearchIcon"
        onClick={() => setFilterVis(true)}
      />
      <div className="AllUserListHeadCont">
        <h1 className="AllUserListHead">All Queries</h1>
        <div className="searchByEmailCont">
          <input
            type="text"
            className="AlluserListSearchBar"
            placeholder="Search by email"
          />
          {/* <IoMdSearch className="searchIcon" /> */}
        </div>
      </div>
      <div className="userlistCont">
        <div className="userListTableHead">
          <p>Name</p>
          <p>Email</p>
          <p>Query Date</p>
          <p>Question Asked</p>
        </div>
        {QueryListArr.length > 0
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
