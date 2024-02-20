import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      message: { type: String, required: true },
    },
    { timestamps: true }
  );

const Review = mongoose.model("Review", reviewSchema);

export default Review;
