import React, { useState } from 'react'
import { MainNav } from '../../App';
import { useLocation } from 'react-router-dom'

export default function Modify_Staff() {
const location = useLocation()
 console.log(location);
  const data=location.state;
    const [projectName, setProjectName] = useState("");
    const [projectID, setProjectID] = useState("");
    const [projectType, setProjectType] = useState("")
    const [withdrawnStaff, setWithdrawnStaff] = useState("")
    const [extendStaff, setExtendStaff] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [descriptionBox, setDescriptionBox] = useState("")
    function onSubmit() { console.log("") }
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
    function postData(projectName,projectID,projectType,withdrawnStaff,extendStaff,startDate,endDate,descriptionBox) {
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
      //  handlchange();
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
                                <button type="button" onClick={postData(projectName,projectID,projectType,withdrawnStaff,extendStaff,startDate,endDate,descriptionBox)} class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}