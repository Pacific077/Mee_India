import express from "express";
import {
  RegisterUser,
  LoginUser,
  Logout,
  UpdateProfile,
  getUserProfile,
  LoginUserMobile,
  SendQueryToAdmin,
  Dropcollection,
} from "../Controllers/UserController.js";
import IsAuthenticated from "../Middleware/isAuthenticated.js";
import {
  UserCredentialValidator,
  UserLoginValidator,
} from "../Validators/UserCredentialValidator.js";
// import storage from '../Config/Cloudinary.js';
// import multer from 'multer';
// import increaseRegistrationCountMiddleware from '../Middleware/IncreaseregistrationCount.js';

const UserRoute = express.Router();
// const upload = multer({storage});

UserRoute.post("/register", UserCredentialValidator, RegisterUser);
UserRoute.post("/login", UserLoginValidator, LoginUser);
UserRoute.post("/loginMobile", UserLoginValidator, LoginUserMobile);
UserRoute.post("/logout", IsAuthenticated, Logout);
UserRoute.post("/editProfile", IsAuthenticated, UpdateProfile);
// UserRoute.put("/profile-photo-upload" , IsAuthenticated ,upload.array("imgs",10) ,ProfilpicUpload);
UserRoute.get("/getMyProfile", IsAuthenticated, getUserProfile);
UserRoute.post("/sendqueryAdmin", IsAuthenticated, SendQueryToAdmin);

UserRoute.delete("/dropCollection", Dropcollection);

export default UserRoute;
