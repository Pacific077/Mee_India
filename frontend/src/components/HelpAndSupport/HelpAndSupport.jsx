import React, { useState } from 'react'

import { FcOnlineSupport } from "react-icons/fc";
import "./HelpAndSupport.css"
import ChatBotCont from '../ChatBotCont/ChatBotCont';
const HelpAndSupport = () => {
    const [ShowChatBot,setShowChatBot] =useState(false);
    const handleClick = () =>{
        setShowChatBot(true)
    }
  return (
    <div className='HelpAndSupport' >
        <FcOnlineSupport className='supportIcon' onClick={handleClick} />

        {ShowChatBot&&<ChatBotCont setShowChatBot={setShowChatBot}/>}
        
    </div>
  )
}

export default HelpAndSupport