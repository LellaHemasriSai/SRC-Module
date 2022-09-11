import React from 'react'
import Container from '../Navbar/components/Container';
import {StudentMainNav} from '../App.jsx'
import HomeCard from "./HomeCard.jsx"
const homedata=[
  {
    key:1,                 /* data must have an unique key */
    projectName:'xyz',
    projectCode:'',
    projectType:'',
    FacultyName:'',
    startDate:'',
    endDate:'',
    salary:'',
    description:'',
  }
]
function StudentHome(props) {
  return <div className="wrapper hover_collapse">
  <StudentMainNav></StudentMainNav>
  	<div class="main_container">
		<div class="container">
    <div class="main">
    <HomeCard></HomeCard>
    <HomeCard></HomeCard>
    <HomeCard></HomeCard>
    <HomeCard></HomeCard>
    {
      homedata.map=(h)=>{
        <HomeCard></HomeCard>
      }
    }
		</div>
	</div>
  </div>
  </div>
}

export default StudentHome;