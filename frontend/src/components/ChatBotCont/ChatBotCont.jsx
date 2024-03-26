import React, { useContext, useState } from 'react'
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { GiCrossedBones } from "react-icons/gi";
import {toast} from "react-toastify"
import  "./ChatBotCont.css"
import { SendQueryToAdmin } from '../../apis/UserApi';
import UserContext from '../../context/UserInfo/UserContext';
const ChatBotCont = ({setShowChatBot}) => {
    const [question,setQuestion] = useState("")
    const userCont = useContext(UserContext);
    const {user} = userCont;
    const handleSubmit  =async ()=>{
        try {
            const resp = await SendQueryToAdmin({question,UserId:user._id})
            if(resp.status===200){
                toast.success("Query Sent")
                setShowChatBot(false);
            }
        } catch (error) {
            toast.error("Something Went Wrong")
        }
        console.log("details",question,user._id)
    }
  return (
    <div className="chatBotCont">
            <div className="chatbotHeader">
            <GiCrossedBones onClick={()=>setShowChatBot(false)} className='ChatBotCrossIcon'/>
                <div className="ChtHeadleft">
                <MdMarkUnreadChatAlt className='ChatIcon' />

                </div>
                <div className="ChtHeadRight">
                    <h3>ChatBot</h3>
                    <h5>Online</h5>
                </div>
              
            </div>
            <div className="ChatBotBody">
                <p className="chatbotmessage">Hello there! 👋 It's nice to meet you!</p>
                <p className="chatbotmessage">What brings you here today? Please ask your Query with our team .We will reach you out within 24 hours 🪄</p>
            </div>
            <div className="ChatbotInput">
                <input onChange={(e)=>setQuestion(e.target.value)}  type="text" placeholder='Type Your Query Here' />
                <IoMdSend onClick={handleSubmit} className='ChatbotSenBtn'/>
            </div>
        </div>
  )
}

export default ChatBotCont