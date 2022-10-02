import React, { useState } from 'react'
import { MainNav } from '../../App';
import swal from 'sweetalert';

export default function Create() {
    const [projectName, setProjectName] = useState("");
    const [projectID, setProjectID] = useState("");
    const [sanctionValue, setsanctionValue] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [descriptionBox, setDescriptionBox] = useState("")
    function onSubmit() {
        console.log('submitted Internal Project');
    }
    function handlechange() {
        setProjectName("");
        setProjectID("");
        setsanctionValue("");
        setStartDate("");
        setEndDate("");
        setDescriptionBox("");
    }
    function postData() {
        console.log("Submitted")
        fetch("/created Internal Project", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                projectName: projectName,
                projectID: projectID,
                sanctionValue: sanctionValue,
                startDate: startDate,
                endDate: endDate,
                descriptionBox: descriptionBox
            }),
        }).then((res) => {
            console.log("Res:", res);
        })
        swal("", "submitted Create Internal Project", "success");
        handlechange();
    }
    return (
        <div className="wrapper hover_collapse">
            <MainNav></MainNav>
            <div className="main_container">
                <div className="container" >
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="projectName">project Name</label>
                                        <input type="text" class="form-control" id="projectName" value={projectName} placeholder="Project Name" onChange={(event) => { setProjectName(event.target.value) }} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="startDate">Start Date</label>
                                        <input type="date" class="form-control" id="startDate" value={startDate} placeholder="Start Date" onChange={(event) => { setStartDate(event.target.value) }} />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="endDate">End date</label>
                                        <input type="date" class="form-control" id="endDate" value={endDate} placeholder="End Date" onChange={(event) => { setEndDate(event.target.value) }} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="sanctionValue">Sanction Value</label>
                                        <input type="text" class="form-control" id="sanctionValue" value={sanctionValue} placeholder="Sanction Value" onChange={(event) => { setsanctionValue(event.target.value) }} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-8">
                                        <label for="descriptionBox">Scope and Objective of the Project</label>
                                        <textarea type="text" class="form-control" rows="5" id="descriptionBox" value={descriptionBox} placeholder="Description" onChange={(event) => { setDescriptionBox(event.target.value) }} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-12 text-center" style={{ marginTop: '5%', }}>
                                        <button type="button" onClick={postData} class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}