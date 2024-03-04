import express from 'express';
import { FindBussiness, FreeList } from "../Controllers/BussinessController.js";
import IsAuthenticated from "../Middleware/isAuthenticated.js";
import BussinessValidator from "../Validators/BussinessValidator.js";
// import storage from "../Config/Cloudinary.js";
// import multer from "multer";

const BussinessRoute = express.Router();

BussinessRoute.post('/freelist',IsAuthenticated,BussinessValidator,FreeList);
BussinessRoute.post('/findBussiness',FindBussiness);
BussinessRoute.post('/findbyId',findByID);

export default BussinessRoute;
