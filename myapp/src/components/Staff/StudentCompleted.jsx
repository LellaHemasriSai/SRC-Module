import React from 'react'
import {StudentMainNav} from '../App.jsx'
import completed from "../../images/completed.svg"
import CompletedCard from "./CompletedCard.jsx"
function StudentCompleted(props) {
  return <div className="wrapper hover_collapse">
  <StudentMainNav></StudentMainNav>
  	<div className="main_container">
	<div className="container">
    <div className="main">
    <div className='head_wrap'>
    <span><img src={completed} style={{ width: "40px", height: "35px" }} alt="completed"/></span>
    <span><h1 id="head_text">Completed Projects</h1></span>
    </div>
    <section class="card-container">
		<CompletedCard></CompletedCard>
    <CompletedCard></CompletedCard>

    <CompletedCard></CompletedCard>
    <CompletedCard></CompletedCard>
	</section>
	</div>
	</div>
  </div>
  </div>
}

export default StudentCompleted;