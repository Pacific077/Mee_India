import Admin from "../Models/AdminModel.js";
import User from "../Models/UserModel.js";
import Bussiness from "../Models/BussinessModel.js";
//not to be used in frontend
const CreateAdmin = async (req, res) => {
  try {
    const admin = await Admin.create({
      dailyUserRegistrationCounts: [],
      dailyBusinessRegistrationCounts: [],
      totaluserCount: 0,
      totalBusinessCount: 0,
    });
    return res.status(200).json({
      message: "Admin Created Succesfully",
      admin,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
const GetAllBusinessList =async (req, res) => {
  const business =await Bussiness.find()
  res.status(200).json({
    message: "all list of GetAllBusinessList",
    business
  });
};
const GetAllListUsers =async (req, res) => {
  const users =await User.find()
  res.status(200).json({
    message: "all list of users",
    users
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
  } catch (error) {}
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
  } catch (error) {}
};
const getUserByID =async (req,res)=>{
  const {id} = req.body
  const user = await User.findById(id);
  res.status(200).json(
    user
  )
}
const getBusinessById = async (req,res)=>{
  try {
    const {id} =req.body
    const business = await Bussiness.findById(id)
    if(!business){
      return res.status(404).json({ message: "No Business Found" });
    }
    res.status(200).json({
      message:"found business",
      business
    })
    
  } catch (error) {
    res.status(400).json({
      message:error.message
    })
  }
  
}
export {
  GetAllListUsers,
  GetAllBusinessList,
  CreateAdmin,
  GetPastSevenDaysRegitraionCount,
  GetAllCounts,
  getUserByID,
  getBusinessById
};
