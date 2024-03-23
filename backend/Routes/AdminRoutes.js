import express from "express"
import { CreateAdmin, GetAllBusinessList, GetAllCounts, GetAllListUsers, GetPastSevenDaysRegitraionCount, getBusinessById, getUserByID } from "../Controllers/AdminControllor.js"
import Admin from "../Models/AdminModel.js"

const AdminRoute = express.Router()

AdminRoute.get("/userList",GetAllListUsers)
AdminRoute.get("/businessList",GetAllBusinessList)
AdminRoute.post("/create",CreateAdmin)
AdminRoute.get("/last-7-days",GetPastSevenDaysRegitraionCount)
AdminRoute.get("/getcounts",GetAllCounts)
AdminRoute.post("/getuserById",getUserByID)
AdminRoute.post("/getShopById",getBusinessById)


export default AdminRoute