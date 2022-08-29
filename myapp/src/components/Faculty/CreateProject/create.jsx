import React, { useState } from 'react'
import Sidebar from "../../Navbar/components/Sidebar";
import Nav from "../../Navbar/components/Nav";
import { Grid } from '@mui/material';
import axios from 'axios';
import Button from 'react-bootstrap/Button'

export default function Create() {
    const [agencyCode, setagencyCode] = useState("0");
    const [agencyName, setagencyName] = useState("default");
    const [projectName, setProjectName] = useState("default");
    const [projectID, setProjectID] = useState("default");
    const [projectType, setprojectType] = useState("default")
    const [organizationType, setorganizationType] = useState("default")
    const [sanctionValue, setsanctionValue] = useState(0)
    const [startDate, setStartDate] = useState("0/0/0")
    const [endDate, setEndDate] = useState("0/0/0")
    const [descriptionBox, setDescriptionBox] = useState("default text")
    var retrivedData
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
        }).then(
            axios.get('/pending')
                .then(function (response) {
                    // handle success
                    retrivedData = response.data
                    console.log(retrivedData);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })


        )
    }

    return (
        <div className="wrapper hover_collapse">
            <Nav user="User Name"></Nav>
            <Sidebar></Sidebar>
            <form className="forms" onSubmit={onSubmit} style={{ marginLeft: '100px', marginTop: '105px', marginRight: '50px', alignItems: 'center' }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <label>
                            Project Name{'\n'}
                            <input type="text" name="projectName" placeholder="Enter your project name" onChange={(event) => { setProjectName(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Project ID{'\n'}
                            <input type="text" name="projectID" placeholder="Enter the project ID" onChange={(event) => { setProjectID(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Project Type{'\n'}
                            <input type="text" name="projectType" placeholder="Enter your project Type" onChange={(event) => { setprojectType(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Agency Code{'\n'}
                            <input type="text" name="agencyCode" placeholder="Enter your Agency Code" onChange={(event) => { setagencyCode(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Agency Name{'\n'}
                            <input type="text" name="agencyName" placeholder="Enter your Agency Name" onChange={(event) => { setagencyName(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Organization Type{'\n'}
                            <input type="text" name="organizationType" placeholder="Enter your organization Type" onChange={(event) => { setorganizationType(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Sanction Value{'\n'}
                            <input type="text" name="sanctionValue" placeholder="Enter your Sanction value" onChange={(event) => { setsanctionValue(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Start Date{'\n'}
                            <input type="text" name="startDate" placeholder="Enter start date" onChange={(event) => { setStartDate(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            End Date{'\n'}
                            <input type="text" name="endDate" placeholder="Enter End date" onChange={(event) => { setEndDate(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <label>
                            Description{'\n'}
                            <input type="text" name="Description" placeholder="Brief description" onChange={(event) => { setDescriptionBox(event.target.value) }} />
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="btnCreateProject">
                            <Button variant="primary" type="button" onClick={postData} >Create</Button>
                            {/* <button type="submit" onClick={getData}>GetData</button> */}
                        </div>
                    </Grid>
                </Grid>
            </form>

        </div >
    )
}
