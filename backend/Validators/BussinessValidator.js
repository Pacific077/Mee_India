import { body, validationResult } from 'express-validator';

const BussinessValidator = [
  body('title').notEmpty().withMessage('Title is required'),
  body('address').notEmpty().withMessage('Address is required'),
  body('district').notEmpty().withMessage('District is required'),
  body('state').notEmpty().withMessage('State is required'),
  body('owner').notEmpty().withMessage('Owner is required'),
  body('bussinessContact').notEmpty().withMessage('Business contact is required'),
  body('bussinessMail').notEmpty().withMessage('Business email is required').isEmail().withMessage('Invalid email'),
  body('openTime').notEmpty().withMessage('Opening time is required'),
  body('closeTime').notEmpty().withMessage('Closing time is required'),
  body('openDays').isArray({ min: 1 }).withMessage('Open days are required and should be an array with at least one day'),
  body('mainCategory').notEmpty().withMessage('Main category is required'),
  body('subCategory').notEmpty().withMessage('Sub category is required'),

  // Custom validation to check if openDays contains valid day names
//   body('openDays.*').isIn(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']).withMessage('Invalid day name'),

//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     next();
//   }
];

export default BussinessValidator;
