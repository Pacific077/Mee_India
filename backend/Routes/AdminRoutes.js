import express from "express";
import {
  CreateAdmin,
  Deleteuser,
  EditShopDetails,
  EditUserDetails,
  GetAllBusinessList,
  GetAllCounts,
  GetAllListUsers,
  GetPastSevenDaysRegitraionCount,
  getBusinessById,
  getUserByID,
  searchUserByemail,
} from "../Controllers/AdminControllor.js";

const AdminRoute = express.Router();

AdminRoute.get("/userList", GetAllListUsers);
AdminRoute.get("/businessList", GetAllBusinessList);
AdminRoute.post("/create", CreateAdmin);
AdminRoute.get("/last-7-days", GetPastSevenDaysRegitraionCount);
AdminRoute.get("/getcounts", GetAllCounts);
AdminRoute.post("/getuserById", getUserByID);
AdminRoute.post("/getShopById", getBusinessById);
AdminRoute.post("/searchByEmail", searchUserByemail);
AdminRoute.put("/updateuser/:id", EditUserDetails);
AdminRoute.delete("/deleteUser/:id", Deleteuser);
AdminRoute.put("/updateShop/:id", EditShopDetails);

export default AdminRoute;
