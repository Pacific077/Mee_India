import express from 'express';
import { FindBussiness, FreeList } from "../Controllers/BussinessController.js";
import IsAuthenticated from "../Middleware/isAuthenticated.js";
import BussinessValidator from "../Validators/BussinessValidator.js";


const BussinessRoute = express.Router();

BussinessRoute.post('/freelist',IsAuthenticated,BussinessValidator,FreeList);
BussinessRoute.get('/findBussiness',FindBussiness);

export default BussinessRoute;