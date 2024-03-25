import mongoose from "mongoose";

const enquirySchema = mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Define pre-remove middleware to remove reference from Bussiness document
enquirySchema.pre('remove', async function(next) {
  try {
      // Find the corresponding Bussiness document
      const bussiness = await mongoose.model('Bussiness').findByIdAndUpdate(
          this.bussinessId,
          { $pull: { enquiry: this._id } } // Remove the enquiry from the Bussiness document
      );
      next();
  } catch (error) {
      next(error);
  }
});
// TTL index to expire documents after a certain time
enquirySchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 }); // Expire documents after 1 hour (3600 seconds)

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;
