import express from 'express';
import SignupValidator from '../Validators/SignupValidator.js';
import LoginValidator from '../Validators/LoginValidator.js';
import {RegisterUser,LoginUser, Logout, UpdateProfile} from '../Controllers/UserController.js'
import IsAuthenticated from '../Middleware/isAuthenticated.js';

const UserRoute = express.Router();

UserRoute.post('/register',SignupValidator,RegisterUser);
UserRoute.post('/login',LoginValidator,LoginUser);
UserRoute.post('/logout',IsAuthenticated,Logout);
UserRoute.post('/update',IsAuthenticated,UpdateProfile);

export default UserRoute;