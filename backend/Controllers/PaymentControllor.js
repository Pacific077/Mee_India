import { instance } from "../server.js"
import crypto from "crypto"
import Payment from "../Models/PaymentModel.js"
import User from "../Models/UserModel.js"

const CheckOut = async (req,res)=>{
  try {
    const {amount} = req.body
    // console.log("amount",amount)
    const options = {
        amount: Number(amount)*100,  // amount in the smallest currency unit
        currency: "INR"
      };
      const order = await instance.orders.create(options)
      // console.log(order);
      res.status(200).json({
        message:"order Id created",
        order
      })
  } catch (error) {
    res.status(500).json({
      msg:"cant create order",
      message:error.message,
      
    })
  }
  
}

const PaymentVerfication =async (req,res)=>{
  // console.log("verufi0",req.body)
  try {
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = req.body
  const {membership,months} = req.params;

  const data = razorpay_order_id + "|" + razorpay_payment_id
  const expected_signature = crypto.createHmac('sha256',process.env.RAZOR_PAY_API_SECRET).update(data).digest('hex');
  
  // console.log("expectedsign",expected_signature)
  // console.log("recvdsign",razorpay_signature)
  let IsSuc = "yes"
  const IsAuthentic = expected_signature===razorpay_signature
  if(IsAuthentic){
    console.log("mebership mnth",membership,months);
    let discount ;
    if(months===1){
      discount=0
    }else if(months===2){
      discount=5
    }else{
      discount=10
    }
    let baseAmnt;
    let VerifiedSeal = false;
    let trustStamp = false;
    let SearchVisibility = 1;
    let isKeywordSearchEnable = false;
    if (membership === "Free List") {
      baseAmnt=0
    } else if (membership === "Shop List") {
      baseAmnt=30
      VerifiedSeal=true;
      SearchVisibility=1;
    } else if (membership === "Standard") {
      VerifiedSeal=true;
      baseAmnt=600
      SearchVisibility=2;
    } else if (membership === "Premium") {
      VerifiedSeal=true;
      baseAmnt=1500
      SearchVisibility=3;
    } else {
      trustStamp=true;
      VerifiedSeal=true;
      baseAmnt=3000
      SearchVisibility=4;
      isKeywordSearchEnable=true;
    }
    const totalAmount = (baseAmnt*months)-(baseAmnt * months * (discount / 100))
    const payment =await Payment.create({
      razorpay_payment_id,
      razorpay_order_id,
      MembershipType:membership,
      AmountPaid:totalAmount,
      User:req.user._id
    })
    await payment.save()

    const user = await User.findById(req.user._id);
    let Nmonths = Number(months)
    // const tempdate = new Date()
    const currentDate = new Date();
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + Nmonths));
    // console.log("new Date",newDate)
    // console.log("new Date",new Date());
    // console.log("curr Date",tempdate)
    console.log("Mnths type",typeof(months),months);
    user.Membership = membership;
    user.membershipPurchaseDate = new Date()
    user.membershipExpiryDate = newDate
    user.verifiedSeal = VerifiedSeal
    user.trustStamp = trustStamp;
    user.SearchVisibility= SearchVisibility;
    user.isKeywordSearchEnable = isKeywordSearchEnable;
    
    await user.save();
    // console.log("payment and user",payment)
    // console.log("payment and user",user)
    //replace with domain name
    //can use handler instead of call back
    
    res.redirect(`http://localhost:3000/payment/success/${IsSuc}/${razorpay_payment_id}`)
  }else{
    IsSuc="no"
    res.redirect(`http://localhost:3000/payment/success/${IsSuc}/${razorpay_payment_id}`)

  }
  } catch (error) {
    res.redirect(`http://localhost:3000/payment/success/no/${razorpay_payment_id}`)
  }
  
}

const GetRazorPayKey = async (req,res)=>{
  res.status(200).json({
    key:process.env.RAZOR_PAY_API_KEY
  })
}

export {CheckOut,PaymentVerfication,GetRazorPayKey}