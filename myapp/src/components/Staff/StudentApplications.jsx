import React from 'react'
import Container from '../Navbar/components/Container';
import {StudentMainNav} from '../App.jsx'
import "./staff.css"
import StudentCard from './StudentCard';
import applications from "../../images/applications.svg"
import ApplicationCard from './ApplicationCard';


function StudentApplications(props) {
  return <div className="wrapper hover_collapse">
  <StudentMainNav></StudentMainNav>
  	<div class="main_container">
	<div class="container">
    <div class="main">
    <div className='head_wrap'>
    <span><img src={applications} style={{ width: "40px", height: "40px" }} alt="applications"/></span>
    <span><h1 id="head_text">Applications</h1></span>
    </div>
    <ApplicationCard></ApplicationCard>
</div>
	</div>
  </div>
  </div>
}

export default StudentApplications;