import React, { useState,useEffect } from "react";
import axios from "axios";
import "../Staff Recruitment/staff.css"
import { MainNav } from '../../App'
import application from "../../../images/applications.svg"
import FacultyApplicationCard from './FacultyApplicationCard'

export default function Applications() {
  const [applications, setApplications] = useState([])  
  // This function is used to retrieve necessary data from server                                                           
  useEffect(() => 
  {                               
    axios.post('http://localhost:3001/sendApplications')
      .then(res => {
        console.log('Data: ', res.data.data)
        setApplications(res.data.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

    return (
        <div className="wrapper hover_collapse">
            <MainNav></MainNav>
            <div className="main_container">
                <div className="container">
                <div className='head_wrap'>
                <span><img src={application} style={{ width: "30px", height: "30px" }} alt="applications"/></span>
                <span><h1 id="head_text">Applications</h1></span>
                </div>
                {applications.length==0? <h1 style={{ marginLeft:"auto",marginRight:"auto",
                marginTop:"10%" , color:"GrayText"}}>No Applications Received</h1> :
                <FacultyApplicationCard></FacultyApplicationCard>}
            </div>
            </div>
        </div>
    )
}