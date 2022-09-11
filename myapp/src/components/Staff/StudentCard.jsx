import React, { useEffect, useState } from 'react';
import "./staff.css"

function onApply(e) {
  console.log("Applied") }

export default function StudentCard(props) {
  const [ state, setState ] = useState([]);

    function addApplication(e) {
    const object = { name: '',id:'', faculty:'',quals:''};
    setState([...state, object]);
  }

  return (
 <li class="cards_item">
      <div class="card_student">
        <div class="card_content">
          <br></br>
          <p class="card_text">
          <span className="head_content">Project Code</span><span>{props.id}</span><br></br><br></br>
          <span className="head_content">Project Name</span><span>{props.name}</span><br></br><br></br>
          <span className="head_content">Faculty Name</span><span>{props.faculty}</span><br></br><br></br>
          <span className="head_content">Qualifications</span><span>{props.quals}</span><br></br><br></br>
          <span className="head_content" >Salary Details</span><span></span><br></br>
          </p>
          <button class="btn card_btn" onClick={onApply
          ()}>Apply Now</button>
        </div>
      </div>
    </li>
  );
};
