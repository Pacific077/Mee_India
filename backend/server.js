import express from "express";
import ConnectDb from "./Config/db.js";
import dotenv from "dotenv";
import UserRoute from "./Routes/UserRoute.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import BussinessRoute from "./Routes/BussinessRoute.js";
// import path from 'path'
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
const app = express();

//configurations
dotenv.config();
ConnectDb();

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
app.use(cors());

//routes
app.use("/api/v1/user", UserRoute);
app.use("/api/v1/bussiness",BussinessRoute);
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