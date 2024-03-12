// in ActionProvider.jsx
import React, { Fragment } from 'react';
import '../../css/Chatbott.css'
let arr=[
    {
        text: "Just Saying Hello!" ,
         id: 1
    },
    {
        text: "How can I reach out to you?" , 
        id: 2
    },
    {
        text: "What techstack do you use?" ,
         id: 3 
    },
    {
        text: "Daily Reminder" ,
         id: 4 
    },
    ]
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
        "Hello, nice to meet you",
        {
          widget: 'opts',
        }
      );
    setState((prev) => (
        
        {
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleGarbage = () => {
    const botMessage = createChatBotMessage(
        "Please select an option",{
            widget:"opts" 
            
        }
       );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
    arr[0].handler=()=>{
    handleJustSayingHello();
    }
    var handleJustSayingHello = () => {
        
    const botMessage = createChatBotMessage("Hello");
       const botMessage2 = createChatBotMessage(
        "Thanks for saying hi 😆" 
       );
       const botMessage3 = createChatBotMessage(
        "I hope you enjoyed looking at my work."
       );
    const botMessage4 = createChatBotMessage(
        "Can I help you with anything else?",{
            widget:"opts"     
        }
       );
       
    setState((prev) => (
        
        {
      ...prev,
      messages: [...prev.messages, botMessage,botMessage2,botMessage3,botMessage4],
    }));
  };
  arr[1].handler=()=>{
    handleReachOut();
    }
    var handleReachOut = () => {
    const botMessage = createChatBotMessage("For quick response, hit me up on LinkedIn");
       const botMessage2 = createChatBotMessage(
        "Scroll to the bottom of the page for the links." 
       );
       const botMessage3 = createChatBotMessage(
        "I'll try my best to get back to you."
       );
       const botMessage4 = createChatBotMessage(
        "Or you can send me an email at siddharishika@gmail.com"
       );
    const botMessage5 = createChatBotMessage(
        "Anything else?",{
            widget:"opts"     
        }
       );
       
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage,botMessage2,botMessage3,botMessage4,botMessage5],
    }));
  };
  arr[2].handler=()=>{
    handleTechStack();
    }
    var handleTechStack = () => {
    const botMessage = createChatBotMessage("I am currently working in NodeJs and ReactJs");
       const botMessage2 = createChatBotMessage(
        "I love to work with these technologies. 😊" 
       );
       const botMessage3 = createChatBotMessage(
        "In the Skills section, you can find more."
       );
    const botMessage5 = createChatBotMessage(
        "Anything else?",{
            widget:"opts"     
        }
       );
       
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage,botMessage2,botMessage3,botMessage5],
    }));
  };
  arr[3].handler=()=>{
    handleDailyReminder();
    }
    var handleDailyReminder = () => {
    const botMessage = createChatBotMessage("Dream big and work hard to achieve your goals 🌌");
       const botMessage2 = createChatBotMessage(
        "Wishing this daily reminder brings you more joy and happiness." 
       );
    const botMessage5 = createChatBotMessage(
        "Is there more on your mind?",{
            widget:"opts"     
        }
       );
       
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage,botMessage2,botMessage5],
    }));
  };
  
 
  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
        
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleGarbage,
            handleJustSayingHello
          },
        });
      })}
    </div>
  );
};


export function Opt(){
    
    
    return(
        <div>
            {
                arr.map((item)=>{
                    return(
                        <button className="widget-button" key={item.id} onClick={item.handler}>
                            {item.text}
                        </button>
                    )
                })
            }
        </div>
    )
}
export default ActionProvider;