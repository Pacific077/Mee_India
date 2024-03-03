import express from "express";
import { FindBussiness, FreeList } from "../Controllers/BussinessController.js";
import IsAuthenticated from "../Middleware/isAuthenticated.js";
import BussinessValidator from "../Validators/BussinessValidator.js";
import storage from "../Config/Cloudinary.js";
import multer from "multer";

const BussinessRoute = express.Router();
const upload = multer({ storage });
BussinessRoute.post(
  "/freelist",
  IsAuthenticated,
  FreeList
);
BussinessRoute.get("/findBussiness", FindBussiness);

export default BussinessRoute;
