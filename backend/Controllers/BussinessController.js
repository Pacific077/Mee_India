import Bussiness from "../Models/BussinessModel.js";
import { validationResult } from "express-validator";

const FreeList = async(req,res)=>{
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
        // Extract business details from request body
        const {
          title,
          address,
          district,
          state,
          owner,
          bussinessContact,
          bussinessMail,
          openTime,
          closeTime,
          openDays,
          mainCategory,
          subCategory
        } = req.body;
    
        // Create a new business object using the schema
        const newBusiness = await Bussiness.create({
          title,
          address,
          district,
          state,
          owner,
          bussinessContact,
          bussinessMail,
          openTime,
          closeTime,
          openDays,
          mainCategory,
          subCategory
        });
    
        // Save the business object to the database
        const savedBusiness = await newBusiness.save();
    
        // Respond with the saved business object
        res.status(200).json({
            success: true,
            message: "Bussiness Registered",
            data: savedBusiness,
        });
      } catch (error) {
        // Handle errors
        res.status(500).json({
            message:error.message
        })
      }
}

export { FreeList };