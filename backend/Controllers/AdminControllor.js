import Admin from "../Models/AdminModel.js";
import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
// import jwt from "jsonwebtoken";
import Bussiness from "../Models/BussinessModel.js";
import Enquiry from "../Models/EnquiryModel.js";
import Payment from "../Models/PaymentModel.js";
import { startSession } from "mongoose";

//not to be used in anymore
// const CreateAdminDB = async (req, res) => {
//   try {
//     const admin = await Admin.create({
//       dailyUserRegistrationCounts: [],
//       dailyBusinessRegistrationCounts: [],
//       totaluserCount: 0,
//       totalBusinessCount: 0,
//     });
//     return res.status(200).json({
//       message: "Admin Created Succesfully",
//       admin,
//     });
//   } catch (error) {
//     res.status(400).json({
//       message: error.message,
//     });
//   }
// };

const GetAllBusinessList = async (req, res) => {
  const business = await Bussiness.find();
  res.status(200).json({
    message: "all list of GetAllBusinessList",
    business,
  });
};
const GetAllListUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    message: "all list of users",
    users,
  });
};
const GetPastSevenDaysRegitraionCount = async (req, res) => {
  try {
    const admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin document not found" });
    }
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const past7DaysRegistrationCounts = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() - i);
      const userCountRecord = admin.dailyUserRegistrationCounts.find(
        (record) => record.date.getTime() === date.getTime()
      );
      const userCount = userCountRecord ? userCountRecord.count : 0;
      const businessCountRecord = admin.dailyBusinessRegistrationCounts.find(
        (record) => record.date.getTime() === date.getTime()
      );
      const businessCount = businessCountRecord ? businessCountRecord.count : 0;
      past7DaysRegistrationCounts.push({
        date: `Day ${i}`,
        userCount,
        businessCount,
      });
    }
    res.status(200).json({
      success: true,
      data: past7DaysRegistrationCounts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const GetAllCounts = async (req, res) => {
  try {
    const admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin document not found" });
    }
    const data = {
      users: admin.totaluserCount,
      shops: admin.totalBusinessCount,
    };
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getUserByID = async (req, res) => {
  const { id } = req.body;
  const user = await User.findById(id);
  res.status(200).json(user);
};
const getBusinessById = async (req, res) => {
  try {
    const { id } = req.body;
    const business = await Bussiness.findById(id);
    if (!business) {
      return res.status(404).json({ message: "No Business Found" });
    }
    res.status(200).json({
      message: "found business",
      business,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const searchUserByemail = async (req, res) => {
  try {
    const { email } = req.body;
    const users = await User.find({ email: email });
    if (users.length === 0) {
      return res.status(201).json({
        message: "no email exists",
      });
    }
    res.status(200).json({
      message: "found",
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const EditUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, contact, Membership } = req.body;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (name) user.name = name;
    if (email) user.email = email;
    if (contact) user.contact = contact;
    if (Membership) user.Membership = Membership;
    await user.save();
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const Deleteuser = async (req, res) => {
  const session = await startSession();
  session.startTransaction();
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id).session(session);
    if (!deletedUser) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ error: "User not found" });
    }
    const admin = await Admin.findOne().session(session);
    admin.totaluserCount -= 1;
    await admin.save({ session });
    // throw new Error("mera error")
    await session.commitTransaction();
    session.endSession();
    res.status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    // console.log("errrrrrrr",error)
    res.status(500).json({ error: "Internal server error" });
  }
};

const EditShopDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      bussinessMail,
      mainCategory,
      subCategory,
      state,
      district,
      pinCode,
    } = req.body;
    const shop = await Bussiness.findById(id);
    if (!shop) {
      return res.status(404).json({
        message: "Shop Not found",
      });
    }
    if (title) shop.title = title;
    if (bussinessMail) shop.bussinessMail = bussinessMail;
    if (mainCategory) shop.mainCategory = mainCategory;
    if (subCategory[0] === "empty") {
      shop.subCategory = [""];
    }
    if (subCategory.length > 0 && subCategory[0] !== "empty")
      shop.subCategory = subCategory;
    if (state) shop.state = state;
    if (district) shop.district = district;
    if (pinCode) shop.pinCode = pinCode;
    await shop.save();
    res.status(200).json({ message: "Shop updated successfully", shop });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const DeleteShop = async (req, res) => {
  const session = await startSession();
  session.startTransaction();
  try {
    const { id } = req.params;
    const deletedShop = await Bussiness.findByIdAndDelete(id).session(session);
    if (!deletedShop) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ error: "Shop not found" });
    }
    const admin = await Admin.findOne().session(session);
    admin.totalBusinessCount -= 1;
    await admin.save({session});
    await session.commitTransaction();
    session.endSession();
    res
      .status(200)
      .json({ message: "Shop deleted successfully", shop: deletedShop });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ error: error.message });
  }
};

