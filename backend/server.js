import express from "express";
import ConnectDb from "./Config/db.js";
import dotenv from "dotenv";
import UserRoute from "./Routes/UserRoute.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import BussinessRoute from "./Routes/BussinessRoute.js";
import AdminRoute from "./Routes/AdminRoutes.js";
import  Razorpay  from "razorpay"
import PaymentRoutes from "./Routes/PaymentRoutes.js";
import BlogRoutes from "./Routes/BlogRoutes.js";



// import path from 'path'
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
const app = express();

//configurations
dotenv.config();
ConnectDb();

export const instance = new Razorpay({
  key_id: process.env.RAZOR_PAY_API_KEY,
  key_secret: process.env.RAZOR_PAY_API_SECRET,
});
//middlewares
// app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
// app.use(cors(corsOptions));
app.use(cors(corsOptions));

//routes
app.use("/api/v1/user", UserRoute);
app.use("/api/v1/bussiness",BussinessRoute);
app.use("/api/v1/admin",AdminRoute);
app.use("/api/v1/payments",PaymentRoutes);
app.use("/api/v1/blogs",BlogRoutes)
//deploymemt
//-------------------------------------------------------------------------
// const __dirname = dirname(fileURLToPath(import.meta.url));
// const buildPath = path.join(__dirname, 'frontend', 'build');

// console.log("bpth",buildPath)
// app.use(express.static(buildPath));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(buildPath, 'index.html'));
// });

//-------------------------------------------------------------------------
const port = process.env.PORT || 4500;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
//change cors before hosting