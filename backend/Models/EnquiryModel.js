import mongoose from "mongoose";

const enquirySchema = mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  SenderId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" 
  },
  // createTime:{
  //   type:Date,
  //   required:true,
  //   default:Date.now()
  // },
  name: {
    type: String,
  },
  email: {
    type: String,
  },  
  contact: {
    type: String,
  }
}, { timestamps: true,});

// Define pre-remove middleware to remove reference from Bussiness document
// enquirySchema.pre('remove', async function(next) {
//   try {
//       // Find the corresponding Bussiness document
//       const bussiness = await mongoose.model('Bussiness').findByIdAndUpdate(
//           this.bussinessId,
//           { $pull: { enquiry: this._id } } // Remove the enquiry from the Bussiness document
//       );
//       next();
//   } catch (error) {
//       next(error);
//   }
// });
// TTL index to expire documents after a certain time
// enquirySchema.index({ createTime: 1 }, { expireAfterSeconds: 5 }); // Expire documents after 1 hour (3600 seconds)

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;
