import mongoose from "mongoose";

const bussinessSchema = mongoose.Schema(
    {
      title: { type: String, required: true },
      address: { type: String, required: true },
      district: { type: String, required: true },
      state: { type: String, required: true },
      mainCategory: { type: String, required: true },
      subCategory: { type: String },
      ratingCount: { type: },
      reviews:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
    },
    { timestamps: true }
  );

const Bussiness = mongoose.model("Bussiness", bussinessSchema);

export default Bussiness;
