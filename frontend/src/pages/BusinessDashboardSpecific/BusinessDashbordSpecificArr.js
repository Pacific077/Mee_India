import { FaShoppingBag } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { MdContacts } from "react-icons/md";

import { FaClipboardList } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineReviews } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

import { HiOutlineSpeakerphone } from "react-icons/hi";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const BusinessDashboardSpecificArr = [
    {
        tag:"Enquiries",
        icon:MdContacts,
        color:"#FAEBD7",
        locate:"enquiry",
        membership:"Shop List",
        membershipValue:2
    },
    {
        tag:"Edit Name",
        icon:FaShoppingBag,
        color:"#FAEBD7",
        locate:"editName",
        membership:"Free List",
        membershipValue:1
    },
    {
        tag:"Keywords",
        icon:HiOutlineSpeakerphone,
        color:"#E6E6FA",
        locate:"addKeywords",
        membership:"Pro",
        membershipValue:5
    },
    {
        tag:"Photos",
        icon:IoMdPhotos,
        color:"#F5F5DC",
        locate:"editPhoto",
        membership:"Free List",
        membershipValue:1
    },
    {
        tag:"Catalouge",
        icon:FaClipboardList,
        color:"#AFEEEE",
        locate:"Catalouge",
        membership:"Standard",
        membershipValue:3
    },
    {
        tag:"Offer",
        icon:BiSolidOffer,
        color:"#FFE5B4",
        locate:"Offers",
        membership:"Free List",
        membershipValue:1
    },
    {
        tag:"Services",
        icon:MiscellaneousServicesIcon,
        color:"#FFE5B4",
        locate:"Services",
        membership:"Free List",
        membershipValue:1
    },
    {
        tag:"Reviews",
        icon:MdOutlineReviews,
        color:"#FFFFE0",
        locate:"Reviews",
        membership:"Free List",
        membershipValue:1
    },
    {
        tag:"website",
        icon:CgWebsite,
        color:"#F5FFFA",
        locate:"website",
        membership:"Standard",
        membershipValue:3
    },
   

]

export default BusinessDashboardSpecificArr