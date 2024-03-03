import mongoose from "mongoose";

const bussinessSchema = mongoose.Schema(
  {
    //bussinessDetail
    title: { type: String, required: true },
    bio: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    buseinessImages: [
      {
        //to do : validators to be added for checking at least 3 images
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
    //bussinessContact
    bussinessContact: { type: String, required: true },
    bussinessMail: { type: String, unique: true, required: true },
    //timing
    openTime: { type: String, required: true },
    closeTime: { type: String, required: true },
    openDays: { type: [String], required: true },
    //Category
    mainCategory: { type: String, required: true },
    subCategory: [{ type: String }],
    //servicesProvided
    ratingCount: { type: Number, default: 0 },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

bussinessSchema.index({ location: "2dsphere" });

const Bussiness = mongoose.model("Bussiness", bussinessSchema);

export default Bussiness;
