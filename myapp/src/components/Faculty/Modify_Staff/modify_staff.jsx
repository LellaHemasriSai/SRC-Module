import React, { useState, useRef } from 'react'
//import Sidebar from "../../Navbar/components/Sidebar";
//import Nav from "../../Navbar/components/Nav";
//import "./staff.css"
//import MainNav from '../../Navbar/components/MainNav';
import { MainNav } from '../../App';
import { useLocation } from 'react-router-dom'
//import { Container } from '@mui/system';

export default function Modify_Staff() {
const location = useLocation()
 console.log(location);
  const data=location.state;
    const [projectName, setProjectName] = useState("default");
    const [projectID, setProjectID] = useState("default");
    const [projectType, setProjectType] = useState("default")
    const [withdrawnStaff, setWithdrawnStaff] = useState("0")
    const [extendStaff, setExtendStaff] = useState("0")
    const [startDate, setStartDate] = useState("0/0/0")
    const [endDate, setEndDate] = useState("0/0/0")
    const [descriptionBox, setDescriptionBox] = useState("default text")
    function onSubmit() { console.log("Submitted") }
    function handlchange()
    {
        setProjectName("");
        setProjectID("");
        setProjectType("");
        setWithdrawnStaff("");
        setExtendStaff("");
        setStartDate("");
        setEndDate("");
        setDescriptionBox("");
    }
    function postData() {
        console.log("Submitted")
        fetch("/created", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                projectName: data.name,
                projectID: data.id,
                projectType: data.type,
                withdrawnStaff: withdrawnStaff,
                extendStaff: extendStaff,
                startDate: startDate,
                endDate: endDate,
                descriptionBox: descriptionBox
            }),
        }).then((res) => {
            console.log("Res:", res);
        })
        handlchange();
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
                                <input type="text" class="form-control" id="projectName" value={data.name} placeholder="Project Name" onChange={(event) => { setProjectName(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="projectID">Project ID</label>
                                <input type="text" class="form-control" id="projectID" value={data.id} placeholder="Project ID" onChange={(event) => { setProjectID(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="projectType">Project Type</label>
                                <input type="text" class="form-control" id="projectType" value={data.type} placeholder="Project Type" onChange={(event) => { setProjectType(event.target.value) }} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="withdrawnStaff">Withdrawn Staff</label>
                                <input type="number" class="form-control" id="withdrawnStaff" value={withdrawnStaff} placeholder="Withdrawn Staff" onChange={(event) => { setWithdrawnStaff(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="extendStaff">Extend Staff</label>
                                <input type="number" class="form-control" id="extendStaff" value={extendStaff} placeholder="Extend Staff" onChange={(event) => { setExtendStaff(event.target.value) }} />
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
                                <label for="descriptionBox">Reason for the Modification</label>
                                <textarea type="text" class="form-control" rows="5" id="descriptionBox" value={descriptionBox} placeholder="Description" onChange={(event) => { setDescriptionBox(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-4" style={{ marginTop: '50px' }}>
                                <button type="button" onClick={postData} class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}