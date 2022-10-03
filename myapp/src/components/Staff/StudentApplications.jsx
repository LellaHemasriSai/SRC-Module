import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {StudentMainNav} from '../App.jsx'
import "./staff.css"
import applicationsImg from "../../images/applications.svg"
import ApplicationCard from './ApplicationCard';


function StudentApplications(props) {
   const [applications, setApplications] = useState([])

  useEffect(() => {
    axios.post('http://localhost:3001/sendApplications')  // change the server name
      .then(res => {
        console.log('Applications Data: ', res.data.data)
        setApplications(res.data.data)

      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return <div className="wrapper hover_collapse">
  <StudentMainNav></StudentMainNav>
  	<div class="main_container">
	<div class="container">
    <div class="main">
    <div className='head_wrap'>
    <span><img src={applicationsImg} style={{ width: "40px", height: "40px" }} alt="applications"/></span>
    <span><h1 id="head_text">Applications</h1></span>
    </div>
  {/*  {applications.length===0? <h2 style={{ marginLeft:"auto",marginRight:"auto",
            marginTop:"10%" , color:"GrayText"}}>You've No Applications</h2> :
            applications.map((h,index)=>{
				     return <ApplicationCard
                 name="Project Name"
                ID="ID234"
                facultyName="faculty"
                details="10000"
                description="this is a project"
                _id=
        />
			})}  */}
    <ApplicationCard
    name="Project Name"
    ID="ID234"
    facultyName="faculty"
    details="10000"
    description="this is a project"
    />
</div>
	</div>
  </div>
  </div>
}

export default StudentApplications;