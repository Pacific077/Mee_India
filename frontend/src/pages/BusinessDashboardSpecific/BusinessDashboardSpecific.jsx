import { CiLocationOn } from "react-icons/ci";
import t1 from "../../assets/t1.png";
import "./BusinessDashboardSpecific.css";
import BussinessDashIconsCard from "../../components/Card/BussinessDashIconsCard/BussinessDashIconsCard";
import CompleteBusinessDetails from "../../components/CompleteBusinessDetails/CompleteBusinessDetails";
import BusinessDashboardSpecificArr from "./BusinessDashbordSpecificArr";
import { useEffect, useState } from "react";
import { findByID } from "../../apis/BusinessApi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const BusinessDashboardSpecific = () => {
  const [business,setBusiness] = useState(false)
  const {BusinessId} =useParams()
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const resp = await findByID({bussinessId:BusinessId})
        console.log("Resp",resp);
        setBusiness(resp.data.businessDetail);
        
      } catch (error) {
        toast.error("something Went Wrong")        
      }

    };
    fetchData();
  },[])
  return (
    <div className="BusinessDashboardSpecific">
      <div className="BusinessDashSpecBanner">
        <div className="BusinessDashSpecBannerLeft">
          <h1 className="BusinessDashSpecBannerHead">Promote Your Business</h1>
          <h1 className="BusinessDashSpecBannerHead2">
            & Rank ahead Your Competition
          </h1>
          <button className="btnPrim btn-lg">Advertise Now</button>
        </div>
        <div className="BusinessDashSpecBannerRight">
          <img src={t1} alt="" />
        </div>
      </div>
      <div className="BusinessNameAndLocation">
        <h1>{business?business.title:"none"}</h1>
        <p><CiLocationOn/>{business?business.state:"none"}, {business?business.district:"none"}</p>
      </div>

      <div className="BusinessDashSpecDetails">
        <p className="BusinessDashSpecDetailsHead">Quick Link</p>
        <div className="BusinessDashSpecDetailsIconCont">
          {BusinessDashboardSpecificArr.map((ele, ind) => {
            return (
              <BussinessDashIconsCard
                key={ind}
                tag={ele.tag}
                col={ele.color}
                Icon={ele.icon}
                loc={ele.locate}
              />
            );
          })}
        </div>
      </div>
      <CompleteBusinessDetails />
    </div>
  );
};

export default BusinessDashboardSpecific;
