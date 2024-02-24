import { body } from "express-validator";
import User from "../Models/UserModel.js";

const UserCredentialValidator = [
  body("name").if(body("name").exists()).notEmpty().withMessage("Name field is required"),
  body("email").if(body("email").exists())
    .notEmpty()
    .withMessage("Email field is required")
    .isEmail()
    .withMessage("Invalid email format"),
    // .custom(async (email) => {
    //     const user = await User.findOne({ email });
    //     if (user) {
    //       throw new Error('Email address is already registered');
    //     }
    //   }),
  body("password").if(body("password").exists()).notEmpty().withMessage("Password field is required"),
];

export default UserCredentialValidator;