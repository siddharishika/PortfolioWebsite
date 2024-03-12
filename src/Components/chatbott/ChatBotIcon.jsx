import React from 'react'
import Chatbott from './Chatbott'
import '../../css/Chatbott.css'
import { TeenyiconsChatSolid } from './TeenyiconsChatSolid';
import { useState } from 'react';
function ChatBotIcon() {
    const [toggle, setToggle] = useState(true);
    
  return (
    <div>
        {(toggle && <Chatbott/>) }
        <button  className='ic' onClick={()=>{
            setToggle(!toggle)
        }} ><TeenyiconsChatSolid/></button>
    </div>
    )
}


export default ChatBotIcon