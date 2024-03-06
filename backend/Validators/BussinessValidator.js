import { body, validationResult } from 'express-validator';

const BussinessValidator = [
  body('title').notEmpty().withMessage('Title is required'),
  body('address').notEmpty().withMessage('Address is required'),
  body('bio').notEmpty().withMessage('bio is required'),
  body('pinCode').notEmpty().withMessage('pincode is required'),
  body('district').notEmpty().withMessage('District is required'),
  body('state').notEmpty().withMessage('State is required'),
  body('bussinessContact').notEmpty().withMessage('Business contact is required'),
  body('bussinessAltContact').notEmpty().withMessage('Business alternate contact is required'),
  body('bussinessMail').notEmpty().withMessage('Business email is required').isEmail().withMessage('Invalid email'),
  body('timingArr').isArray({ min: 1 }).withMessage('Atleast one Timing is required'),
  body('openDays').isArray({ min: 1 }).withMessage('Open days are required and should be an array with at least one day'),
  body('mainCategory').notEmpty().withMessage('Main category is required'),


  // body('location').custom(value => {
  //   if (!value || !value.coordinates || !Array.isArray(value.coordinates) || value.coordinates.length !== 2) {
  //       throw new Error('Invalid coordinates for location');
  //   }
  //   const [longitude, latitude] = value.coordinates;
  //   if (typeof longitude !== 'number' || typeof latitude !== 'number' || Math.abs(latitude) > 90 || Math.abs(longitude) > 180) {
  //       throw new Error('Invalid latitude or longitude');
  //   }
  //   return true;
  // }),

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
