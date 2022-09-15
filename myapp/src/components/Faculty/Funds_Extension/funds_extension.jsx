import React, { useState, useRef } from 'react'
//import Sidebar from "../../Navbar/components/Sidebar";
//import Nav from "../../Navbar/components/Nav";
//import "./staff.css"
//import MainNav from '../../Navbar/components/MainNav';
import { MainNav } from '../../App';
import swal from 'sweetalert';
//import { Container } from '@mui/system';

export default function Funds_Extension() {
    const [projectName, setProjectName] = useState("default");
    const [projectID, setProjectID] = useState("default");
    const [projectType, setProjectType] = useState("default")
    const [prevsanctionValue, setPrevsanctionValue] = useState("0")
    const [extendsanctionValue, setExtendsanctionValue] = useState("0")
    const [startDate, setStartDate] = useState("0/0/0")
    const [endDate, setEndDate] = useState("0/0/0")
    const [descriptionBox, setDescriptionBox] = useState("default text")
    function onSubmit() { console.log("Submitted") }
    function handlchange() {
        setProjectName("");
        setProjectID("");
        setProjectType("");
        setPrevsanctionValue("");
        setExtendsanctionValue("");
        setStartDate("");
        setEndDate("");
        setDescriptionBox("");
    }
    function postData() {
        console.log("Submitted")
        fetch("/saveFundRequest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                projectName: projectName,
                projectID: projectID,
                projectType: projectType,
                prevsanctionValue: prevsanctionValue,
                extendsanctionValue: extendsanctionValue,
                startDate: startDate,
                endDate: endDate,
                descriptionBox: descriptionBox
            }),
        }).then((res) => {
            console.log("Res:", res);
        })
        swal("", "Submitted Funds Extention Request", "success");
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
                                <input type="text" class="form-control" id="projectName" value={projectName} placeholder="Project Name" onChange={(event) => { setProjectName(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="projectID">Project ID</label>
                                <input type="text" class="form-control" id="projectID" value={projectID} placeholder="Project ID" onChange={(event) => { setProjectID(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="projectType">Project Type</label>
                                <input type="text" class="form-control" id="projectType" value={projectType} placeholder="Project Type" onChange={(event) => { setProjectType(event.target.value) }} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="prevsanctionValue">Previous Sanction Value</label>
                                <input type="text" class="form-control" id="prevsanctionValue" value={prevsanctionValue} placeholder="Previous Sanction Value" onChange={(event) => { setPrevsanctionValue(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="extendsanctionValue">Extend Sanction Value</label>
                                <input type="text" class="form-control" id="sanctionValue" value={extendsanctionValue} placeholder="Extend Sanction Value" onChange={(event) => { setExtendsanctionValue(event.target.value) }} />
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
                                <label for="descriptionBox">Reason for the Extension</label>
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