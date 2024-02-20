import mongoose from "mongoose";

const bussinessSchema = mongoose.Schema(
    {
      //bussinessDetail
      title: { type: String, required: true },
      address: { type: String, required: true },
      district: { type: String, required: true },
      state: { type: String, required: true },
      owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      //bussinessContact
      bussinessContact: { type: String, required: true },
      bussinessMail: { type: String, unique: true, required: true },
      //timing
      openTime: { type: String, required: true },
      closeTime: { type: String, required: true },
      openDays: { type: [String], required: true },
      //Category
      mainCategory: { type: String, required: true },
      subCategory: { type: String ,required: true},
      //servicesProvided
      ratingCount: { type: Number, default: 0 },
      reviews:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
    },
    { timestamps: true }
  );

const Bussiness = mongoose.model("Bussiness", bussinessSchema);

export default Bussiness;
