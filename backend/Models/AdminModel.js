import mongoose from "mongoose";

const AdminSchema = mongoose.Schema(
  {
    dailyUserRegistrationCounts: [
      {
        date: { type: Date, required: true },
        count: { type: Number, default: 0 },
      }
    ],
    dailyBusinessRegistrationCounts: [
      {
        date: { type: Date, required: true },
        count: { type: Number, default: 0 },
      }
    ],
    totaluserCount:{
      type:Number
    },
    totalBusinessCount:{
      type:Number
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;