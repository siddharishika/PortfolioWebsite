import React from 'react'
import '../css/Intro.css'
import { Col, Row } from 'react-bootstrap'
import { Spa } from '../App'
import { useEffect } from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';
function Introduction() {
  return (
    <div  id='home' >
        <img src="" alt="" />
        <Spa n={3}/>
        
        <Row>
          <Col className='intro'>
              <h3 id='intro-1'>
                  Hello! I am Rishika.
              </h3>
              <h1 id='intro-2'>
                  DSA Enthusiast and Full Stack Developer
              </h1>
          </Col> 
          <Col>
          </Col>
        </Row>
        <Spa n={2}></Spa>
         <Row>
              <div className='scrol'>
                      Scroll for more
              </div>
              
         </Row>
    </div>
  )
}

export default Introduction