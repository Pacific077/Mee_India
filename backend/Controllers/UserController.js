import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

//register user
const RegisterUser = async (req, res) => {
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
            password: hashedPass,
        });

        await newUser.save();

        res.status(200).json({
            success: true,
            message: "User Registered",
            data: newUser,
        });
    } catch (error) {
            res.status(500).json({
            message:error.message
        })
    }

};

//login user
const LoginUser = async (req, res) => {
    try {
        console.log("reqbody",req.body);
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
            httpOnly: false,//setting false se that i can acees cookie from frontend 
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
        message:error.message
      })
    }
} ; 

const Logout = async(req,res)=>{
    try{
        res.cookie("token", "", {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(200).json({
            message : "Logged out!!"
        })
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

const UpdateProfile = async (req, res) => {
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
        const { _id, name, email } = req.body;
        const user = await User.findOne({ _id: _id });

        //No chance
        if (!user) {
            return res.status(401).json({
                message: "User not Found!!",
            });
        }
       
        // Update user's information
        user.name = name;
        user.email = email;

        // Save the updated user
        await user.save();

        //send the response
        res.status(200).json({
            status: "Success",
            message: "Profile Updated Successfully",
            data: user,
        });
      
    } catch (error) {
      res.status(500).json({
        message:error.message
      })
    }
};
const ProfilpicUpload = async(req,res)=>{
    console.log("bebejfmdnf")
    console.log(req.files);
    try {
      if(!req.file){
        return res.status(400).json({
          msg:"no file found"
        })
      }
      //find user to be updated
      const UserId = req.user._id;
      const userFound = await User.findById(UserId);
      if (!userFound) {
        return res.status(400).json({
          err:"User not found"
        })
      }
      console.log("req.file",req.file)
    //   const updateduser = await User.findByIdAndUpdate(UserId, {
    //     profileImage: req.file.path,
    //   });
      res.status(200).json("Profile Pic Updated")
    } catch (Er) {
      res.status(400).json({
        err:Er
      })
    }
}

const getUserProfile = async(req,res)=>{
    try {
        const id = req.user._id;
        const user = await User.findById(id).populate('ownedBussinesses');
        res.status(200).json({user})
    } catch (err) {
        res.status(500).json({
            message:err.message
        })
    }
}

export { RegisterUser, LoginUser, Logout,UpdateProfile ,ProfilpicUpload,getUserProfile};