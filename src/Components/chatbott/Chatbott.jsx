import React from 'react'
import 'react-chatbot-kit/build/main.css'
import '../../../node_modules/react-chatbot-kit/build/main.css'
import '../../css/Chatbott.css'
import { Chatbot } from 'react-chatbot-kit';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import { ReactDOM } from 'react';
function Chatbott() {

    // let x=ReactDOM.getElementsByClassName("react-chatbot-kit-chat-input-container");
    // console.log(x);
   
  return (
    <div id='chatt'>
        <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        
        />
    </div>
  )
}

export default Chatbott