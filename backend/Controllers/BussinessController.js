import Bussiness from "../Models/BussinessModel.js";
import { validationResult } from "express-validator";
import User from "../Models/UserModel.js";
import Review from "../Models/ReviewModel.js";

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
            bussinessAltContact,
            bussinessMail,
            timingArr,
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
          pinCode,
          bio,
          location,
          bussinessContact,
          bussinessAltContact,
          bussinessMail,
          timingArr,
          openDays,
          mainCategory,
          subCategory,
          buseinessImages:imagelinkArr
        });
        
        console.log("created");
        // Save the business object to the database
        const savedBusiness = await newBusiness.save();
    // save new businnes to users arrat

    const user = await User.findById(owner);
    await user.ownedBussinesses.push(savedBusiness._id);
    await user.save();
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
      const { district, mainCategory, latitude, longitude, subCat } = req.body;

      // Check if required parameters are provided
      if (!district || !mainCategory || !latitude || !longitude ) {
          return res.status(400).json({ message: "Required parameters are missing" });
      }

      console.log(district, mainCategory, longitude, latitude);
      // Perform the proximity query
      const baseQuery = {
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
      };

      // If subCat is provided, add subCategory condition to the base query
      if (subCat) {
        baseQuery.subCategory = { $in: [subCat] };
        }

    // Perform the proximity query
    const nearbyBusinesses = await Bussiness.find(baseQuery).exec();

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

const reviewSubmit = async (req, res) => {
    try {
      const { userId,message,rating,bussinessId } = req.body;

    //   console.log(message);
      // Check if required parameters are provided
      if (!userId || !message || !rating || !bussinessId ) {
          return res.status(400).json({ message: "Required parameters are missing" });
      }

      // Perform the proximity query
      const reviewedBusiness = await Bussiness.findOne({_id:bussinessId}).exec();
      
      const reviewer = await User.findOne({_id:userId}).exec();

      if(reviewer.ratedBussinesses.includes(reviewedBusiness._id))
      {
        return res.status(400).json({message: "You have already reviewed this business!"})
      }
      
      const review = await Review.create({
          userId,
          message
        });

        reviewedBusiness.ratingCount += rating;
        reviewedBusiness.reviews.push(review);
        
        reviewer.ratedBussinesses.push(bussinessId);

        await reviewedBusiness.save();
        await reviewer.save();

    //   console.log(requiredBusiness);
      res.status(200).json({ message: "Review Submitted Successfully" });
  } catch (error) {
    // //   console.error("Error finding required business:", error);
    console.log(error);
      res.status(500).json({ message: "Internal server error" });
  }
};


export { FreeList, FindBussiness, findByID, reviewSubmit };