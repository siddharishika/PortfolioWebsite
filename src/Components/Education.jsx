import React, { Fragment } from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import '../css/Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spa } from '../App';
import { useEffect } from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';
function Education() {
    let arr=info();
  return (
    <div id='work' data-aos-duration='3000' data-aos="fade-up" >
         <Spa n={5}/>

        <Container className='sm'>
            <h1  className="work-and-edu" >WORK AND EDUCATION</h1>
            <br />
            <br />
            <Row>
                <Temp item={arr[0]} />
                <Temp item={arr[1]} />
            </Row>
            <Row>
                <br />
                <br />
                <br />

            </Row>
            <Row>
                <Temp item={arr[2]} />
                <Temp item={arr[3]} />
            </Row>
            
        </Container>    
    </div>
  )
}
function info(){
    let work=<i class="fa-sharp fa-solid fa-briefcase fa-2xl" ></i>
    let edu=<i class="fa-solid fa-graduation-cap fa-2xl" ></i>;
   
    let arr=[{
        icon: work,
        dat: "August,1-2023 - Jan,31-2024",
        org:"AIESEC In Pune" ,
        degre: "Social Manager",
        res:"",
        workDone:["International Relations Manager" , "Done Market Research" ,
        "Assiting Volunteers coming from abroard"] 
    },{
        icon: edu,
        dat: " August,23-2021 - Jul,31-2025",
        org:"MIT World Peace University" ,
        degre: "B. Tech. Computer Science and Engineering",
        res:"CGPA-9.25",
        workDone:["Operating Systems" , "Computer Networks" ," Database Management Systems",
        "Object Oriented Programming" , "Data Structures and Algorithms"] 
    }
    ,{
        icon: edu,
        dat: "April,01-2018 - May,31-2021",
        org:"Sarvodaya Senior Secondary School" ,
        degre: "12th Grade",
        res:"Percentage-89%",
        workDone: ["Physics" , "Chemistry" , "Mathematics"] ,
    },{
        icon: edu,
        dat: "April,01-2004 - May,31-2018",
        org:"St. Joseph's Convent" ,
        degre: "10th Grade",
        res:"Percentage-91%",
        workDone: ["English" , "Hindi" , "Mathematics" , "Science" , "Social Science"]
    }]
    
   //console.log(arr);
   return arr;
}
function Temp({item}){
    console.log("Mai hu item",item);
    return (
        <Fragment >
            <Col className='edu-2'>
                <Row>
                    {item.icon}
                </Row>
                <Row>
                    <br />
                </Row>
                <Row>
                    <h3 className='edu-1'>
                      {item.dat}
                    </h3>
                </Row>
                <Row  >
                    <h1 className='edu-3'>
                        {item.org}
                    </h1>
                </Row>
                <Row>
                    <h6 className='edu-3'>
                        {item.degre}
                    </h6>
                </Row>
                <Row className='result'>
                    {item.res}
                </Row>
                <Row>
                    <ul  className='edu-3'>
                                
                        {item.workDone.map((x,i)=>{
                            return (
                                <li className='edu-4' key={i}>{x}</li>
                            )
                        })}
                    </ul>
                </Row>
            </Col>
        </Fragment>
    )
}
export default Education