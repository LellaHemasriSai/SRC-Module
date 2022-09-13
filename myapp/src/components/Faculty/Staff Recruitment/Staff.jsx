import React, { useState, useRef } from 'react'
//import Sidebar from "../../Navbar/components/Sidebar";
//import Nav from "../../Navbar/components/Nav";
import "./staff.css"
//import MainNav from '../../Navbar/components/MainNav';
import { MainNav } from '../../App';
//import { Container } from '@mui/system';

export default function CreateAnnouncement() {
  const [projectName, setProjectName] = useState();
  const [projectID, setProjectID] = useState();
  const [recruitmentType, setRecruitmentType] = useState()
  const [no_ofStaff, setNo_ofStaff] = useState(0)
  const [salaryDetails, setSalaryDetails] = useState(0)
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [descriptionBox, setDescriptionBox] = useState()

  function onSubmit() { console.log("Submitted") }

  function handlechange()
  {
    setProjectName("");
    setProjectID("");
    setRecruitmentType("");
    setNo_ofStaff("");
    setSalaryDetails("");
    setStartDate("");
    setEndDate("");
    setDescriptionBox("");
  }

  function postData() {
    console.log("Submitted Staff recruitment Request")
    fetch("/saveRecruitmentRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        projectName: projectName,
        projectID: projectID,
        recruitmentType: recruitmentType,
        no_ofStaff: no_ofStaff,
        salaryDetails: salaryDetails,
        startDate: startDate,
        endDate: endDate,
        descriptionBox: descriptionBox,
      }),
    }).then((res) => {
      console.log("Res:", res);
    })
    alert("Submitted");
    handlechange();
  }
  //console.alert("SubmittedValues: ", projectID, " ", projectName, " ", projectType, organizationType, agencyCode, agencyName, sanctionValue, startDate, endDate, descriptionBox)

  return (
    <div className="wrapper hover_collapse">
      <MainNav></MainNav>
      <div className="main_container">
        <div className="container">
          <form onSubmit={onSubmit()}>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="projectName">project Name</label>
                <input type="text" class="form-control" id="projectName" value={projectName} placeholder="Project Name" onChange={(event) => { setProjectName(event.target.value) }} />
              </div>
              <div class="form-group col-md-4">
                <label for="projectID">Project ID</label>
                <input type="text" class="form-control" id="projectID" value={projectID} placeholder="Project ID" onChange={(event) => { setProjectID(event.target.value) }} />
              </div>
              <div class="form-group col-md-4">
                <label for="recruitmentType">Recruitment Type</label>
                <select id="inputState" class="form-control" onChange={(event) => { setRecruitmentType(event.target.value) }} >
                  <option>Staff</option>
                  <option>Adhoc</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="no_ofStaff">Number of Staff</label>
                <input type="number" class="form-control" id="no_ofStaff" value={no_ofStaff} placeholder="Number of Staff" onChange={(event) => { setNo_ofStaff(event.target.value) }} />
              </div>
              <div class="form-group col-md-4">
                <label for="salaryDetails">Salary Details</label>
                <input type="text" class="form-control" id="salaryDetails" value={salaryDetails} placeholder="Salary Details" onChange={(event) => { setSalaryDetails(event.target.value) }} />
              </div>
              <div class="form-group col-md-2">
                <label for="startDate">Start Date</label>
                <input type="date" class="form-control" id="startDate" value={startDate} placeholder="Start Date" onChange={(event) => { setStartDate(event.target.value) }} />
              </div>
              <div class="form-group col-md-2">
                <label for="endDate">End date</label>
                <input type="date" class="form-control" id="endDate" value={endDate} placeholder="End Date" onChange={(event) => { setEndDate(event.target.value) }} />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="descriptionBox">Reason for the Recruitment</label>
                <textarea type="text" class="form-control" rows="5" id="descriptionBox" value={descriptionBox} placeholder="Description" onChange={(event) => { setDescriptionBox(event.target.value) }} />
              </div>
              <div class="form-group col-md-4" style={{ marginTop: '50px' }}>
                <button type="button" onClick={postData} class="btn btn-primary">Create</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
