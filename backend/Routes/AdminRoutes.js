import express from "express";
import {

  CreateAdminAccount,
  DeleteShop,
  Deleteuser,
  EditShopDetails,
  EditUserDetails,
  FilterShopSearch,
  FilterUserSearch,
  GetAllBusinessList,
  GetAllCounts,
  GetAllListUsers,
  GetPastSevenDaysRegitraionCount,
  getBusinessById,
  getUserByID,
  searchUserByemail,
} from "../Controllers/AdminControllor.js";
import { UserCredentialValidator } from "../Validators/UserCredentialValidator.js";
import increaseRegistrationCountMiddleware from "../Middleware/IncreaseregistrationCount.js";

const AdminRoute = express.Router();

AdminRoute.get("/userList", GetAllListUsers);
AdminRoute.get("/businessList", GetAllBusinessList);
// AdminRoute.post("/create", CreateAdmin);
AdminRoute.get("/last-7-days", GetPastSevenDaysRegitraionCount);
AdminRoute.get("/getcounts", GetAllCounts);
AdminRoute.post("/getuserById", getUserByID);
AdminRoute.post("/getShopById", getBusinessById);
AdminRoute.post("/searchByEmail", searchUserByemail);
AdminRoute.put("/updateuser/:id", EditUserDetails);
AdminRoute.delete("/deleteUser/:id", Deleteuser);
AdminRoute.put("/updateShop/:id", EditShopDetails);
AdminRoute.delete("/deleteShop/:id", DeleteShop);
AdminRoute.get("/Usersearch", FilterUserSearch);
AdminRoute.get("/Shopsearch", FilterShopSearch);
AdminRoute.post("/createNewAdmin", UserCredentialValidator,CreateAdminAccount,increaseRegistrationCountMiddleware);

export default AdminRoute;
