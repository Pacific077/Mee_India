import express from 'express';
import {RegisterUser,LoginUser, Logout, UpdateProfile} from '../Controllers/UserController.js'
import IsAuthenticated from '../Middleware/isAuthenticated.js';
import UserCredentialValidator from '../Validators/UserCredentialValidator.js';

const UserRoute = express.Router();

UserRoute.post('/register',UserCredentialValidator,RegisterUser);
UserRoute.post('/login',UserCredentialValidator,LoginUser);
UserRoute.post('/logout',IsAuthenticated,Logout);
UserRoute.post('/update',IsAuthenticated,UserCredentialValidator,UpdateProfile);

export default UserRoute;