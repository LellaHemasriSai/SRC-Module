import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MainNav } from '../../App';
import swal from 'sweetalert';

export default function Funds_Extension(props) {
 const location = useLocation()
 console.log(location);
  const data=location.state;
  console.log(data);
    const [projectName, setProjectName] = useState("");
    const [projectID, setProjectID] = useState("");
    const [projectType, setProjectType] = useState("")
    const [prevsanctionValue, setPrevsanctionValue] = useState("")
    const [extendsanctionValue, setExtendsanctionValue] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [descriptionBox, setDescriptionBox] = useState("")
    function onSubmit() { console.log("") }
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
    function postData(projectID, projectName, projectType, prevsanctionValue, extendsanctionValue, startDate, endDate, descriptionBox) {
        console.log("Submitted")
        console.log()
        fetch("/saveFundRequest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                projectName: data.name,
                projectID: data.id,
                projectType: data.type,
                prevsanctionValue: data.sanction,
                extendsanctionValue: extendsanctionValue,
                startDate: startDate,
                endDate: endDate,
                status:0,
                descriptionBox: descriptionBox
            }),
        }).then((res) => {
            console.log("Res:", res);
        })
        swal("", "Submitted Funds Extention Request", "success");
        handlchange();
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
                                <label for="prevsanctionValue">Previous Sanction Value</label>
                                <input type="text" class="form-control" id="prevsanctionValue" value={data.sanction} placeholder="Previous Sanction Value" onChange={(event) => { setPrevsanctionValue(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="extendsanctionValue">Extend Sanction Value</label>
                                <input type="text" class="form-control" id="sanctionValue" value={extendsanctionValue} placeholder="Extend Sanction Value" onChange={(event) => { setExtendsanctionValue(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-2">
                                <label for="startDate">Start Date</label>
                                <input type="date" class="form-control" id="startDate" value={props.start} placeholder="Start Date" onChange={(event) => { setStartDate(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-2">
                                <label for="endDate">End date</label>
                                <input type="date" class="form-control" id="endDate" value={props.end} placeholder="End Date" onChange={(event) => { setEndDate(event.target.value) }} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="descriptionBox">Reason for the Extension</label>
                                <textarea type="text" class="form-control" rows="5" id="descriptionBox" value={descriptionBox} placeholder="Description" onChange={(event) => { setDescriptionBox(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-4" style={{ marginTop: '50px' }}>
                                <button type="button" onClick={() => { postData(projectID, projectName, projectType, prevsanctionValue, extendsanctionValue, startDate, endDate, descriptionBox) }} class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}