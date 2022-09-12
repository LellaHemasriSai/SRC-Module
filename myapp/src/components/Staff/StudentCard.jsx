import React, { useEffect, useState } from 'react';
import "./staff.css"

function onApply(e) {
  console.log("Applied") }

export default function StudentCard(props) {
  let start=new Date(props.start);
  console.log(start);
  let sDate=start.getDay()+"/"+start.getMonth()+"/"+start.getFullYear();
  let end=new Date(props.end);
  let eDate=end.getDay()+"/"+end.getMonth()+"/"+end.getFullYear();

  
  return (
    <div className='student_content'>
      <div class="content">
      <div className='header_text'>
        <span style={{ fontSize:"2.3rem" , fontWeight:"900"}}>{props.name}</span>
      </div>
          <div>
            <span>
              {props.id}
            </span>
          </div>
            <div>
            <span>
              {props.type}
            </span>
          </div>
          <div className='application_text'>
            <span className='application_items'>
              <p className='items_p'>Faculty Name</p>
              <span>faculty</span>
              </span>
            <span className='application_items'>
              <p className='items_p'>Salary Details</p>
              <p>{props.details}</p>
            </span>
            <span className='application_items'>
              <p className='items_p'>Start Date</p>
              <p>{sDate}</p>
            </span>
            <span className='application_items'>
              <p className='items_p'>End Date</p>
              <p>{eDate}</p>
            </span>
          </div>
      <div className='home_text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <button onClick={onApply} className='apply_btn'>Apply Now</button>
	</div>
  </div>
  )
};
