import React from "react";
// import img from "../../../assets/bus.jpg";
import {useNavigate} from "react-router-dom"
import "./BlogCard.css";
import ClipSentence from "../../../utils/ClipSentence";
import ExtractDate from "../../../utils/ExtractDate";
const BlogCard = ({title,desc,img,date,id}) => {
  const navigate = useNavigate()
  return (
    <div className="BlogCard">
      <div className="blogCardImg">
        <img src={img} alt="" />
      </div>

      <div className="blogCardDescCont">
      <div className="blogCardHead">
        <h3>
          {ClipSentence(title,4)}...
          
        </h3>
      </div>
      <div className="blogCardDesc">
        <p>
          {ClipSentence(desc,19)}<span onClick={()=>navigate(`/blogs/detail/${id}`)} className="ReadMore" style={{color:"red"}}>...ReadMore</span> 
        </p>
      </div>
      <div className="blogCardNameAndDate">
        <p>Page Admin</p>
        <p>{ExtractDate(date)}</p>
      </div>
      </div>
    </div>
  );
};

export default BlogCard;
