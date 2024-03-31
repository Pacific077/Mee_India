import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import {toast} from "react-toastify"
import img from "../../assets/blogimg.jpg";
import "./DetailedBlogPage.css";
import { GetBlogbyId } from "../../apis/BlogApis";
import ExtractDate from "../../utils/ExtractDate";
const DetailedBogPage = () => {
    const {id} = useParams()
    const [blog,setBlog] = useState('')

    useEffect(()=>{
        const FetchData = async()=>{
            try {
                const resp = await GetBlogbyId({id})
                if(resp.status===200){
                    setBlog(resp.data.blog)
                }
            } catch (error) {
                toast.error("Something Went Wrong")
            }
            // setBlog(resp.)
        };
        FetchData();
    },[])
  return (
    <div className="DetailedBogPage">
      <h1 className="detaileBLogHead">
        {blog?blog.title:""}
      </h1>
      <div className="DetaileBlogWrittenby">
        <p>Written By : Page Admin on {blog?ExtractDate(blog.createdAt):""}</p>
      </div>
      <div className="detailedBlogimg">
        <img src={img} alt="" />
      </div>
      <div className="detailedBlogDesc">
        <p>
          {blog?blog.description:""}
        </p>
      </div>
    </div>
  );
};

export default DetailedBogPage;
