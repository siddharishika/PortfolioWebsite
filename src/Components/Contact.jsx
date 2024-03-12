import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../css/Contact.css'
import { Spa } from '../App'
import { useEffect } from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';

function Contact() {
  return (
    <div>
        <Templ />
    </div>
  )
}
function Templ(){
    return (
        <div id='contact' className='con-2' data-aos-duration='3000' data-aos="fade-up" >
             <Spa n={5}/>
            <h3 className='con-1'>
                GET IN TOUCH
            </h3>
            <h1>

            </h1>
            
            <Spa n={2}/>
            <Container>
                <h1 className='con-3'>
                    I'm happy to connect, listen and help. Let's work together and build something awesome. 
                    Let's turn your idea to an even greater product. 
                </h1>
                <Spa n={4}/>
                <Row>
                    <Col>
                        <h4 className='con-6'>
                            Call/Email  Me
                        </h4>
                        <h1 className='con-4'>
                            +91-6376226754  siddharishika@gmail.com
                        </h1>
                    </Col>
                    <Col>
                        <h4 className='con-6'>
                            Social
                        </h4>
                        <h2>
                            <p>
                                <a className='con-5' href="https://www.linkedin.com/in/rishika-siddha-b7a479251/">
                                    LinkedIn /
                                </a>
                                <a className='con-5' href="https://github.com/siddharishika">
                                    Github /
                                </a>
                                <a className='con-5' href="https://leetcode.com/siddharishika/">
                                    Leetcode
                                </a>
                            </p>
                        </h2>
                    </Col>
                </Row>
            </Container>
            <Spa n={5}/>
        </div>
    )
}
export default Contact