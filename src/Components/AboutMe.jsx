import React from 'react'
import '../css/AboutMe.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';
// import '../../node_modules/aos/dist/aos.js';
import { Spa } from '../App';
import { useEffect } from 'react';
export default function AboutMe() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div id='aboutme' data-aos-duration='3000' data-aos="fade-up" >
        <Spa n={5}/>
        
        
        <Container className='sm'>
            <h1  className="about-me" >ABOUT ME</h1>
            
            <blockquote id='abt-1' class="blockquote text-center">
                <h3 className='abt-3'>CURIOSITY &#62; IMAGINATION &#62; KNOWLEDGE</h3>
                <footer class="blockquote-footer"><cite className='me' title="Source Title">Rishika Siddha</cite></footer>
            </blockquote>
            <Row>
                <Col className='abt-2'>
                
                    <Row className='abt-4'>
                        I am a 21-year old developer living in India. I just started coding just because everyone told me to. However, along the journey, I did not realise when I fell in love with it.
                        Its the logic that gets to me. The passion to solve problems and learn everyday is what makes me keep going.
                    </Row>
                    <Row className='abt-4'>
                        The best thing I find about coding is everday there's a new problem to solve. 
                        I know sometimes it gets irritating but that is what makes us a coder.  
                    </Row>
                </Col >
                <Col className='abt-2'>
                    
                   <Row className='abt-4'>
                        I started learning full-stack out of a coincidence, but when I started making my own website, I realised that this is what I was waiting for.
                        To make something, which I never thought I could, just blew my mind. Even today writing this website's code amazes me.
                   </Row>
                   <Row className='abt-4'>
                        At last, I try my best to in everything I do and that is what brought me here. However, I have a 
                        long way to go, and I hope all of you will help me along my Journey.
                   </Row>
                  
                </Col>
            </Row>
    
            <Row>
                
            </Row>
        </Container>
    </div>
  )
}
