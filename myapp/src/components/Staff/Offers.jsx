import React from 'react'
import Container from '../Navbar/components/Container';
import {StudentMainNav} from '../App.jsx'
import "./staff.css"
import StudentCard from './StudentCard';
import offers from "../../images/offers.svg"
import applications from "../../images/applications.svg"
import opportunites from "../../images/opportunites.svg"
import arrow from "../../images/arrow.svg"
import { Link, useParams } from 'react-router-dom';
function Opportunites(props) {
    const {username}=useParams();
  return <div className="wrapper hover_collapse">
  <StudentMainNav></StudentMainNav>
  	<div class="main_container">
	<div class="container">
    <div class="main">
        <div className='head_wrap'>
        <span><img src={offers} style={{ width: "40px", height: "40px" }} alt="offers"/></span>
        <span><h1 id="head_text">Offers Recieved</h1></span>
        </div>
        <h2 style={{ margin:"5%", color:"GrayText"}} >There are no job offers</h2>
        <div className='student_box'>
        <ul>
        <li className='list_head student_li'>0 Offers</li>
        <Link className='student_link' to={"/Student/"+username+"/opportunites"}>
        <li className='student_li'><div className='head_wrap'>
        <span><img src={opportunites} style={{ width: "20px", height: "25px" }} alt="opportunities"/></span>
        <span><h3 className='li_text'>Opportunites</h3></span>
        <span className='arrow'><img src={arrow} style={{ width: "20px", height: "25px" }} alt="opportunities"/></span>
        </div></li></Link>
        <Link  className='student_link' to={"/Student/"+username+"/applications"}>
        <li className='student_li'><div className='head_wrap'>
        <span><img src={applications} style={{ width: "25px", height: "25px" }} alt="applications"/></span>
        <span><h3 className='li_text'>Applications</h3></span>
        <span className='arrow'><img src={arrow} style={{ width: "19px", height: "20px" }} alt="opportunities"/></span>
        </div></li>
        </Link>
        </ul>
        </div>
    </div>
  </div>
  </div>
  </div>
}

export default Opportunites;