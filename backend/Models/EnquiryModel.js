import mongoose from "mongoose";


const enquirySchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    createdAt: { 
      type: Date,
      expires: 172800, // Set TTL to 2 days (in seconds)
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



const Enquiry = mongoose.model("Enquiry", enquirySchema);
// Enquiry.compile();
export default Enquiry;
