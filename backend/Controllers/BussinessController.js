import Bussiness from "../Models/BussinessModel.js";
import { validationResult } from "express-validator";

const FreeList = async(req,res)=>{
    console.log("i reached here");
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
            bussinessContact,
            bussinessMail,
            openTime,
            closeTime,
            openDays,
            mainCategory,
            subCategory,
            pinCode,
            bio,
            imagelinkArr,

            latitude,
            longitude
        } = req.body;

        const location = {
          type : "Point",
          coordinates : [longitude,latitude]
        }
        const owner = req.user._id

        // Create a new business object using the schema
        const newBusiness = await Bussiness.create({
          title,
          address,
          district,
          state,
          owner,
          location,
          bussinessContact,
          bussinessMail,
          openTime,
          closeTime,
          openDays,
          mainCategory,
          subCategory,pincode:pinCode,bio,imagelinkArr
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
        console.log("Ereeresa",error)
        res.status(500).json({
            message:error.message
        })
      }
}

const FindBussiness = async (req, res) => {
    
  try {
      const { district, mainCategory, latitude, longitude } = req.body;

      // Check if required parameters are provided
      if (!district || !mainCategory || !latitude || !longitude ) {
          return res.status(400).json({ message: "Required parameters are missing" });
      }

      console.log(district, mainCategory, longitude, latitude);
      // Perform the proximity query
      const nearbyBusinesses = await Bussiness.find({
          district: district,
          mainCategory: mainCategory,
          location: {
              $near: {
                  $geometry: {
                      type: "Point",
                      coordinates: [longitude, latitude]
                  },
                  $maxDistance: 20000
              }
          }
      }).exec();

      res.status(200).json({ businesses: nearbyBusinesses });
  } catch (error) {
      console.error("Error finding nearby businesses:", error);
      res.status(500).json({ message: "Internal server error" });
  }
};

const findByID = async (req, res) => {
    try {
      const { bussinessId } = req.body;

    //   console.log(bussinessId);
      // Check if required parameters are provided
      if (!bussinessId ) {
          return res.status(400).json({ message: "Required parameters are missing" });
      }

      // Perform the proximity query
      const requiredBusiness = await Bussiness.findOne({_id:bussinessId}).exec();
    //   console.log(requiredBusiness);
      res.status(200).json({ businessDetail: requiredBusiness });
  } catch (error) {
      console.error("Error finding required business:", error);
      res.status(500).json({ message: "Internal server error" });
  }
};


export { FreeList, FindBussiness, findByID };