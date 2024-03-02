import dotenv from 'dotenv'

dotenv.config()
import { v2 as cloudinary } from 'cloudinary';

import {CloudinaryStorage} from "multer-storage-cloudinary"


//configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key :process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
})
//instance of cloudinary Storage
const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats:['jpg','jpeg','png'],
    params:{
        folder:'MeeIndia',
        transformation: [
            { width: 250, height: 250, crop: 'fill' } 
          ]
    }
})
export default storage