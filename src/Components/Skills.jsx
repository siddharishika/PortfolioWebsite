import React from 'react'
import '../css/Skills.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';
import { H } from 'react-headings';
import { Spa } from '../App';

function Skills() {
    let arr=inf();

  return (
    <div id='skills' className="contain-3" data-aos-duration='3000' data-aos="fade-up" >
        <Spa n={5}/>
        <Container  className='sm'>
            
            <h1  id="skills-1" class="mx-auto" >SKILLS</h1>
            <Spa n={3}/>
            <Row>
                <Col className='a'>
                    <Tem obj={arr[0]}/>
                </Col>
                <Col >
                    <Tem obj={arr[1]}/>
                </Col>
                <Col className='a'>
                    <Tem obj={arr[2]}/>
                
                </Col>
                <Col>
                    <Tem obj={arr[3]}/>
                </Col>
            </Row>
            
        </Container>
        <Spa n={3}/>
    </div>
  )
}
function inf(){
    let arr=[{
        no : '01',
        sk: "Frontend Technologies",
        pts:["HTML 5" ,"CSS" ,"REACT JS" ,"Babel","HTML DOM", "JQuery"]
        
  
    },
    {
        no : "02",
        sk: "Backend Technologies" ,
        pts:["Node JS" ,"Express JS" , "Javascript " ,
         " Restfull Routing" ,  "Rest APIs" ," Mongoose"]
    },
    {
        no:"03" ,
        sk: "Data Structures and Algorithms",
        pts:["DSA in JAVA" , "Object Oriented Programming in Java"]
    },
    {
        no:"04" ,
        sk: "Database Management Systems" ,
        pts:["Mongo DB" ," MySQL"]
    }]
    return arr;
}
function Tem({obj}){
    return(
        <Col >
            <Row className='sk-1'>
                {obj.no}
            </Row>
            <Row className='sk-3 '>
                {obj.sk}
            </Row>
            <Row>
                <ul className='sk-2'>
                    {obj.pts.map((item, index)=>{
                        return (<li key={index} className=' sk-4'>
                            {item}
                        </li>)
                    })}
                </ul>
            </Row>
        </Col>
    )
}

export default Skills