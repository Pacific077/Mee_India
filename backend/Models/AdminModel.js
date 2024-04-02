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
    totalAdminCount:{
      type:Number
    },
    totalBusinessCount:{
      type:Number
    },
    featuredBlogs:[{type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
    enquiry: [{ type: mongoose.Schema.Types.ObjectId, ref: "Enquiry" }],
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;
