import express from 'express';
import { EditBusiness, FindBussiness, FindBussinessByText, FreeList, GetAllBusinessReview, enquirySubmit, findByID, reviewSubmit } from "../Controllers/BussinessController.js";
import IsAuthenticated from "../Middleware/isAuthenticated.js";
import BussinessValidator from "../Validators/BussinessValidator.js";
import increaseBusinessRegistrationCount from '../Middleware/IncreaseBusinessRegistrationCount.js';
// import storage from "../Config/Cloudinary.js";
// import multer from "multer";

const BussinessRoute = express.Router();

BussinessRoute.post('/freelist',IsAuthenticated,BussinessValidator,FreeList,increaseBusinessRegistrationCount);
BussinessRoute.post('/findBussiness',FindBussiness);
BussinessRoute.post('/findBussinessbyText',FindBussinessByText);
BussinessRoute.post('/findbyId',findByID);
BussinessRoute.post('/EditBusiness',EditBusiness);
BussinessRoute.put('/reviewSubmit',IsAuthenticated,reviewSubmit);
BussinessRoute.put('/enquirySubmit',IsAuthenticated,enquirySubmit);
BussinessRoute.post('/BusinessEnquiries',GetAllBusinessReview);

export default BussinessRoute;
