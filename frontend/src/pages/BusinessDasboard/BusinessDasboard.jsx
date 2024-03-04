import React from "react";
import "./BusinessDasboard.css";
import MyBusinessCard from "../../components/Card/MyBusinessCard/MyBusinessCard";
const BusinessDasboard = ({ businessList }) => {
  return (
    <div className="BusinessDasboard">
      <div className="MyBusiness">
        <h1 className="businessDashboardHead">My Business</h1>
        <div className="MyBusineesCont">
          {console.log("list",businessList)}
          {businessList&&businessList.map((business, key) => {
            return (
              <MyBusinessCard
                key={key}
                state={business.state}
                id={business._id}
                title={business.title}
                district={business.district}
                
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessDasboard;
