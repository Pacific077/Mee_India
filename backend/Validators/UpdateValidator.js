import { body } from "express-validator";
import User from "../Models/UserModel.js";

const UpdateValidator = [
  body("name").notEmpty().withMessage("Name field is required"),
  body("email")
    .notEmpty()
    .withMessage("Email field is required")
    .isEmail()
    .withMessage("Invalid email format").custom(async (email) => {
        const user = await User.findOne({ email });
        if (user) {
          throw new Error('Email address is already registered');
        }
      })
];

export default UpdateValidator;