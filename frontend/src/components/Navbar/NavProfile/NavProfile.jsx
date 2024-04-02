import React, { useContext, useEffect, useState } from 'react'
import "./NavProfile.css"
import { CgProfile } from "react-icons/cg";
import { IoDiamondOutline } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5"
import { IoHomeOutline } from "react-icons/io5";
import { GiArchiveRegister } from "react-icons/gi";
import { IoLanguageSharp } from "react-icons/io5";
// import UserContext from '../../../context/UserInfo/UserContext'
import { useNavigate } from 'react-router-dom';
import { ProfileApi } from '../../../apis/UserApi';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
const NavProfile = ({handleFreeListingClick}) => {
    //using usecontext will cause delay
    const [user,setUser] = useState('')
    const [IsDropDownVis,setIsDropDownVis] = useState(false)
    const navigate = useNavigate()
    const MoveToProfile = () => {
        setIsDropDownVis(!IsDropDownVis)
    }
    const fetchData = async ()=>{
    try{
    const resp = await ProfileApi()
    setUser(resp.data.user);
    }catch(e){
      console.log(e);
      toast.error("Something went Wrong")
    }
  };
  useEffect(() => {
    const token = Cookies.get('token');
    if(token){
      fetchData();
    //   setIsLoggedIn(true);
    }
  }, []);
    return (
        <div className="navProfile" onClick={MoveToProfile}>
            <img className="profilePic" src={user ? user.profileImage : ''} />

            {IsDropDownVis&&<div class="dropdown-content-profile">
                <div className='dropdownContentItems mainIcons'>
                    <IoLanguageSharp className='dropsownICons'/>
                    <p >English</p>
                </div>
                <div onClick={()=>navigate("/")} className='dropdownContentItems mainIcons'>
                    <IoHomeOutline className='dropsownICons'/>
                    <p >Home</p>
                </div>
                <div onClick={handleFreeListingClick} className='dropdownContentItems mainIcons'>
                    <GiArchiveRegister className='dropsownICons'/>
                    <p >FreeListing</p>
                </div>
                <div onClick={()=>navigate("/userdashboard")} className='dropdownContentItems'>
                    <CgProfile className='dropsownICons'/>
                    <p >Profile</p>
                </div>
                <div className='dropdownContentItems'>
                <IoWalletOutline  className='dropsownICons'/>
                    <p>Wallet</p>
                    
                </div>
                <div onClick={()=>navigate("/pricing-details")} className='dropdownContentItems'>
                <IoDiamondOutline className='dropsownICons'/> 
                    <p>Upgrade</p>
                    
                </div>
                {user && user.role === "Admin" && (
                        <div onClick={() => navigate('/admin/dashboard')} className='dropdownContentItems'>
                            <RiAdminFill className='dropsownICons'/>
                            <p>Admin</p>
                        </div>
                    )}
            </div>}
            
        </div>
    )
}

export default NavProfile