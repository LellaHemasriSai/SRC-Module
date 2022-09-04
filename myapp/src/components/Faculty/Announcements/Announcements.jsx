import React, { useState, useRef } from 'react'
import Sidebar from "../../Navbar/components/Sidebar";
import Nav from "../../Navbar/components/Nav";
import "./announcements.css"
//import MainNav from '../../Navbar/components/MainNav';
import { MainNav } from '../../App';
//import { Container } from '@mui/system';

/*class Announcements extends React.Component {

  constructor() {
    super();
    this.state = {
      projectName: null,
      projectID: null,
      proejctType: null,
      salaryDetails: null,
      openPositions: null,
      startDate: null,
      endDate: null
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  submit() {
    console.log("submiitted")
    console.warn(this.state)
  }
  render() {
    return (
      <div className="wrapper hover_collapse">
        <MainNav></MainNav>
        <div className="main_container">
          <div className="container">
            <form>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="projectName">project Name</label>
                  <input type="text" class="form-control" name="projectName" id="projectName" placeholder="Project Name" onChange={this.handleInputChange} />
                </div>
                <div class="form-group col-md-4">
                  <label for="projectID">Project ID</label>
                  <input type="text" class="form-control" name="projectID" id="projectID" placeholder="Project ID" onChange={this.handleInputChange} />
                </div>
                <div class="form-group col-md-4">
                  <label for="projectType">Project Type</label>
                  <input type="text" class="form-control" name="projectType" id="projectType" placeholder="Project Type" onChange={this.handleInputChange} />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="salaryDetails">Salary Details</label>
                  <input type="text" class="form-control" name="salaryDetails" id="salaryDetails" placeholder="Salary Details" onChange={this.handleInputChange} />
                </div>
                <div class="form-group col-md-4">
                  <label for="openPositions">Open Positions</label>
                  <input type="text" class="form-control" name="openPositions" id="openPositions" placeholder="Open Positions" onChange={this.handleInputChange} />
                </div>
                <div class="form-group col-md-2">
                  <label for="startDate">Start Date</label>
                  <input type="date" class="form-control" name="startDate" id="startDate" placeholder="Start Date" onChange={this.handleInputChange} />
                </div>
                <div class="form-group col-md-2">
                  <label for="endDate">End date</label>
                  <input type="date" class="form-control" name="endDate" id="endDate" placeholder="End Date" onChange={this.handleInputChange} />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="requiredQualifications">Required Qualifications</label>
                  <input type="text" class="form-control" name="requiredQualifications" id="requiredQualifications" placeholder="Required Qualifications" onChange={this.handleInputChange} />
                </div>
                <div class="form-group col-md-4" style={{ marginTop: '25px' }}>
                  <button type="submit" class="btn btn-primary mb-2" onClick={() => this.submit()}>Announce</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Announcements;*/
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
                <button type="submit" class="btn btn-primary mb-2">Announce</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
