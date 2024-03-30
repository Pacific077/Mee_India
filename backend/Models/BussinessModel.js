import mongoose from "mongoose";

const bussinessSchema = mongoose.Schema(
  {
    //bussinessDetail
    title: { type: String, required: true },
    bio: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    buseinessImages: [
      {
        type: String,
      },
    ],
    CatalougeImages: [
      {
        type: String,
      },
    ],
    address: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    websiteUrl:{
      type:String,
    },
    Services:[{
      type:String
    }],
    WebsiteDescription:{
      type:String
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    //keyword search
    keywords:[{type:String}],
    //bussinessContact
    bussinessContact: { type: String, required: true },
    bussinessAltContact: { type: String, required: true },
    bussinessMail: { type: String, unique: true, required: true },
    //timing
    // openTime: { type: String, required: true },
    // closeTime: { type: String, required: true },
    timingArr: { type: [String], required: true },
    openDays: { type: [String], required: true },
    //Category
    mainCategory: { type: String, required: true },
    subCategory: [{ type: String }],
    //servicesProvided
    ratingCount: { type: Number, default: 0 },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    enquiry: [{ type: mongoose.Schema.Types.ObjectId, ref: "Enquiry" }],
  },
  { timestamps: true }
);

bussinessSchema.index({ location: "2dsphere" });


bussinessSchema.index({
  mainCategory: "text",
  subCategory: "text",
  keywords: "text",
  Services: "text",
  title: "text",
},
{
  weights: {
    mainCategory: 50, 
    subCategory:45,
    keywords: 44,
    Services: 35,
    title: 10,        
},
name: "SearchTextIndex"
});

const Bussiness = mongoose.model("Bussiness", bussinessSchema);


export default Bussiness;