const FilterUserSearch = async (req, res) => {
  try {
    const { membership, startDate, endDate, email } = req.query;
    let query = {};
    if (membership) {
      query.Membership = membership;
    }
    if (startDate && endDate) {
      query.createdAt = {
        $gte: new Date(startDate),
        $lt: new Date(endDate)
      };
    }
    if(email) {
      // console.log("s")
      // const user = await User.findOne({email:email})
      query.email = email
    }
    console.log("query", query);
    const users = await User.find(query);
    if (!users || users.length === 0) {
      return res.status(200).json({ message: "No users found", data: [] });
    }
    res.status(200).json({
      message: "found",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const FilterShopSearch = async (req, res) => {
  try {
    const { mainCategory, subCategory, state, district, owner, startDate, endDate, email } = req.query;
    let query = {};
    if (mainCategory) {
      query.mainCategory = mainCategory;
    }
    if (subCategory) {
      query.subCategory = subCategory;
    }
    if (state) {
      query.state = state;
    }
    if (district) {
      query.district = district;
    }
    if (owner) {
      query.owner = owner;
    }
    if (startDate && endDate) {
      query.createdAt = {
        $gte: new Date(startDate),
        $lt: new Date(endDate)
      };
    }
    if(email) {
      // console.log("s")
      // const user = await User.findOne({email:email})
      query.bussinessMail = email
    }
    console.log("shop query", query);
    const shops = await Bussiness.find(query);
    if (!shops || shops.length === 0) {
      return res.status(200).json({ message: "No Shops found", data: [] });
    }
    res.status(200).json({
      message: "found",
      data: shops,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const FilterPaymentSearch = async (req, res) => {
  try {
    const { membership, startDate, endDate, email } = req.query;
    console.log(req.query)
    let query = {};
    if(email) {
      // console.log("s")
      const user = await User.findOne({email:email})
      query.User = user._id
    }
    if (membership) {
      query.MembershipType = membership;
    }
    // if(paymentDate){
    //   query.createdAt = new Date(paymentDate)
    // }
    if (startDate && endDate) {
      query.createdAt = {
        $gte: new Date(startDate),
        $lt: new Date(endDate)
      };
    }
    console.log("query", query);
    const payments = await Payment.find(query);
    if (!payments || payments.length === 0) {
      return res.status(200).json({ message: "No payments found", data: [] });
    }
    res.status(200).json({
      message: "found",
      data: payments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// const FilterQuerySearch = async (req, res) => {
//   try {
//     const { membership, startDate, endDate, email } = req.query;
//     console.log(req.query)
//     let query = {};
//     if(email) {
//       // console.log("s")
//       // const user = await User.findOne({email:email})
//       query.enquiry.email = email
//     }
//     // if(paymentDate){
//     //   query.createdAt = new Date(paymentDate)
//     // }
//     // if (startDate && endDate) {
//     //   query.createdAt = {
//     //     $gte: new Date(startDate),
//     //     $lt: new Date(endDate)
//     //   };
//     // }
//     // if (district) {
//     //   // Populate the 'SenderId' field to get the associated User document
//     //   query.SenderId = {
//     //     $in: await User.find({ district: district }).distinct('_id')
//     //   };
//     // }

//     console.log("query", query);
//     const enquiry = await Admin.findOne().populate({
//       path: "enquiry",
//       populate: {
//         path: "SenderId",
//         model: "User",
//       },
//     });
//     console.log(enquiry)
//     if (!enquiry || enquiry.length === 0) {
//       return res.status(200).json({ message: "No Enquiry found", data: [] });
//     }

//     res.status(200).json({
//       message: "found",
//       data: enquiry,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

const CreateAdminAccount = async (req, res, next) => {
  const session = await startSession();
  session.startTransaction();
  try {
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
    const newUser = await User.create(
      [{ name, email, password: hashedPass, role: "Admin" }],
      {
        session,
      }
    );
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
      admin.totalAdminCount += 1;
      admin.totaluserCount += 1;
      await admin.save({ session });
    }

    await session.commitTransaction();
    session.endSession();
    res.status(200).json({
      success: true,
      message: "Admin Registered",
      data: newUser,
    });

    // res.status(200).json({
    //     success: true,
    //     message: "User Registered",
    //     data: newUser,
    // });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log("ererere", error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const GetAllAdminQueris = async (req, res) => {
  try {
    const admin = await Admin.findOne().populate({
      path: "enquiry",
      populate: {
        path: "SenderId",
        model: "User",
      },
    });
    if (!admin) {
      res.status(500).json({
        message: "No Admin Found",
      });
    }
    const queries = await admin.enquiry;
    res.status(200).json({
      message: "fetched successfull",
      Queries:queries,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const GetQueryByID = async (req, res) => {
  try {
    const { id } = req.body;
    const query = await Enquiry.findById(id).populate("SenderId");
    if (!query) {
      return res.status(404).json({ message: "No query Found" });
    }
    res.status(200).json({
      message: "found query",
      query,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMembershipCounts = async (req, res) => {
  try {
    const membershipCounts = await User.aggregate([
      {
        $group: {
          _id: "$Membership",
          count: { $sum: 1 },
        },
      },
    ]);

    const allMembershipTypes = [
      "Free List",
      "Shop List",
      "Standard",
      "Premium",
      "Pro",
    ];

    const countsObject = Object.fromEntries(
      allMembershipTypes.map((type) => [type, 0])
    );
    for (const { _id, count } of membershipCounts) {
      countsObject[_id] = count;
    }

    const membershipCountsArray = Object.entries(countsObject).map(
      ([membershipType, count]) => ({
        membershipType,
        count,
      })
    );

    res
      .status(200)
      .json({ message: "Membership counts", membershipCountsArray });
  } catch (error) {
    res.status(500).json({
      message: "Could not fetch membership counts",
      error: error.message,
    });
  }
};

//del qerybyid
const DelQueryById = async (req, res) => {
  const { id } = req.body;
  try {
    await Enquiry.findByIdAndDelete(id);

    res.status(200).json({
      message: "del",
    });
  } catch (error) {
    res.status(500).json({
      message: "del not done",
      error: error.message,
    });
  }
};

const GetLastTenPaymentHistory = async (req, res) => {
  try {
    const payments = await Payment.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .populate({
        path: "User",
        select: "name profileImage",
      });
    res.status(200).json({ payments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetAllPaymentList = async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 }).populate({
      path: "User",
      select: "name profileImage",
    });
    res.status(200).json({ payments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetPaymentById = async (req, res) => {
  try {
    const { id } = req.body;
    const payment = await Payment.findById(id).populate({
      path: "User",
    });
    res.status(200).json({ payment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const freeListByAdmin = async (req, res) => {
  const session = await startSession();
  session.startTransaction();
  try {
    // const errs = validationResult(req);
    // if (!errs.isEmpty()) {
    //   let arr = [];
    //   errs.array().forEach((error) => {
    //     arr.push(error.msg);
    //   });
    //   return res.status(400).json({
    //     message: "Something went wrong",
    //     err: arr
    //   });
    // }

    // Extract business details from request body
    // console.log(req.body)
    const {
      formData: {
        email,
        title,
        address,
        bussinessContact,
        bussinessAltContact,
        bussinessMail,
        pinCode,
        bio
      },
      state,
      district,
      timingArr,
      openDays,
      mainCategory,
      subCategory,
      imagelinkArr,
      latitude,
      longitude
    } = req.body;

    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    const user = await User.findOne({ email }).session(session);

    if (!user){
      await session.abortTransaction();
      session.endSession();
      return res.status(201).json({ message: "User Not Found!" });
    } 

    const owner = user._id;
    // console.log("owner",owner)
    // Create a new business object using the schema
    // console.log("imagearr",imagelinkArr);
    const newBusiness = await Bussiness.create([{
      title,
      address,
      district,
      state,
      owner,
      pinCode,
      bio,
      location,
      bussinessContact,
      bussinessAltContact,
      bussinessMail,
      timingArr,
      openDays,
      mainCategory,
      subCategory,
      buseinessImages: imagelinkArr
    }],{session});
    // console.log("business",newBusiness[0]);
    // Save new business to user's array of owned businesses
    await user.ownedBussinesses.push(newBusiness[0]._id);
    await user.save({session})


    //admin Part
    const admin = await Admin.findOne().session(session);
    if (admin) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayRecordIndex = admin.dailyBusinessRegistrationCounts.findIndex(
        (record) => record.date.getTime() === today.getTime()
      );
      if (todayRecordIndex !== -1) {
        admin.dailyBusinessRegistrationCounts[todayRecordIndex].count++;
      } else {
        admin.dailyBusinessRegistrationCounts.push({ date: today, count: 1 });
      }
      admin.totalBusinessCount += 1;
      await admin.save({ session });
    }
    
    await session.commitTransaction();
    session.endSession();
    res.status(200).json({ message: "Business created successfully", business: newBusiness[0] });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log("Error:", error);
    res.status(500).json({ message: error.message });
  }
};

export {
  EditUserDetails,
  GetAllListUsers,
  GetAllBusinessList,
  GetPastSevenDaysRegitraionCount,
  GetAllCounts,
  getUserByID,
  getBusinessById,
  searchUserByemail,
  Deleteuser,
  EditShopDetails,
  DeleteShop,
  FilterUserSearch,
  FilterShopSearch,
  FilterPaymentSearch,
  // FilterQuerySearch,
  CreateAdminAccount,
  GetAllAdminQueris,
  GetQueryByID,
  getMembershipCounts,
  DelQueryById,
  GetLastTenPaymentHistory,
  GetAllPaymentList,
  GetPaymentById,
  freeListByAdmin
};
