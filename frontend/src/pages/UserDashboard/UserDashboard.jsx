import React, { useEffect, useState } from "react";
import "../UserDashboard/UserDashboard.css";
import { FaCheckCircle } from "react-icons/fa";
import "./UserDashboardCard";
// import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";

// import bikeService from "../../assets/bikeService.jpg";
import UserDashboardCard from "./UserDashboardCard";
import BusinessDasboard from "../BusinessDasboard/BusinessDasboard";
import { EditProfileApi, LogoutApi, ProfileApi } from "../../apis/UserApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ImageToUrl } from "../../utils/ImagetoUrl";
import ReactLoading from "react-loading";
import ExtractDate from "../../utils/ExtractDate";

const UserDashboard = () => {
  const [user, setUser] = useState(false);
  const [businessList, setBusinessList] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPic, setNewPic] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  // const navigate = useNavigate()
  const HandleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    setLoading(true);
    const resp = await ImageToUrl(files);
    const Item = resp[0];
    setLoading(false);
    // console.log("item",Item)
    setNewPic(Item);
  };

  const handleEditFormSubmit = async () => {
    if (newName === "" || newPic === "") {
      toast.warning("All fields are Required!");
      return;
    }

    try {
      const resp = await EditProfileApi({
        _id: user._id,
        newName,
        newPic,
      });
      console.log("Resper", resp);
      toast.success("Profile Updated Successfully!")
      // localStorage.removeItem("userProfile");

      fetchData();
      setIsEditing(false);
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong!");
    }
  };

  const fetchData = async () => {
    try {
      // If user profile data is not found in localStorage, fetch it from the API
      const resp = await ProfileApi();
      console.log("Resp", resp);
      setUser(resp.data.user);
      setBusinessList(resp.data.user.ownedBussinesses);
      setNewPic(resp.data.user.pic);
      setNewName(resp.data.name)
      // Store fetched user profile data in localStorage for future use
      // localStorage.setItem("userProfile", JSON.stringify(resp.data.user));
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const GotoPricing = () => {
    navigate("/pricing-details");
  };
  const handleLogout = async () => {
    try {
      const resp = await LogoutApi();
      if (resp.status === 200) {
        toast.success("Logged Out");
        // localStorage.removeItem("userInfo");
        // localStorage.removeItem("userProfile");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went Wrong");
    }
  };
  return (
    <>
    {user&&<div className="userDashboardMainDiv">
      <div className="userDashUpperDiv">
        <div className="logout" onClick={handleLogout}>
          Logout
        </div>
        <div className="userDashUpperDivProfilePic">
          <img className="UserDashboardImageDisplay" src={user?.profileImage} />
          <div className="UserDashboardInfo">
            <h3 className="userDashboardName">{user ? user.name : "Dummy"}</h3>
            <p>{user ? user.email : "dummy Email"}</p>
          </div>
        </div>
      </div>
      {isEditing && (
        <div className="profileEditForm">
          <div className="bussinessEditLabelandInp">
            <label htmlFor="">New Name</label>
            <input
              type="text"
              onChange={(e) => setNewName(e.target.value)}
              value={newName}
            />
          </div>
          {loading && (
            <div className="Loading" style={{ width: "100%" }}>
              <ReactLoading
                type="spokes"
                color="purple"
                height={120}
                width={120}
              />
            </div>
          )}
          {!loading && (
            <div
              className="BusinessEditCatalougeCont"
              style={{ margin: "4vh" }}
            >
              <div className="AddCatalougeCard">
                <p className="plusSign">+</p>
                <p>Add Photo</p>
                <input
                  type="file"
                  className="BussinessEditCatalougeFile"
                  onChange={HandleFileChange}
                />
              </div>
            </div>
          )}
        </div>
      )}
      <div className="userDashCardcontainer">
        {isEditing ? (
          <UserDashboardCard info={"Submit"} fun={handleEditFormSubmit} />
        ) : (
          <UserDashboardCard
            info={"Edit Profile"}
            fun={() => setIsEditing(true)}
          />
        )}

        <UserDashboardCard info={"Upgrade"} fun={GotoPricing} />
        {/* <UserDashboardCard info={"Get Verified"} fun={UpdateProfilePicture}/> */}
        {/* <UserDashboardCard/>
        <UserDashboardCard/> */}
      </div>
        <div className="userDashboardAcntDetails">
        <h2 className="DashboardAcntDetailsHead">Account Details</h2>
      <div className="userMebershipDetailsAndCard">
        <div className="mebershipDetails">
          <p>Current Membership: <span>{user?user.Membership:""}</span></p>
          <p>Purchased On:<span>{user?ExtractDate(user.membershipPurchaseDate):"-"}</span>  </p>
          <p>Expiry Date: <span>{user?ExtractDate(user.membershipExpiryDate):"-"}</span></p>
        </div>
        <div className="userDashTagDetails">
          <p className="marginTop0">Verified Seal :<span>{user ? (user.verifiedSeal ? <FaCheckCircle className="checkIcon"/> :<ImCross className="CrossIcon"/>
 ) : "-"}</span> </p>
          <p>Trust Stamp :<span>{user ? (user.trustStamp ? <FaCheckCircle className="checkIcon"/> : <ImCross className="CrossIcon"/>
) : "-"}</span> </p>
        </div>
      </div>
      </div>
      <BusinessDasboard businessList={businessList} />
    </div>}
    </>
  );
};

export default UserDashboard;
