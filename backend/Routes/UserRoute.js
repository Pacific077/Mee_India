import express from 'express';
import {RegisterUser,LoginUser, Logout, UpdateProfile, ProfilpicUpload} from '../Controllers/UserController.js'
import IsAuthenticated from '../Middleware/isAuthenticated.js';
import { UserCredentialValidator, UserLoginValidator } from '../Validators/UserCredentialValidator.js';
import storage from '../Config/Cloudinary.js';
import multer from 'multer';

const UserRoute = express.Router();
const upload = multer({storage});

UserRoute.post('/register',UserCredentialValidator,RegisterUser);
UserRoute.post('/login',UserLoginValidator,LoginUser);
UserRoute.post('/logout',IsAuthenticated,Logout);
UserRoute.post('/update',IsAuthenticated,UserCredentialValidator,UpdateProfile);
UserRoute.put("/profile-photo-upload" , IsAuthenticated ,upload.single('profile') ,ProfilpicUpload);

export default UserRoute;