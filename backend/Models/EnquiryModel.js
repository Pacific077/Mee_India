import mongoose from "mongoose";
import Bussiness from "./BussinessModel.js";
import Admin from "./AdminModel.js";

const enquirySchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    createdAt: { 
      type: Date,
      expires: 10, // Set TTL to 10 seconds
      default: Date.now
    },
    SenderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    contact: {
      type: String,
    },
  },
  { timestamps: true }
);


// Post middleware to remove references from Business and Admin models when an enquiry is removed
enquirySchema.post('remove', async (doc)=>{
  console.log("post got triggered")
  const enquiryId = doc._id;
  
  try {
    // Update Business documents to remove enquiry reference
    await Bussiness.updateMany(
      { enquiry: enquiryId },
      { $pull: { enquiry: enquiryId } }
    );

    // Update Admin documents to remove enquiry reference
    await Admin.updateMany(
      { enquiry: enquiryId },
      { $pull: { enquiry: enquiryId } }
    );
  } catch (error) {
    console.error("Error removing enquiry references:", error);
  }
});


const Enquiry = mongoose.model("Enquiry", enquirySchema);
// Enquiry.compile();
export default Enquiry;
