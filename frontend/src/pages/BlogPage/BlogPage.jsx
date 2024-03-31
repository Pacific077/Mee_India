import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard/BlogCard";
import blogimg from "../../assets/blogimg.jpg";
import { toast } from "react-toastify";
import "./BlogPage.css";
import { GetAllFeaturedBlogs, GetTop20BLogs } from "../../apis/BlogApis";
import ClipSentence from "../../utils/ClipSentence";
import ExtractDate from "../../utils/ExtractDate";
import FeatureBlogCard from "./FeatureBlogCard/FeatureBlogCard";
import { useNavigate } from "react-router-dom";
const BlogPage = () => {
  const [bloglist, setBlogList] = useState([]);
  const [featuredbloglist, setfeaturedBlogList] = useState([]);
  const navigate= useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await GetTop20BLogs();
        setBlogList(resp.data.top20Blogs);
        const resp1 = await GetAllFeaturedBlogs();
        setfeaturedBlogList(resp1.data);
        // console.log("res feat", resp1);
      } catch (error) {
        toast.error("something went wrong");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="BlogPage">
      <h1 className="blogPageHead">Recent Blogs</h1>
      <div className="blogPageBanner">
        <div className="blogBannerLeft">
          <div className="TopratedBlogHeadAndImage">
            <div className="TopRatedBlogHeadFix">
              <h1>Blog of the day</h1>
              <h3>
                Discover today's premier blog pick, featuring insightful content
                and engaging topics. Stay informed and inspired with our daily
                selection.
              </h3>
            </div>
            <div className="TopRatedBlogImageFix">
              <img src={blogimg} alt="" />
            </div>
          </div>
          <div className="topBlogHeadAndDesc">
            <h1 className="TopBlogHeadDynamic">
              {bloglist[0] ? ClipSentence(bloglist[0].title, 7) : ""}...
            </h1>
            <p className="TopBlogdescDynamic" onClick={()=>navigate(`/blogs/detail/${bloglist[0]._id}`)}>
              {bloglist[0] ? ClipSentence(bloglist[0].description, 35) : ""}
              ......
            </p>
            <div className="TopBlogNameDateDynamic">
              <p>Page Admin</p>
              <p>{bloglist[0]?ExtractDate(bloglist[0].createdAt):"-"}</p>
            </div>
          </div>
        </div>
        <div className="blogBannerRight">
          <h1 className="featuredBlogsHead">Featured Blogs</h1>
          <div className="featuredBlogsCont">
            {featuredbloglist.map((ele,ind) => {
              return (
                <FeatureBlogCard key={ind} id={ele._id} title={ele.title}/>
              );
            })}
          </div>
        </div>
      </div>
      <div className="blogContainers">
        {bloglist.map((ele, ind) => (
          <BlogCard
            key={ind}
            id={ele._id}
            title={ele.title}
            desc={ele.description}
            img={ele.BlogImage}
            date={ele.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
