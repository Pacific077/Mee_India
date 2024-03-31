import React, { useEffect, useState } from 'react'
import { GetTop20BLogs } from '../../apis/BlogApis';
import AdminBlogListCard from './AdminBlogListCard/AdminBlogListCard';

const AdminBlogList = () => {
    const [bloglist, setBlogList] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const resp = await GetTop20BLogs();
          setBlogList(resp.data.top20Blogs);
          // console.log("res", resp.data.top20Blogs);
        } catch (error) {
          console.log("Err", error);
        }
      };
      fetchData();
    }, []);
  return (
    <div className="UserListpage">
     
      {/* <TbFilterSearch
        className="filteSearchIcon"
        onClick={() => setFilterVis(true)}
      /> */}
      <div className="AllUserListHeadCont">
        <h1 className="AllUserListHead">All Queries</h1>
        <div className="searchByEmailCont">
  
        </div>
      </div>
      <div className="userlistCont">
        <div className="userListTableHead">
          <p>Title</p>
          <p>Description</p>
          <p>Query Date</p>
        </div>
        {bloglist && bloglist.length > 0
          ? bloglist.map((ele, index) => {
              return (
                <AdminBlogListCard
                  key={index}
                  title={ele.title}
                  desc={ele.description}
                  date={ele.createdAt}
                  id={ele._id}
                />
              );
            })
          : "No data Found"}
      </div>
    </div>
  )
}

export default AdminBlogList