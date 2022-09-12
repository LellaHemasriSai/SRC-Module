import React, { useState, useRef } from 'react'
//import Sidebar from "../../Navbar/components/Sidebar";
//import Nav from "../../Navbar/components/Nav";
import "./staff.css"
//import MainNav from '../../Navbar/components/MainNav';
import { MainNav } from '../../App';
//import { Container } from '@mui/system';

/*class Staff extends React.Component {

    constructor() {
        super();
        this.state = {
            projectName: null,
            projectID: null,
            proejctType: null,
            no_ofStaff: null,
            salaryDetails: null,
            startDate: null,
            endDate: null,
            descriptionBox: null
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
                                    <label for="projectName">Project Name</label>
                                    <input type="text" required class="form-control" name="projectName" id="projectName" placeholder="Project Name" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="projectID">Project ID</label>
                                    <input type="text" required class="form-control" name="projectID" id="projectID" placeholder="Project ID" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="projectType">Project Type</label>
                                    <input type="text" required class="form-control" name="projectType" id="projectType" placeholder="Project Type" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="no_ofStaff">Number of Staff</label>
                                    <input type="number" required class="form-control" name="no_ofStaff" id="no_ofStaff" placeholder="Number of Staff" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="salaryDetails">Salary Details</label>
                                    <input type="text" required class="form-control" name="salaryDetails" id="salaryDetails" placeholder="Salary Details" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="startDate">Start Date</label>
                                    <input type="date" required class="form-control" name="startDate" id="startDate" placeholder="Start Date" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="endDate">End date</label>
                                    <input type="date" required class="form-control" name="endDate" id="endDate" placeholder="End Date" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="descriptionBox">Reason for Recruitment</label>
                                    <textarea type="text" required class="form-control" rows="5" id="descriptionBox" placeholder="Description" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-4" style={{ marginTop: '50px', }}>
                                    <button type="button" required onClick={() => this.submit()} class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Staff;*/
export default function CreateAnnouncement() {
  const [projectName, setProjectName] = useState("default");
  const [projectID, setProjectID] = useState("default");
  const [recruitmentType, setRecruitmentType] = useState("default")
  const [no_ofStaff, setNo_ofStaff] = useState("default")
  const [salaryDetails, setSalaryDetails] = useState("default")
  const [startDate, setStartDate] = useState("0/0/0")
  const [endDate, setEndDate] = useState("0/0/0")
  const [descriptionBox, setDescriptionBox] = useState("default text")
  function onSubmit() { console.log("Submitted") }
  function postData() {
    console.log("Submitted")
    fetch("/created", {
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
        descriptionBox: descriptionBox
      }),
    }).then((res) => {
      console.log("Res:", res);
    })
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
