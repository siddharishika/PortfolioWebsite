// in config.js
import { Fragment } from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import { Opt } from './ActionProvider';
import '../../css/Chatbott.css'
import { Icons8UserFemale } from './Icons8UserFemale';
import { MaterialSymbolsPerson } from './MaterialSymbolsPerson (1)';
const botName = 'Rishika bot';


const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`),
  createChatBotMessage("I am here to assist you with any questions related to Rishika's Work"),
   createChatBotMessage("How can I help you today?",{
    widget: "opts"
  })],
  widgets: [
    {
        widgetName: 'opts',
       widgetFunc:  (()=>{
        
        return (
            <Opt  />
        )
       }),
       mapStateToProps: [],
    }
    
],customComponents: {
    // Replaces the default header
   header: () => <div className='contain' style={{ backgroundColor: 'black', padding: "5px", 
   borderRadius: "3px" ,color:"white" 
   }}><div className='tex'>
        Chat with Rishika bot 
    </div>
    <button className='btn' onClick={close}>X</button></div> ,
    botAvatar:()=>{
        return <Icons8UserFemale/>
      },
      userAvatar:()=>{
        return <MaterialSymbolsPerson/>
      },
    
},
  botName: botName,
  
  userAvatar:()=>{
   return  <Icons8UserFemale/>
  }
}
function close(){
    let x=document.querySelector('#chatt')
        console.log(x);
        x.setAttribute("style", "visibility:hidden;");
}
export default config;