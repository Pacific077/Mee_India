import jwt from "jsonwebtoken"
import Admin from "../Models/AdminModel.js"

const IsAuthenticated = async (req,res,next)=>{
    try {
        if(req.cookies.token){
            const decoded = jwt.verify(req.cookies.token,process.env.JWT_SECRET);
            req.user =await Admin.findById(decoded.id).select("-password")
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