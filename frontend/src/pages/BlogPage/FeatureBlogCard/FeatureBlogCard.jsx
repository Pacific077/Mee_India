import React from "react";
import ClipSentence from "../../../utils/ClipSentence";
import { useNavigate } from "react-router-dom";

const FeatureBlogCard = ({title,id}) => {
    const navigate = useNavigate()
  return (
    <div className="featureBlogItem">
      <h3 className="featureBlogHead" onClick={()=>navigate(`/blogs/detail/${id}`)}>
        {title?ClipSentence(title,8):""}...
      </h3>
      <div className="featureblogNameAndDate">
        <p className="featureblogname">Jaluddin akbar</p>
        <p className="featureblogDate"> 15 jan 1672</p>
      </div>
    </div>
  );
};

export default FeatureBlogCard;
