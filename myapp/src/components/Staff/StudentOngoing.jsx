import React from 'react'
import {StudentMainNav} from '../App.jsx'
import "./ongoing.css"
function StudentOngoing(props) {
  return <div className="wrapper hover_collapse">
  <StudentMainNav></StudentMainNav>
  	<div className="main_container">
		<div className="container">
   
<section class="card-container">
	<div class="card_ongoing">
		<h1>Card #1</h1>
	</div>

	<div class="card_ongoing">
		<h1>Card #2</h1>
	</div>

	<div class="card_ongoing">
		<h1>Card #3</h1>
	</div>
	
	<div class="card_ongoing">
		<h1>Card #4</h1>
	</div>

	<div class="card_ongoing">
		<h1>Card #5</h1>
	</div>

	<div class="card_ongoing">
		<h1>Card #6</h1>
	</div>

</section>

	</div>
	</div>
  </div>
}

export default StudentOngoing;