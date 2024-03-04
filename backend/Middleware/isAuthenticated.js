import jwt from "jsonwebtoken"
import User from "../Models/UserModel.js";

const IsAuthenticated = async (req,res,next)=>{
    if(req.cookies.token){
        //verify the token
        const decoded = jwt.verify(req.cookies.token,process.env.JWT_SECRET);
        // console.log("decoded",decoded);
        //not necessary
        //req.user = decoded
        req.user =await User.findById(decoded.id).select("-password")
        return next();
    }else{
        return res.status(400).json({
            message:"Inavlid User!! Please login" 
        })
    }
}

export default IsAuthenticated;