import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    contact:{type:Number,unique:true},
    Membership: {
      type: String,
      default: "Free List",
      enum: ["Free List", "Shop List", "Standard", "Premium", "Pro"],
    },
    membershipPurchaseDate: { type: Date,default: Date.now }, // Date when the membership was purchased
    membershipExpiryDate: { type: Date },   // Date when the membership expires
    password: { type: String, required: true },
    ownedBussinesses: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Bussiness" },
    ],
    ratedBussinesses: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Bussiness" },
    ],
    role: {
      type: String,
      default: "Consumer",
      enum: ["Admin", "Seller", "Consumer"],
    },
    profileImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
