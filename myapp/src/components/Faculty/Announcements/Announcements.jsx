import React, { useState, useRef } from 'react'
import "./announcements.css"
import announce from "../../../images/announcements.svg"
import { MainNav } from '../../App';

export default function CreateAnnouncement() {
  const [projectName, setProjectName] = useState("");
  const [projectID, setProjectID] = useState("");
  const [projectType, setprojectType] = useState("")
  const [salaryDetails, setSalaryDetails] = useState("")
  const [openPositions, setOpenPositions] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [requiredQualifications, setRequiredQualifications] = useState("")

 function handlechange()
 {
  setProjectName("");
  setProjectID("");
  setprojectType("");
  setSalaryDetails("");
  setOpenPositions("");
  setStartDate("");
  setEndDate("");
  setRequiredQualifications("");
 }

  function onSubmit() { console.log("Submitted") }
  function postData() {
        console.log("Submitted")
        fetch("/announced", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                projectName: projectName,
                projectID: projectID,
                projectType: projectType,
                salaryDetails: salaryDetails,
                openPositions: openPositions,
                requiredQualifications: requiredQualifications,
                startDate: startDate,
                endDate: endDate,
            }),
        }).then((res) => {
            console.log("Res:", res);
        })
        alert("Announcement Created !");
        handlechange();
    }
  return (
    <div className="wrapper hover_collapse">
      <MainNav></MainNav>
      <div className="main_container">
        <div className="container">
          <div className='head_wrap'>
            <span><img src={announce} style={{ width: "30px", height: "30px" }} alt="applications"/></span>
            <span><h1 id="head_text">Create Announcements</h1></span>
          </div>
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
                <label for="projectType">Project Type</label>
                <input type="text" class="form-control" id="projectType" value={projectType} placeholder="Project Type" onChange={(event) => { setprojectType(event.target.value) }} />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="salaryDetails">Salary Details</label>
                <input type="text" class="form-control" id="salaryDetails" value={salaryDetails} placeholder="Salary Details" onChange={(event) => { setSalaryDetails(event.target.value) }} />
              </div>
              <div class="form-group col-md-4">
                <label for="openPositions">Open Positions</label>
                <input type="text" class="form-control" id="openPositions" value={openPositions} placeholder="Open Positions" onChange={(event) => { setOpenPositions(event.target.value) }} />
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
                <label for="requiredQualifications">Required Qualifications</label>
                <input type="text" class="form-control" id="requiredQualifications" value={requiredQualifications} placeholder="Required Qualifications" onChange={(event) => { setRequiredQualifications(event.target.value) }} />
              </div>
              <div class="form-group col-md-4" style={{ marginTop: '30px' }}>
                <button type="submit" onClick={postData} class="btn btn-primary mb-2">Announce</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
