import React, { useState, useEffect } from 'react'
import Sidebar from "../../Navbar/components/Sidebar";
import Nav from "../../Navbar/components/Nav";
import { Grid } from '@mui/material';


export default function Create() {
    const [agencyCode, setagencyCode] = useState("0");
    const [agencyName, setagencyName] = useState("default");
    const [projectName, setProjectName] = useState();
    const [projectID, setProjectID] = useState();
    const [projectType, setprojectType] = useState("default")
    const [organizationType, setorganizationType] = useState("default")
    const [sanctionValue, setsanctionValue] = useState(0)
    const [startDate, setStartDate] = useState("0/0/0")
    const [endDate, setEndDate] = useState("0/0/0")
    const [descriptionBox, setDescriptionBox] = useState("default text")

    function onSubmit() { console.log("Submitted") }
    //console.alert("SubmittedValues: ", projectID, " ", projectName, " ", projectType, organizationType, agencyCode, agencyName, sanctionValue, startDate, endDate, descriptionBox)

    const postData = () => {
        console.log("Posted!")
        fetch("/created", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                projectName: projectName,
                projectID: projectID,
                projectType: projectType,
                agencyCode: agencyCode,
                agencyName: agencyName,
                organizationType: organizationType,
                sanctionValue: sanctionValue,
                startDate: startDate,
                endDate: endDate,
                descriptionBox: descriptionBox
            }),
        }).then((res) => {
            console.log("Bad Preethi Res:", res);
        })
    }

    return (
        <div className="wrapper hover_collapse">
            <Nav user="User Name"></Nav>
            <Sidebar></Sidebar>
            <form className="forms" onSubmit={onSubmit} style={{ marginTop: '100px' }} >

                <label>
                    Project Name
                    <input type="text" name="projectName" placeholder="Enter your project name" onChange={(event) => { setProjectName(event.target.value) }} />
                </label>

                <label>
                    Project ID
                    <input type="text" name="projectID" onChange={(event) => { setProjectID(event.target.value) }} />
                </label>

                <label>
                    Project Type
                    <input type="text" name="projectType" placeholder="Enter your project Type" onChange={(event) => { setprojectType(event.target.value) }} />
                </label>


                <label>
                    Agency Code
                    <input type="text" name="agencyCode" placeholder="Enter your Agency Code" onChange={(event) => { setagencyCode(event.target.value) }} />
                </label>

                <label>
                    Agency Name
                    <input type="text" name="agencyName" placeholder="Enter your Agency Name" onChange={(event) => { setagencyName(event.target.value) }} />
                </label>

                <label>
                    Organization Type
                    <input type="text" name="organizationType" placeholder="Enter your organization Type" onChange={(event) => { setorganizationType(event.target.value) }} />
                </label>

                <label>
                    Sanction Value
                    <input type="text" name="sanctionValue" placeholder="Enter your Sanction value" onChange={(event) => { setsanctionValue(event.target.value) }} />
                </label>

                <label>
                    Start Date
                    <input type="text" name="startDate" placeholder="Enter start date" onChange={(event) => { setStartDate(event.target.value) }} />
                </label>

                <label>
                    End Date
                    <input type="text" name="endDate" placeholder="Enter End date" onChange={(event) => { setEndDate(event.target.value) }} />
                </label>

                <label>
                    Description
                    <input type="text" name="Description" placeholder="Give a brief description of the project" onChange={(event) => { setDescriptionBox(event.target.value) }} />
                </label>

                <div className="btn">
                    <button type="button" onClick={postData}>Create</button>
                    {/* <button type="submit" onClick={getData}>GetData</button> */}
                </div>

            </form>
        </div>
    )
}
