import React, { useState } from 'react'
import { GiBoltEye } from "react-icons/gi";
import { GiBleedingEye } from "react-icons/gi";
import "./CreateNewAdmin.css"
import { CreateNewAdminAccount } from '../../apis/AdminApis';
import axios from 'axios';
import { toast } from 'react-toastify';
const CreateNewAdmin = () => {
    const [showPass,setShowPass] = useState(false);
    const [name,setName] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const handleSubmit = async ()=>{
        try {
            const resp = await CreateNewAdminAccount({name, email, password });
            if (resp.status === 200) {
              toast.success("Admin registered Successfully");
            //   toast.success("Please Login to continue");
            }
          } catch (error) {
            if (axios.isAxiosError(error) && error.response.status === 400) {
              error.response.data.err.map((msg) => {
                toast.error(msg);
              });
            } else if(axios.isAxiosError(error) && error.response.status === 401){
              toast.error("Invalid Id or Password");
            }else{
              toast.error("Something went wrong")
            }
          }
    }
  return (
    <div className='createNewAdmin'>
        <h1 className='createAdminHead'>Create New Admin</h1>
        <div className="createAdminform">
            <div className="createAdminformItems">
                <p>Name</p>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='John Doe' />
            </div>
            <div className="createAdminformItems">
                <p>Email</p>
                <input type="text" value={email}  onChange={(e)=>setemail(e.target.value)}  placeholder='example@abc.com' />
            </div>
            <div className="createAdminformItems">
                <p>Password</p>
                <div className="passandLock">
                <input value={password} onChange={(e)=>setpassword(e.target.value)} type={showPass?"text":"password"} />
                {showPass?<GiBleedingEye onClick={()=>setShowPass(false)}  className='createAdminEyeIcon' />:<GiBoltEye onClick={()=>setShowPass(true)}  className='createAdminEyeIcon' />}
                {/* <GiBoltEye  className='createAdminEyeIcon' /> */}
                </div>
            </div>
        </div>
        <button onClick={handleSubmit} className='createAdminBtn'>Create</button>
    </div>
  )
}

export default CreateNewAdmin