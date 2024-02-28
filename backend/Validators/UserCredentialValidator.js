import { body } from "express-validator";


const UserCredentialValidator = [
  body("name").notEmpty().withMessage("Name field is required"),
  body("email")
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
  body("password").notEmpty().withMessage("Password field is required"),
];
const UserLoginValidator = [
  body("email")
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
  body("password").notEmpty().withMessage("Password field is required"),
];
export {UserCredentialValidator,UserLoginValidator};