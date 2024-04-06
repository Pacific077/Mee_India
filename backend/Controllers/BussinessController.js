import Bussiness from "../Models/BussinessModel.js";
import { validationResult } from "express-validator";
import User from "../Models/UserModel.js";
import Review from "../Models/ReviewModel.js";
import Enquiry from "../Models/EnquiryModel.js";
import { startSession } from "mongoose";
import Admin from "../Models/AdminModel.js";

const FreeList = async (req, res, next) => {
  const session = await startSession();
  session.startTransaction();
  try {
    const errs = validationResult(req);
    if (!errs.isEmpty()) {
      let arr = [];
      errs.array().forEach((error) => {
        arr.push(error.msg);
      });
      await session.abortTransaction();
      session.endSession();
      // console.log("Errr", arr);
      return res.status(400).json({
        message: arr[0],
      });
    }
    // console.log("till here");
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
      longitude,
    } = req.body;

    const location = {
      type: "Point",
      coordinates: [longitude, latitude],
    };
    const owner = req.user._id;

    // Create a new business object using the schema
    const newBusiness = await Bussiness.create(
      [
        {
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
          buseinessImages: imagelinkArr,
        },
      ],
      { session }
    );

    // console.log("created",newBusiness[0]._id);
    // Save the business object to the database
    // const savedBusiness = await newBusiness.save();
    // save new businnes to users arrat

    //reduce time cost by fetching from req.user
    const user = await User.findById(owner).session(session);
    await user.ownedBussinesses.push(newBusiness[0]._id);
    await user.save({ session });

    //admin part
    const admin = await Admin.findOne().session(session);
    if (admin) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayRecordIndex = admin.dailyBusinessRegistrationCounts.findIndex(
        (record) => record.date.getTime() === today.getTime()
      );
      if (todayRecordIndex !== -1) {
        admin.dailyBusinessRegistrationCounts[todayRecordIndex].count++;
      } else {
        admin.dailyBusinessRegistrationCounts.push({ date: today, count: 1 });
      }
      admin.totalBusinessCount += 1;

      await admin.save({ session });
    }

    await session.commitTransaction();
    session.endSession();
    res.status(200).json({
      success: true,
      message: "Shop Registered",
      data: newBusiness,
    });

    // Respond with the saved business object
    // next();
    // res.status(200).json({
    //     success: true,
    //     message: "Bussiness Registered",
    //     data: savedBusiness,
    // });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    res.status(500).json({
      message: error.message,
    });
  }
};

