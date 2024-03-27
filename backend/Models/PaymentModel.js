import mongoose from "mongoose";

const PaymentSchema = mongoose.Schema({
    razorpay_payment_id:{
        type:String,
        required:true
    },
    razorpay_order_id:{
        type:String,
        required:true,
    },
    MembershipType:{
        type:String,
        required:true,
        enum: ["Free List", "Shop List", "Standard", "Premium", "Pro"]
    },
    AmountPaid:{
        type:Number,
        required:true
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},
{ timestamps: true })

const Payment = mongoose.model("Payment", PaymentSchema);
// Enquiry.compile();
export default Payment;
