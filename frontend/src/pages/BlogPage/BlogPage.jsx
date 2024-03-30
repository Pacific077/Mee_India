import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard/BlogCard";
import blogimg from "../../assets/blogimg.jpg";
import "./BlogPage.css";
import { GetTop20BLogs } from "../../apis/BlogApis";
const BlogPage = () => {
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
    <div className="BlogPage">
      <h1 className="blogPageHead">Recent Blogs</h1>
      <div className="blogPageBanner">
        <div className="blogBannerLeft">
          <div className="TopratedBlogHeadAndImage">
            <div className="TopRatedBlogHeadFix">
              <h1>Daily Dose: Premier Blog Pick of the day</h1>
              <h3>Discover handpicked gems in our daily showcase.</h3>
            </div>
            <div className="TopRatedBlogImageFix">
              <img src={blogimg} alt="" />
            </div>
          </div>
          <div className="topBlogHeadAndDesc">
            <h1 className="TopBlogHeadDynamic">
              Lorem ipsum sit amet consectetur adipisicing elit. Officiis, iste.
            </h1>
            <p className="TopBlogdescDynamic">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              aut laboriosam officia natus ex expedita.
            </p>
            <div className="TopBlogNameDateDynamic">
              <p>peter ALber</p>
              <p>24 Jan 1293</p>
            </div>
          </div>
        </div>
        <div className="blogBannerRight">
          <h1 className="featuredBlogsHead">Featured Blogs</h1>
          <div className="featuredBlogsCont">
            <div className="featureBlogItem">
              <h3 className="featureBlogHead">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </h3>
              <div className="featureblogNameAndDate">
                <p className="featureblogname">Jaluddin akbar</p>
                <p className="featureblogDate"> 15 jan 1672</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blogContainers">
        {bloglist.map((ele, ind) => (
          <BlogCard
            key={ind}
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