const FindBussiness = async (req, res) => {
  try {
    const { district, mainCategory, latitude, longitude, subCat, trusted, verified } = req.body;

    // Check if required parameters are provided
    if (!district || !mainCategory || !latitude || !longitude) {
      return res
        .status(400)
        .json({ message: "Required parameters are missing" });
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
            coordinates: [longitude, latitude],
          },
          $maxDistance: 20000,
        },
      },
    };

    // If subCat is provided, add subCategory condition to the base query
    if (subCat !== "null") {
      baseQuery.subCategory = { $in: [subCat] };
    }
    console.log(baseQuery);
    // Perform the proximity query
    const nearbyBusinesses = await Bussiness.find(baseQuery).populate({
      path: "owner",
      options: { strictPopulate: false },
    }).exec();

    // console.log(nearbyBusinesses);
    console.log(trusted+" "+verified)
    // Filter out businesses based on the trusted and verified attributes of the owner
    const filteredBusinesses = nearbyBusinesses.filter(business => {
      // If both trusted and verified are true in the request, filter based on both attributes
      if (trusted && verified) {
        return business.owner.trustStamp === true && business.owner.verifiedSeal === true;
      }
      // If trusted is true in the request, filter based on the trusted attribute of the owner
      if (trusted) {
        return business.owner.trustStamp === true;
      }
      // If verified is true in the request, filter based on the verified attribute of the owner
      if (verified) {
        return business.owner.verifiedSeal === true;
      }
      // If neither trusted nor verified is true in the request, include all businesses
      return true;
    });
    console.log("filtered",filteredBusinesses);

    res.status(200).json({ businesses: filteredBusinesses });
  } catch (error) {
    console.error("Error finding nearby businesses:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const FindBussinessByText = async (req, res) => {
  try {
    const { query } = req.body;
    console.log("search query",query)
    const result = await Bussiness.find({
      $text: { $search: query },
    });
    if(result){
      return res.status(200).json({
        message:"fetched",
        result
      })
    }
    res.status(201).json({
      message:"nothing Found",
      result
    })
  } catch (error) {
    res.status(500).json({
      message:"error Found",
      error:error.message
    })
  }

};

const findByID = async (req, res) => {
  try {
    const { bussinessId } = req.body;

    if (!bussinessId) {
      return res
        .status(400)
        .json({ message: "Required parameters are missing" });
    }

    // Perform the proximity query
    const requiredBusiness = await Bussiness.findById(bussinessId)
      .populate({
        path: "reviews",
        populate: {
          path: "userId",
          select: "name ratedBussinesses profileImage",
          options: { strictPopulate: false }, // Only populate the 'name' field of the user
        },
        options: { strictPopulate: false },
      })
      .populate({
        path: "owner",
        options: { strictPopulate: false },
      })
      .populate({
        path: "enquiry",
        select: "name date question email contact", // Select the fields you want to populate
        options: { strictPopulate: false },
      }).populate({
        path: "owner"
      })
      ;
    // Sort the enquiry array by date in descending order
    // requiredBusiness.enquiry.sort((a, b) => b.date - a.date);
    //   console.log(requiredBusiness);
    res.status(200).json({ businessDetail: requiredBusiness });
  } catch (error) {
    console.error("Error finding required business:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// const GetAl
const EditBusiness = async (req, res) => {
  try {
    const {
      businessId,
      name,
      websiteUrl,
      photos,
      WebsiteDescription,
      Catalouge,
      Services,
    } = req.body;

    const updateObject = {};
    if (name) updateObject.title = name;
    if (websiteUrl) updateObject.websiteUrl = websiteUrl;
    if (WebsiteDescription)
      updateObject.WebsiteDescription = WebsiteDescription;
    if (photos) updateObject.$push = { buseinessImages: { $each: photos } };
    if (Catalouge)
      updateObject.$push = { CatalougeImages: { $each: Catalouge } };
    if (Services) updateObject.$push = { Services: { $each: Services } };
    // if (Services) updateObject.Services = Services;
    const business = await Bussiness.findByIdAndUpdate(
      businessId,
      updateObject,
      { new: true }
    );
    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }

    // Send the response
    res.status(200).json({
      status: "Success",
      message: "Business updated successfully",
      data: business,
    });
  } catch (error) {
    console.log("errr", error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};
const reviewSubmit = async (req, res) => {
  try {
    const { userId, message, rating, bussinessId } = req.body;

    console.log(userId, bussinessId, message, rating);
    //   console.log(message);
    // Check if required parameters are provided
    if (!userId || !message || !rating || !bussinessId) {
      return res
        .status(400)
        .json({ message: "Required parameters are missing" });
    }
    console.log("reached");
    // Perform the proximity query
    const reviewedBusiness = await Bussiness.findOne({
      _id: bussinessId,
    }).exec();

    const reviewer = await User.findOne({ _id: userId }).exec();

    if (reviewer.ratedBussinesses.includes(reviewedBusiness._id)) {
      return res
        .status(400)
        .json({ message: "You have already reviewed this business!" });
    }

    const review = await Review.create({
      userId,
      message,
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
const enquirySubmit = async (req, res) => {
  const session = await startSession();
  session.startTransaction();
  const UserId = req.user._id;
  // console.log("user id", UserId);
  try {
    const { question, bussinessId } = req.body;
    const query = await Enquiry.create([{ question, SenderId: UserId }], {
      session,
    });
    const business = await Bussiness.findById(bussinessId).session(session);
    business.enquiry.push(query[0]._id);
    await business.save({ session });
    await session.commitTransaction();
    session.endSession();
    res.status(200).json({ message: "Enquiry Sent Successfully" });
    // console.log("newEnquiry",newEnquiry[0]._id);
    // Check if required parameters are provided
    // if (!name || !question || !email || !contact || !bussinessId) {
    //   return res.status(400).json({ message: "Required parameters are missing" });
    // }

    // Find the business by ID
    // const enquiredBusiness = await Bussiness.findOne({ _id: bussinessId }).exec();

    // if (!enquiredBusiness) {
    //   return res.status(404).json({ message: "Business not found" });
    // }

    // Create a new enquiry
    //add user id
    // const newEnquiry = await Enquiry.create({
    //   question,
    //   // name,
    //   // email,
    //   // contact,
    //   // createdAt: new Date() // Set the creation date for the enquiry
    // });

    // // Add the new enquiry to the business's enquiry array
    // enquiredBusiness.enquiry.push(newEnquiry);

    // // Save the updated business document
    // await enquiredBusiness.save();
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log("err", error);
    res.status(500).json({ message: error.message });
  }
};

const GetAllBusinessReview = async (req, res) => {
  try {
    const { businessId } = req.body;
    const business = await Bussiness.findById(businessId).populate({
      path: "enquiry",
      populate: {
        path: "SenderId",
        model: "User",
        select: "name email profileImage contact",
      },
    });
    const enquiry = await business.enquiry;
    res.status(200).json({ message: "Business get Successfully", enquiry });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Addkeywords = async (req, res) => {
  try {
    const { id, keyword } = req.body;
    const business = await Bussiness.findById(id);

    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }
    if (business.keywords.includes(keyword)) {
      return res.status(400).json({ message: "Keyword already exists" });
    }
    if (business.keywords.length>=10) {
      return res.status(400).json({ message: "Cant add more than 10 keywords" });
    }
    business.keywords.push(keyword);
    await business.save();

    return res.status(200).json({ message: "Keyword added successfully", business });
  } catch (error) {
    console.error("Error adding keyword:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const GetAllKeywords = async (req, res) => {
  try {
    const { id } = req.params;
    const business = await Bussiness.findById(id);

    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }
    const allKeywords = business.keywords;

    return res.status(200).json({ keywords: allKeywords });
  } catch (error) {
    console.error("Error fetching keywords:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const DeleteKeywordWithString = async (req, res) => {
  try {
    const { id, string } = req.body;
    // console.log("req.body")
    // console.log("id ke",id,string)
    const business = await Bussiness.findById(id);

    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }
    business.keywords = business.keywords.filter(keyword => keyword !== string);
    await business.save();

    return res.status(200).json({ message: "Keyword deleted successfully" });
  } catch (error) {
    console.error("Error deleting keyword:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export {
  FreeList,
  FindBussiness,
  findByID,
  EditBusiness,
  reviewSubmit,
  FindBussinessByText,
  enquirySubmit,
  GetAllBusinessReview,
  Addkeywords,
  GetAllKeywords,
  DeleteKeywordWithString

};
