import React, { useState } from 'react'
//import Sidebar from "../../Navbar/components/Sidebar";
import Nav from "../../Navbar/components/Nav";
import "./announcements.css"
import Container from '../../Navbar/components/Container';
//import { Grid } from '@mui/material';
import Button from 'react-bootstrap/Button'
{/*function Announcements() {
  return <div className="wrapper hover_collapse">
    <Nav user="User Name"></Nav>
    <Sidebar></Sidebar>
    <Container content="Announcements"></Container>
  </div>
}*/}

export default function CreateAnnouncement() {
  const [projectName, setProjectName] = useState("default");
  const [projectID, setProjectID] = useState("default");
  const [projectType, setprojectType] = useState("default")
  const [salaryDetails, setSalaryDetails] = useState("default")
  const [openPositions, setOpenPositions] = useState("default")
  const [startDate, setStartDate] = useState("0/0/0")
  const [endDate, setEndDate] = useState("0/0/0")
  const [requiredQualifications, setRequiredQualifications] = useState("default text")
  function onSubmit() { console.log("Submitted") }

  return (
    <div className="wrapper hover_collapse">
      <Nav user="User Name"></Nav>
      <div class="card">
        <form onSubmit={onSubmit()}>
          <div class="form-row" style={{ marginTop: '150px' }}>
            <div class="form-group col-md-4">
              <label for="projectName">project Name</label>
              <input type="text" class="form-control" id="projectName" value={projectName} placeholder="Project Name" onChange={setProjectName}/>
            </div>
            <div class="form-group col-md-4">
              <label for="projectID">Project ID</label>
              <input type="text" class="form-control" id="projectID" value={projectID} placeholder="Project ID" onChange={setProjectID} />
            </div>
            <div class="form-group col-md-4">
              <label for="projectType">Project Type</label>
              <input type="text" class="form-control" id="projectType" value={projectType} placeholder="Project Type" onChange={setprojectType}/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="salaryDetails">Salary Details</label>
              <input type="text" class="form-control" id="salaryDetails" value={salaryDetails} placeholder="Salary Details" onChange={setSalaryDetails}/>
            </div>
            <div class="form-group col-md-4">
              <label for="openPositions">Open Positions</label>
              <input type="text" class="form-control" id="openPositions" value={openPositions} placeholder="Open Positions" onChange={setOpenPositions}/>
            </div>
            <div class="form-group col-md-2">
              <label for="startDate">Start Date</label>
              <input type="date" class="form-control" id="startDate" value={startDate} placeholder="Start Date" onChange={setStartDate}/>
            </div>
            <div class="form-group col-md-2">
              <label for="endDate">End date</label>
              <input type="date" class="form-control" id="endDate" value={endDate} placeholder="End Date" onChange={setEndDate} />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="requiredQualifications">Required Qualifications</label>
              <input type="text" class="form-control" id="requiredQualifications" value={requiredQualifications} placeholder="Required Qualifications" onChange={setRequiredQualifications}/>
            </div>
            <div class="form-group col-md-4" style={{ marginTop: '25px' }}>
              <button type="submit" class="btn btn-primary mb-2">Announce</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
