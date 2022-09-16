// Form created to request for the extension of duration 

import React, { useState } from 'react'
import { MainNav } from '../../App';
import { useLocation } from 'react-router-dom'
import swal from 'sweetalert';

export default function ExtendDuration() {
 const location = useLocation()
 console.log(location);
  const data=location.state;
    const [projectName, setProjectName] = useState("");
    const [projectID, setProjectID] = useState("");
    const [projectType, setProjectType] = useState("")
    const [previousDate, setPreviousDate] = useState("")
    const [extendDate, setExtendDate] = useState("")
    const [descriptionBox, setDescriptionBox] = useState("")
    function onSubmit() { console.log("") }
    function handlechange() {
        setProjectName("");
        setProjectID("");
        setProjectType("");
        setPreviousDate("");
        setExtendDate("");
        setDescriptionBox("");
    }
    function postData() {
        console.log("Submitted")
        fetch("/saveExtendDurationRequest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                projectName: data.name,
                projectID: data.id,
                projectType: data.type,
                previousDate: previousDate,
                extendDate: extendDate,
                descriptionBox: descriptionBox
            }),
        }).then((res) => {
            console.log("Res:", res);
        })
        swal("", "Submitted Extend Duration Request", "success");
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
                                <button type="button" onClick={() => { postData(projectID, projectName, projectType, previousDate, extendDate, descriptionBox) }} class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}