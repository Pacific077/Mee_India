import express from "express"
import { CreateAdmin, GetAllBusinessList, GetAllListUsers, GetPastSevenDaysRegitraionCount } from "../Controllers/AdminControllor.js"
import Admin from "../Models/AdminModel.js"

const AdminRoute = express.Router()

AdminRoute.get("/userList",GetAllListUsers)
AdminRoute.get("/businessList",GetAllBusinessList)
AdminRoute.post("/create",CreateAdmin)
AdminRoute.get("/last-7-days",GetPastSevenDaysRegitraionCount)


export default AdminRoute