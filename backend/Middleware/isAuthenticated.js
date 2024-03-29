import jwt from "jsonwebtoken"
import User from "../Models/UserModel.js";

const IsAuthenticated = async (req,res,next)=>{

    try {
        if(req.cookies.token || req.headers.authorization){
            const token = req.cookies.token || req.headers.authorization;
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.user =await User.findById(decoded.id).select("-password")
            return next();
        }else{
            return res.status(400).json({
                message:"Inavlid User!! Please login" 
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Invalid token"
        })
    }
   
}

export default IsAuthenticated;