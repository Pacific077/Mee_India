import express from "express";
import {

  CreateAdminAccount,
  DelQueryById,
  DeleteShop,
  Deleteuser,
  EditShopDetails,
  EditUserDetails,
  FilterPaymentSearch,
  // FilterQuerySearch,
  FilterShopSearch,
  FilterUserSearch,
  GetAllAdminQueris,
  GetAllBusinessList,
  GetAllCounts,
  GetAllListUsers,
  GetAllPaymentList,
  GetLastTenPaymentHistory,
  GetPastSevenDaysRegitraionCount,
  GetPaymentById,
  GetQueryByID,
  freeListByAdmin,
  getBusinessById,
  getMembershipCounts,
  getUserByID,
  searchUserByemail,
} from "../Controllers/AdminControllor.js";
import { UserCredentialValidator } from "../Validators/UserCredentialValidator.js";

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
AdminRoute.get("/Paymentsearch", FilterPaymentSearch);
// AdminRoute.get("/Querysearch", FilterQuerySearch);
AdminRoute.post("/createNewAdmin", UserCredentialValidator,CreateAdminAccount);
AdminRoute.get("/getAllQueries", GetAllAdminQueris);
AdminRoute.post("/getQuerieByID", GetQueryByID);
AdminRoute.get("/getMembershipCount", getMembershipCounts);
AdminRoute.post("/delQueryById", DelQueryById);
AdminRoute.get("/LastfewPays", GetLastTenPaymentHistory);
AdminRoute.get("/allPayments", GetAllPaymentList);
AdminRoute.post("/paymentById", GetPaymentById);
AdminRoute.post("/freeList", freeListByAdmin);

export default AdminRoute;
