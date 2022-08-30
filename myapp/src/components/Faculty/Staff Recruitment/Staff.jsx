
import React, { useState } from 'react'
import Sidebar from "../../Navbar/components/Sidebar";
import Nav from "../../Navbar/components/Nav";
import "./staff.css"
import Checkbox from '@mui/material/Checkbox';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
//import {InputLabel, Select, MenuItem} from '@material-ui/core';
export default function Staff() {
  const [projectName, setProjectName] = useState();
  const [projectID, setProjectID] = useState();
  const [projectType, setprojectType] = useState()
  const [salaryDetails, setSalaryDetails] = useState()
  const [staffName, setStaffName] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [staffAge, setStaffAge] = useState()
  const [staffAadhar, setStaffAadhar] = useState()
  const [commitment, setCommitment]=useState()
  const [highestQualification, setHighestQualification]=useState()
  const [workExperience, setWorkExperience]=useState()
  const [bankCode, setBankCode]=useState()
  function onSubmit() { console.log("Submitted") }

  return (
    <div className="wrapper hover_collapse">
      <Nav user="User Name"></Nav>
      <Sidebar></Sidebar>
      <div className="card_staff main_container">
		  <div className="container">
        <form onSubmit={onSubmit()}>
          <div class="form-row" style={{ marginTop: '150px' }}>
            <div class="form-group col-md-4">
              <label for="projectName">project Name</label>
              <input type="text" class="form-control" id="projectName" value={projectName} placeholder="Project Name" onChange={(event) => { setProjectName(event.target.value) }} />
            </div>
            <div class="form-group col-md-4">
              <label for="projectID">Project ID</label>
              <input type="text" class="form-control" id="projectID" value={projectID} placeholder="Project ID" onChange={(event) => { setProjectID(event.target.value) }} />
            </div>
            <div class="form-group col-md-4">
              <label for="projectType">Project Type</label>
              <input type="text" class="form-control" id="projectType" value={projectType} placeholder="Project Type" onChange={(event) => { setprojectType(event.target.value) }} />
            </div>
          </div>
          <div class="form-row">
            
            <div class="form-group col-md-4">
              <label for="staffName">Candidate Name</label>
              <input type="text" class="form-control" id="staffName" value={staffName} placeholder="Candidate Name" onChange={(event) => { setStaffName(event.target.value) }} />
            </div>
            <div class="form-group col-md-4">
              <label for="staffAge">Candidate Age</label>
              <input type="number" class="form-control" id="staffAge" value={staffAge} placeholder="Candidate Age" onChange={(event) => { setStaffAge(event.target.value) }} />
            </div>
            <div class="form-group col-md-4">
              <label for="staffAadhar">Candidate Aadhar Number</label>
              <input type="text" class="form-control" id="staffAadhar" value={staffAadhar} placeholder="Candidate Aadhar Number" onChange={(event) => { setStaffAadhar(event.target.value) }} />
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="highestQualification">Highest Qualification</label>
              <input type="text" class="form-control" id="highestQualification" value={highestQualification} placeholder="Highest Qualification" onChange={(event) => { setHighestQualification(event.target.value) }} />
              {/* <InputLabel id="highestQualification">Highest Qualification</InputLabel>
              <Select
                labelId="highestQualification"
                id="highestQualification"
                value={highestQualification}
                label="Highest Qualification"
                placeholder='Highest Qualification'
                onChange={(event) => { setHighestQualification(event.target.value) }}
              >
                <MenuItem value={10}>Ms/M.Tech</MenuItem>
                <MenuItem value={20}>BE/B.Tech</MenuItem>
                <MenuItem value={30}>Intermediate</MenuItem>
                <MenuItem value={40}>SSC</MenuItem>
              </Select> */}
            </div>
            <div class="form-group col-md-4">
              <label for="workExperience">Work Experience(Years)</label>
              <input type="number" class="form-control" id="workExperience" value={workExperience} placeholder="Work Experience" onChange={(event) => { setWorkExperience(event.target.value) }} />
            </div>
            <div class="form-group col-md-4">
              <label for="bankCode">Bank IFSC Code</label>
              <input type="text" class="form-control" id="bankCode" value={bankCode} placeholder="IFSC Code" onChange={(event) => { setBankCode(event.target.value) }} />
            </div>
            
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="salaryDetails">Salary Details</label>
              <input type="text" class="form-control" id="salaryDetails" value={salaryDetails} placeholder="Salary Details" onChange={(event) => { setSalaryDetails(event.target.value) }} />
            </div>
            <div class="form-group col-md-4">
              <label for="startDate">Start Date</label>
              <input type="date" class="form-control" id="startDate" value={startDate} placeholder="Start Date" onChange={(event) => { setStartDate(event.target.value) }} />
            </div>
            <div class="form-group col-md-4">
              <label for="endDate">End date</label>
              <input type="date" class="form-control" id="endDate" value={endDate} placeholder="End Date" onChange={(event) => { setEndDate(event.target.value) }} />
            </div>
            
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <Checkbox {...commitment} defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} onChange={(event) => { setCommitment(event.target.value) }}/>
              <label for="commitment">I abide by the rules and regulations.</label>
            </div>
            <div class="form-group col-md-4" style={{ marginTop: '25px' }}>
              <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}
