import React, { useEffect, useState } from "react";
import {
  AddtoFeatureBlog,
  DelBlogbyId,
  GetBlogbyId,
  RemoveFromFeatureBlog,
} from "../../../apis/BlogApis";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./AdminBlogSpecific.css";
const AdminBlogSpecific = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const [blog, setBlog] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await GetBlogbyId({ id: blogId });
        if (resp.status === 200) {
          setBlog(resp.data.blog);
        }
      } catch (error) {
        toast.error("something went wrong");
      }
    };
    fetchData();
  }, []);

  const HandleDelClick = async () => {
    try {
      const resp = await DelBlogbyId({ id: blogId });
      if (resp.status === 200) {
        toast.success("blog deleted");
        navigate("/admin/blogList");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  const HandlefeatureAddClick = async () => {
    try {
      const resp = await AddtoFeatureBlog({ blogId });
      if (resp.status === 200) {
        toast.success("Added");
      }
    } catch (error) {
      // console.log("Err",error);
      toast.error(error.response.data.message);
    }
  };
  const HandlefeatureRemoveClick = async()=>{
    try {
      const resp = await RemoveFromFeatureBlog({ blogId });
      if (resp.status === 200) {
        toast.success("Removed");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="userlistSpecificPage">
      <h1 className="userspecifcDetailHead">Query Details </h1>
      <div className="UserSpecificCard">
        <div className="BlogSpecificDetails">
          <h1>Title :</h1>

          <p>{blog ? blog.title : "-"}</p>
        </div>
        <div className="BlogSpecificDetails">
          <h1>Description:</h1>
          <p>{blog ? blog.description : "-"}</p>

          {/* <p>Last Updated :{user?ExtractDate(user.updatedAt):"-"}</p> */}
          {/* <p>ID :{query?query._id:"-"}</p>     */}
        </div>
        <div className="UserSpecificDetails">
          {/* <p>MemeberShip Expiry Date : 12/12/12</p>
            <p>Shop Owned : {user?user.ownedBussinesses.length:"-"}</p> */}
        </div>
      </div>
      <div className="UserspecificdetailsBtnCont">
        {/* <button onClick={()=>navigate(`/admin/userList/specific/edit/${userId}`)} className='AdminEditUsersBtn'>Edit Details</button> */}
        <button className="MarkAsFeaturebtn" onClick={HandlefeatureAddClick}>
          Mark as Featured
        </button>
        <button className="MarkAsFeaturebtn" onClick={HandlefeatureRemoveClick}>
          Remove from Featured
        </button>
        <button className="adminDeluserBtn" onClick={HandleDelClick}>
          Delete Blog
        </button>
      </div>
    </div>
  );
};

export default AdminBlogSpecific;
