import React, { Fragment } from 'react'
import '../css/Achievements.css'
import { Accordion, Badge, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Spa } from '../App';
import { useEffect } from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';

function Achievements() {
    let arr=information();
  return (
    <div id='achievements' className='ach-3' data-aos-duration='3000' data-aos="fade-up" >
         <Spa n={4}/>
        <h1  id='achievements-1' class="mx-auto">Achievements</h1>
        <Spa n={3}/>
        <div >
            <ul>
                <T obj={arr[0]} />
                <T obj={arr[1]} />
            
            
                <T obj={arr[2]} />
                <T obj={arr[3]} />
            </ul>
        </div>
        <Spa n={3}/>
    </div>
  )
}

function information(){
    let arr=["NTSE Stage 1 Qualifier, MP State rank: 29" , "SAT Score:1440" , "TOEFL Score:94" ,
    "Leetcoder: 50Days 2023 Badge"]

    return arr;
}
function T({obj}){

  return (
    <div className='text-center'>
        <a href="">
             <h2 className='ach-1'>
                {obj}
            </h2>
        </a>
    </div>
  );





}
export default Achievements