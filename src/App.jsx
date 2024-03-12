import React from 'react'
import MainNavigation from './Components/MainNavigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './Components/Introduction';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chatbott from './Components/chatbott/Chatbott';
import ChatBotIcon from './Components/chatbott/ChatBotIcon';

function App() {
  return (
    <div>
      
      <MainNavigation />
      <Introduction />
      <AboutMe />
      <Education />
      <Skills />
      <Projects/>
      <Achievements />
      <Contact />
      <ChatBotIcon />
      
    </div>
  )
}
export function Spa({n}){
  let arr=[];
  for(let i=0;i< n; i=i+1){
      arr.push(<br key={i} />);
  }
  return(
      arr
  )
}
export default App