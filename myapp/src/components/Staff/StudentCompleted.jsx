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
		<CompletedCard
    id="ID623"
    start="12/09/2022"
    end="18/12/2022"
    ></CompletedCard>
    		<CompletedCard
    id="ID001"
    start="20/09/2022"
    end="12/11/2022"
    ></CompletedCard>
    		<CompletedCard
    id="ID020"
    start="02/07/2022"
    end="05/10/2022"
    ></CompletedCard>
    		<CompletedCard
    id="ID031"
    start="17/06/2022"
    end="03/12/2022"
    ></CompletedCard>
	</section>
	</div>
	</div>
  </div>
  </div>
}

export default StudentCompleted;