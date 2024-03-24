import Admin from "../Models/AdminModel.js";
import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
// import jwt from "jsonwebtoken";
import Bussiness from "../Models/BussinessModel.js";
//not to be used in frontend
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
  } catch (error) {
    res.status(500).json({message:error.message})
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
      message:error.message
    })
  }
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
    res.status(500).json({
      message:error.message
    })
  }
  
}

const searchUserByemail = async (req,res)=>{
  try {
    const {email} = req.body
    const users =await User.find({email:email})
    if(users.length===0){
     return res.status(201).json({
        message:"no email exists"
      })
    }
    res.status(200).json({
      message:"found",
      users
    })
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}
const EditUserDetails = async (req,res)=>{
  try {
    const {id} = req.params
    const {name,email,contact,Membership} = req.body
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (name) user.name = name;
    if (email) user.email = email;
    if (contact) user.contact = contact;
    if (Membership) user.Membership = Membership;
    await user.save()
    res.status(200).json({ message: 'User updated successfully', user });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
const Deleteuser = async(req,res)=>{
  try {
    const {id} = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    const admin =await Admin.findOne();
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
     admin.totaluserCount -= 1;
     await admin.save()
    res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

const EditShopDetails = async(req,res)=>{
  try {
    const {id} = req.params
    const {title,bussinessMail,mainCategory,subCategory,state,district,pinCode} = req.body
    const shop =await Bussiness.findById(id);
    if(!shop){
      return res.status(404).json({
        message:"Shop Not found"
      })
    }
    if(title) shop.title = title
    if(bussinessMail) shop.bussinessMail = bussinessMail
    if(mainCategory) shop.mainCategory = mainCategory
    if(subCategory[0]==="empty"){
      shop.subCategory=['']
    }
    if(subCategory.length>0&&subCategory[0]!=="empty") shop.subCategory = subCategory
    if(state) shop.state = state
    if(district) shop.district = district
    if(pinCode) shop.pinCode = pinCode
    await shop.save()
    res.status(200).json({ message: 'Shop updated successfully', shop });


  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const DeleteShop = async (req,res)=>{
  try {
    const {id} = req.params;
    const deletedShop = await Bussiness.findByIdAndDelete(id);
    const admin =await Admin.findOne();
    if (!deletedShop) {
      return res.status(404).json({ error: 'Shop not found' });
    }
     admin.totalBusinessCount -= 1;
     await admin.save()
    res.status(200).json({ message: 'Shop deleted successfully', shop: deletedShop });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const FilterUserSearch =  async(req,res)=>{
  try {
    const { membership, startDate } = req.query;
    let query = {};
    if (membership) {
      query.Membership = membership;
    }
    if (startDate) {
      query.membershipPurchaseDate = {
        $gte: new Date(startDate)   
      };
    }
    console.log("query",query)
    const users = await User.find(query);
    if (!users || users.length === 0) {
      return res.status(200).json({ message: "No users found", data: [] });
    }
    res.status(200).json({
      message:"found"
      ,data:users
    })
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}


const FilterShopSearch = async (req,res)=>{
  try {
    const {mainCategory,subCategory,state,district,owner} = req.query;
    let query = {};
    if (mainCategory) {
      query.mainCategory = mainCategory;
    }
    if (subCategory) {
      query.subCategory=subCategory
    }
    if (state) {
      query.state=state
    }
    if (district) {
      query.district=district
    }
    if (owner) {
      query.owner=owner
    }
    console.log("shop query",query)
    const shops = await Bussiness.find(query);
    if (!shops || shops.length === 0) {
      return res.status(200).json({ message: "No users found", data: [] });
    }
    res.status(200).json({
      message:"found"
      ,data:shops
    })
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}

const CreateAdminAccount = async (req,res,next)=>{
  try {
    const errs = validationResult(req);

    if(!errs.isEmpty()){
        let arr = [];
        errs.array().forEach((error) => {
            arr.push(error.msg);
        });
        return res.status(400).json({
            message:"Something went wrong",
            err:arr
        })
    }

    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({
            message:"Something went wrong",
            err:["Email is already registered!"]
        })
    }
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = await User.create({
        name,
        email,
        role:"Admin",
        password: hashedPass,
    });

    await newUser.save();
next();
    // res.status(200).json({
    //     success: true,
    //     message: "User Registered",
    //     data: newUser,
    // });
} catch (error) {
        res.status(500).json({
        message:error.message
    })
}

}
export {
  EditUserDetails,
  GetAllListUsers,
  GetAllBusinessList,
  GetPastSevenDaysRegitraionCount,
  GetAllCounts,
  getUserByID,
  getBusinessById,searchUserByemail,Deleteuser,EditShopDetails,DeleteShop,
  FilterUserSearch,
  FilterShopSearch,CreateAdminAccount
};
