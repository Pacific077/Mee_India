import { FaShoppingBag } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineReviews } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaPhotoVideo } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const BusinessDashboardSpecificArr = [
    {
        tag:"Enquiries",
        icon:MdContacts,
        color:"#FAEBD7",
        locate:"enquiry"
    },
    {
        tag:"Edit Name",
        icon:FaShoppingBag,
        color:"#FAEBD7",
        locate:"editName"
    },
    {
        tag:"Advertise",
        icon:HiOutlineSpeakerphone,
        color:"#E6E6FA",
        locate:"editName"
    },
    {
        tag:"Photos",
        icon:IoMdPhotos,
        color:"#F5F5DC",
        locate:"editPhoto"
    },
    {
        tag:"Catalouge",
        icon:FaClipboardList,
        color:"#AFEEEE",
        locate:"Catalouge"
    },
    {
        tag:"Offer",
        icon:BiSolidOffer,
        color:"#FFE5B4",
        locate:"Offers"
    },
    {
        tag:"Services",
        icon:MiscellaneousServicesIcon,
        color:"#FFE5B4",
        locate:"Services"
    },
    {
        tag:"Reviews",
        icon:MdOutlineReviews,
        color:"#FFFFE0",
        locate:"Reviews"
    },
    {
        tag:"website",
        icon:CgWebsite,
        color:"#F5FFFA",
        locate:"website"
    },
   

]

export default BusinessDashboardSpecificArr