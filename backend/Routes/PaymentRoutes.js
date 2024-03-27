import express from "express"
import { CheckOut, GetRazorPayKey, PaymentVerfication } from "../Controllers/PaymentControllor.js"
import IsAuthenticated from "../Middleware/isAuthenticated.js"

const PaymentRoutes = express.Router()

PaymentRoutes.post('/checkout',CheckOut)
PaymentRoutes.post('/verification/:membership/:months',IsAuthenticated,PaymentVerfication)
PaymentRoutes.get('/getKey',GetRazorPayKey)

export default PaymentRoutes