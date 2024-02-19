import express from 'express';
import SignupValidator from '../Validators/SignupValidator.js';
import LoginValidator from '../Validators/LoginValidator.js';
import {RegisterUser,LoginUser} from '../Controllers/UserController.js'

const UserRoute = express.Router();

UserRoute.post('/register',SignupValidator,RegisterUser);
UserRoute.post('/login',LoginValidator,LoginUser);

export default UserRoute;