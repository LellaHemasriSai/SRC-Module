import React, { useState, useRef } from 'react'
import { MainNav } from '../../App';


export default function ExtendDuration() {
    const [projectName, setProjectName] = useState("default");
    const [projectID, setProjectID] = useState("default");
    const [projectType, setProjectType] = useState("default")
    const [previousDate, setPreviousDate] = useState("0/0/0")
    const [extendDate, setExtendDate] = useState("0/0/0")
    const [descriptionBox, setDescriptionBox] = useState("default text")
    function onSubmit() { console.log("Submitted") }
    function handlechange()
    {
        setProjectName("");
        setProjectID("");
        setProjectType("");
        setPreviousDate("");
        setExtendDate("");
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
                projectName: projectName,
                projectID: projectID,
                projectType: projectType,
                previousDate: previousDate,
                extendDate: extendDate,
                descriptionBox: descriptionBox
            }),
        }).then((res) => {
            console.log("Res:", res);
        })
       handlechange();
    }

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
                            <div class="form-group col-md-2">
                                <label for="previousDate">Previous Date</label>
                                <input type="date" class="form-control" id="previousDate" value={previousDate} placeholder="Previous Date" onChange={(event) => { setPreviousDate(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-2">
                                <label for="extendDate">Extend date</label>
                                <input type="date" class="form-control" id="extendDate" value={extendDate} placeholder="Extend Date" onChange={(event) => { setExtendDate(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="descriptionBox">Reason for the Extension</label>
                                <textarea type="text" class="form-control" rows="5" id="descriptionBox" value={descriptionBox} placeholder="Description" onChange={(event) => { setDescriptionBox(event.target.value) }} />
                            </div>
                        </div>
                        <div class="form-row">
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