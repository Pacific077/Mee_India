import React, { useEffect, useState } from "react";
import { getShopById } from "../../apis/AdminApis";
import { useParams } from "react-router-dom";
import ExtractDate from "../../utils/ExtractDate";
import "./ShopListsspecific.css";
const ShopListSpecific = () => {
  const [shop, setshop] = useState();
  const { shopId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getShopById({ id: shopId });
        console.log("responde", resp.data.business);
        setshop(resp.data.business);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const FormatTimingArr = (timingArr) => {
    const formattedTimeRanges = [];

    for (let i = 0; i < timingArr.length; i += 2) {
      const startTime = timingArr[i];
      const endTime = timingArr[i + 1];

      formattedTimeRanges.push(`${startTime} to ${endTime}`);
    }

    const formattedOutput = formattedTimeRanges.join(", ");
    return formattedOutput;
  };
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const displayedDays = shop
    ? shop.openDays
        .map((isOpen, index) => (isOpen === "true" ? daysOfWeek[index] : ""))
        .filter((day) => day !== "")
    : [];

  return (
    <div className="userlistSpecificPage">
      <h1 className="userspecifcDetailHead">Shop Details </h1>
      <div className="UserSpecificCard">
        <div className="UserSpecificDetails">
          <p>Name : {shop ? shop.title : "-"}</p>
          <p>Email : {shop ? shop.bussinessMail : "-"}</p>
          <p>Contact :{shop ? shop.bussinessContact : "-"}</p>
        </div>
        <div className="UserSpecificDetails">
          <p>Main Category : {shop ? shop.mainCategory : "-"}</p>
          <p>Rating Count: {shop ? shop.ratingCount : "-"}</p>
          <p>Pincode :{shop ? shop.pinCode : "-"}</p>
        </div>

        <div className="UserSpecificDetails">
          <p>Register Date:{shop ? ExtractDate(shop.createdAt) : "-"} </p>
          <p>Last Updated :{shop ? ExtractDate(shop.updatedAt) : "-"}</p>
          <p>Longitude :{shop ? shop.location.coordinates[1] : "-"}</p>
        </div>
        <div className="UserSpecificDetails">
          <p>State : {shop ? shop.state : "-"}</p>
          <p>District : {shop ? shop.district : "-"}</p>
          <p>Latitude : {shop ? shop.location.coordinates[0] : "-"} </p>
        </div>
      </div>
        <div className="ShopSpecificDetails">
          <p><span className="boldHead">Address :</span>{shop ? shop.address : "-"}</p>
        </div>
      <div className="ShopSpecificDetails">
        <p>
          <span className="boldHead">Sub Categories :</span>{" "}
          {shop ? shop.subCategory.join(",") : "-"}
        </p>
      </div>
      <div className="ShopSpecificDetails">
        <p>
          <span className="boldHead">Open Days :</span>{" "}
          {displayedDays.join(", ")}
        </p>
      </div>
      <div className="ShopSpecificDetails">
        <p>
          <span className="boldHead">Open Timings :</span>{" "}
          {shop ? FormatTimingArr(shop.timingArr)  : "-"}
        </p>
      </div>
    </div>
  );
};

export default ShopListSpecific;
