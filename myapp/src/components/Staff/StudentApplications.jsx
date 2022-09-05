import React from 'react'
import Container from '../Navbar/components/Container';
import {StudentMainNav} from '../App.jsx'
import "./staff.css"
import StudentCard from './StudentCard';
import applications from "../../images/applications.svg"
function StudentApplications(props) {
  return <div className="wrapper hover_collapse">
  <StudentMainNav></StudentMainNav>
  	<div class="main_container">
	<div class="container">
    <div class="main">
    <div className='head_wrap'>
    <span><img src={applications} style={{ width: "40px", height: "40px" }} alt="opportunities"/></span>
    <span><h1 id="head_text">Applications</h1></span>
    </div>
    <div className='student_content'>
      <div class="content">
          <h2>Application - 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
      </div>
      <div className='student_content'>
      <div class="content">
				  <h2>Application - 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
      </div>
      <div className='student_content'>
      <div class="content">
		    <h2>Application - 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
       </div>
</div>
	</div>
  </div>
  </div>
}

export default StudentApplications;