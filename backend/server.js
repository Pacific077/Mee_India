import express from "express";
import ConnectDb from "./Config/db.js";
import dotenv from "dotenv";
import UserRoute from "./Routes/UserRoute.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import BussinessRoute from "./Routes/BussinessRoute.js";
import AdminRoute from "./Routes/AdminRoutes.js";
import Razorpay from "razorpay";
import PaymentRoutes from "./Routes/PaymentRoutes.js";
import BlogRoutes from "./Routes/BlogRoutes.js";
import cron from "node-cron";
import User from "./Models/UserModel.js";
import Bussiness from "./Models/BussinessModel.js";

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
app.use("/api/v1/bussiness", BussinessRoute);
app.use("/api/v1/admin", AdminRoute);
app.use("/api/v1/payments", PaymentRoutes);
app.use("/api/v1/blogs", BlogRoutes);

//corns
//for updating user membership 
//runs everyday at midnight
cron.schedule("0 0 * * * ", async () => {
  try {
    const today = new Date();
    const updateObject = {
      Membership: "Free List",
      SearchVisibility: 0,
      verifiedSeal: false,
      trustStamp: false,
      isKeywordSearchEnable: false,
    };
    const filter = { membershipExpiryDate: { $lte: today } };
    const result = await User.updateMany(filter, updateObject);    
    console.log(`${result.modifiedCount} documents updated.`);
    console.log("Membership updated successfully for expired users.");
  } catch (error) {
    console.error("Error occurred while updating membership:", error);
  }
});
//updating keywords
cron.schedule("0 0 * * *", async () => {
  try {
    const today = new Date();
    const filter = { membershipExpiryDate: { $lte: today } };
    const usersToUpdate = await User.find(filter);
    for (const user of usersToUpdate) {
      await Bussiness.updateMany(
        { owner: user._id },
        { $set: { keywords: [] } }
      );
    }

    console.log("Keywords array emptied");
  } catch (error) {
    console.error("Error occurred while emptying keywords array:", error);
  }
});


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
