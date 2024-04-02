import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { startSession } from "mongoose";
import Admin from "../Models/AdminModel.js";
import mongoose from "mongoose";
import Enquiry from "../Models/EnquiryModel.js";

//test sessions
//del agterwards
const testSessions = async (req, res) => {
  const session = await startSession();
  session.startTransaction();
  // console.log(session);
  const users = await Admin.findOne().session(session);
  // console.log("temp",users)
  users.totaluserCount += 20;
  await users.save({ session });
  await session.abortTransaction();
  // await session.commitTransaction();
  session.endSession();
  res.status(200).json({
    message: "kya ji",
    users,
  });
};
//drop a collection
const Dropcollection = async (req, res) => {
  await Enquiry.collection.drop();
  // await mongoose.connection.db.dropCollection('Enquiry');
  res.status(200).json({
    message: "Collection 'enquiries' dropped successfully.",
  });
};
//send query to admin
const SendQueryToAdmin = async (req, res) => {
  const session = await startSession();
  session.startTransaction();
  try {
    const { question, UserId, contact } = req.body; ///
    const newEnquiry = await Enquiry.create([{ question, SenderId: UserId, contact }], {
      session,
    });
    const admin = await Admin.findOne().session(session);
    admin.enquiry.push(newEnquiry[0]._id);
    // console.log("newEnquiry",newEnquiry[0]._id);
    await admin.save({ session });

    await session.commitTransaction();
    session.endSession();
    res.status(200).json({ message: "enquiry sent to admin successfully" });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    res.status(500).json({ message: error.message });
  }
};

//register user
const RegisterUser = async (req, res) => {
  const session = await startSession();
  session.startTransaction();
  try {
    // console.log("reqbody", req.body);
    const errs = validationResult(req);

    if (!errs.isEmpty()) {
      let arr = [];
      errs.array().forEach((error) => {
        arr.push(error.msg);
      });
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        message: "Something went wrong",
        err: arr,
      });
    }

    const { name, email, password } = req.body;

    const user = await User.findOne({ email }).session(session);
    if (user) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        message: "Email is already registered!",
        err: ["Email is already registered!"],
      });
    }
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    // console.log("i mahere", name, email, password);

    const newUser = await User.create([{ name, email, password: hashedPass }], {
      session,
    });

    //admin part
    const admin = await Admin.findOne().session(session);
    if (admin) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayRecordIndex = admin.dailyUserRegistrationCounts.findIndex(
        (record) => record.date.getTime() === today.getTime()
      );
      if (todayRecordIndex !== -1) {
        admin.dailyUserRegistrationCounts[todayRecordIndex].count++;
      } else {
        admin.dailyUserRegistrationCounts.push({ date: today, count: 1 });
      }
      admin.totaluserCount += 1;
      
      await admin.save({ session });
    }
    // throw new Error("mera error")
    await session.commitTransaction();
    session.endSession();
    res.status(200).json({
      success: true,
      message: "User Registered",
      data: newUser,
    });
  } catch (error) {
    // console.log("Err", error);
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({
      message: error.message,
    });
  }
};

//login user
const LoginUser = async (req, res) => {
  try {
    const errs = validationResult(req);
    if (!errs.isEmpty()) {
      let arr = [];
      errs.array().forEach((error) => {
        arr.push(error.msg);
      });
      return res.status(400).json({
        message: "Something went wrong",
        err: arr,
      });
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "User not registered!",
      });
    }
    //check valid password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password!",
      });
    }
    //genarate jwt
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    //send token to cookie (http only:deny user to acces cookie from client side : it can only be accesed via http)
    res.cookie("token", token, {
      httpOnly: false, //setting false se that i can acees cookie from frontend
      maxAge: 24 * 60 * 60 * 1000,
    });
    
    
    //send the response
    res.status(200).json({
      status: "Success",
      message: "Logged in Successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const LoginUserMobile = async (req, res) => {
  try {
    const errs = validationResult(req);
    if (!errs.isEmpty()) {
      let arr = [];
      errs.array().forEach((error) => {
        arr.push(error.msg);
      });
      return res.status(400).json({
        message: "Something went wrong",
        err: arr,
      });
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "User not registered!",
      });
    }
    //check valid password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password!",
      });
    }
    //genarate jwt
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    //send the response
    res.status(200).json({
      token,
      status: "Success",
      message: "Logged in Successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const Logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      message: "Logged out!!",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const UpdateProfile = async (req, res) => {
  try {
    const errs = validationResult(req);
    if (!errs.isEmpty()) {
      let arr = [];
      errs.array().forEach((error) => {
        arr.push(error.msg);
      });
      return res.status(400).json({
        message: "Something went wrong",
        err: arr,
      });
    }
    console.log(req.body);
    const { _id, newName, newPic } = req.body.data;

    console.log(_id);
    const updateObject = {};
    if (newName) updateObject.name = newName;
    if (newPic) updateObject.profileImage = newPic;

    const user = await User.findByIdAndUpdate(_id, updateObject, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Save the updated user
    // Send the response
    res.status(200).json({
      status: "Success",
      message: "Profile updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// const ProfilpicUpload = async(req,res)=>{
//     console.log("bebejfmdnf")
//     console.log(req.files);
//     try {
//       if(!req.file){
//         return res.status(400).json({
//           msg:"no file found"
//         })
//       }
//       //find user to be updated
//       const UserId = req.user._id;
//       const userFound = await User.findById(UserId);
//       if (!userFound) {
//         return res.status(400).json({
//           err:"User not found"
//         })
//       }
//       console.log("req.file",req.file)
//     //   const updateduser = await User.findByIdAndUpdate(UserId, {
//     //     profileImage: req.file.path,
//     //   });
//       res.status(200).json("Profile Pic Updated")
//     } catch (Er) {
//       res.status(400).json({
//         err:Er
//       })
//     }
// }

const getUserProfile = async (req, res) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id).populate("ownedBussinesses");
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export {
  RegisterUser,
  LoginUser,
  Logout,
  UpdateProfile,
  getUserProfile,
  LoginUserMobile,
  testSessions,
  SendQueryToAdmin,
  Dropcollection,
};
