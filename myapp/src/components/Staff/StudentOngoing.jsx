import React from 'react'
import {StudentMainNav} from '../App.jsx'
import "./ongoing.css"
import ProjectCard from './ProjectCard.jsx';
import ongoing from "../../images/ongoing.svg"

function StudentOngoing(props) {
  return <div className="wrapper hover_collapse">
  <StudentMainNav></StudentMainNav>
  	<div className="main_container">
	<div  className='head_wrap' style={{marginLeft:"10%"}}>
            <span><img src={ongoing} style={{ width: "35px", height: "35px" }} alt="completed"/></span>
            <span><h1 id="head_text">Ongoing Projects</h1></span>
    </div>
	<section class="card-container">
		<ProjectCard></ProjectCard>
		<ProjectCard></ProjectCard>
		<ProjectCard></ProjectCard>
	</section>
	</div>
	</div>
}

export default StudentOngoing;