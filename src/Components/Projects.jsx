import React from 'react'
import '../css/Projects.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { H } from 'react-headings';
import { Figure } from 'react-bootstrap';
import { Spa } from '../App';
import { useEffect } from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';
function Projects() {
   let arr= inform();
  return (
    <div id='projects' data-aos-duration='3000' data-aos="fade-up" >
        <Spa n='5'/>
        <Container className='sm'>
            <h3 id="pros" class="mx-auto" >SELECTED PROJECTS</h3>
            <Spa n='2' />
            <H id='pros-2' class="mx-auto">
                Here are some of my selected projects I have done lately. Feel free to check them out.
            </H>
            <br />
        
           <Container className='pro-3' >
                <Row>
                    <X obj={arr[0]} />
                    <X obj={arr[1]} />
                    <X obj={arr[2]} />

                </Row>
                

           </Container>
        </Container>
    </div>
  )
}
function X({obj}){
        return (
            <Col className='pro-4' >
                <Row >
                    <span >
                        <i   id='projects-icon' class="fa-sharp fa-solid fa-list-check fa-2xl"></i>
                        <span className='pro-5'>    {obj.naam}</span>
                    </span>
                </Row>
                
                    <ul className='techs'>

                         Technologies Used:{
                            obj.tech.map((item,index)=>{
                                return(
                                    <li className='techs' key={index}>
                                        {item}
                                    </li>
                                )
                            })
                         }   
                    </ul>
                
                <Row>
                    <p>
                        <a href={obj.github}>
                                <i class="fa-brands fa-github fa-2xl" ></i>
                        </a>
                    
                        <a href={obj.linkk}>
                            <i class="fa-solid fa-link fa-2xl"></i>
                        </a>
                    </p>    
                </Row> 
                  
            </Col>

        )
   
    
}

function inform(){
    let arr=[{
        naam: 'Portfolio Website',
        tech: ['HTML','CSS','React','Babel','Bootstrap','React-Bootstrap'],
        github:"" ,
        linkk:""

    },
    {
        naam: 'Spotify Clone',
        tech:['HTML','CSS','Bootstrap'],
        github: "https://github.com/siddharishika/Spotify-Clone",
        linkk: "https://spotify-clone-rishikasiddha.netlify.app/"
    },
    {
        naam: 'Parking System',
        tech: ['C++','OOPS'],
        github:"https://github.com/siddharishika/Parking-System" ,
        linkk:""
    }]
    return arr;
}


export default Projects