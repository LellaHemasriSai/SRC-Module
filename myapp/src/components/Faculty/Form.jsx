import React, { useState } from 'react'
//import { Grid } from '@mui/material';
//import Button from '@mui/material';
//import { MainNav } from '../../App';

export default function RegisterForm() {
    const [Department, setDepartment] = useState("");
    const [Designation, setDesignation] = useState("");
    const [Email, setEmail] = useState("");
    const [ContactNumber, setContactNumber] = useState("");
    const [Qualifications, setQualifications] = useState("")
    const [DateofJoining, setDateofJoining] = useState("")
    const [DoB, setDoB] = useState("")
    const [Address, setAddress] = useState("")
    const [Gender, setGender] = useState("")

    function onSubmit() { console.log('submitted Create Project') }
    function postData() {
        console.log("Submitted")
        fetch("/updateFacultyDetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                details: {
                    Department: Department,
                    Designation: Designation,
                    Email: Email,
                    ContactNumber: ContactNumber,
                    DateOfJoining: DateofJoining,
                    Qualifications: Qualifications,
                    DoB: DoB,
                    Address: Address,
                    Gender: Gender
                },
            }),
        }).then((res) => {
            console.log("Res:", res);
        })
    }


    return (
        <div>
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <br /><br />
                    <h1>Register Form</h1><br />
                    <form>
                        {/*<div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>First Name</label>
                                    <input type="text" class="form-control" name="first_name" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" name="last_name" onChange={this.handleInputChange} />
                                </div>
                            </div>*/}
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>Department</label>
                                <input type="text" class="form-control" id="Department" value={Department} placeholder="Department" onChange={(event) => { setDepartment(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-6">
                                <label>Designation</label>
                                <input type="text" class="form-control" id="Designation" value={Designation} placeholder="Designation" onChange={(event) => { setDesignation(event.target.value) }} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>Email</label>
                                <input type="email" class="form-control" id="Email" value={Email} placeholder="Email" onChange={(event) => { setEmail(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-6">
                                <label>Contact Number</label>
                                <input type="text" class="form-control" id="ContactNumber" value={ContactNumber} placeholder="ContactNumber" onChange={(event) => { setContactNumber(event.target.value) }} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label>Qualifications</label>
                                <input type="text" class="form-control" id="Qualifications" value={Qualifications} placeholder="Qualifications" onChange={(event) => { setQualifications(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-4">
                                <label>Date of joining</label>
                                <input type="date" class="form-control" id="DateofJoining" value={DateofJoining} placeholder="DateofJoining" onChange={(event) => { setDateofJoining(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-4">
                                <label>Date of Birth</label>
                                <input type="date" class="form-control" id="DoB" value={DoB} placeholder="DoB" onChange={(event) => { setDoB(event.target.value) }} />
                            </div>
                        </div>
                        {/*<div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Gender</label><br />
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="Gender" id="inlineRadiom" value="male" checked={this.state.gender === "male"} onChange={this.handleInputChange} />
                                        <label class="form-check-label" for="inlineRadiom">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" id="inlineRadiof" value="female" checked={this.state.gender === "female"} onChange={this.handleInputChange} />
                                        <label class="form-check-label" for="inlineRadiof">Female</label>
                                    </div>
                                </div>
                        </div>*/}
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>Address </label>
                                <textarea id="Address" class="form-control" value={Address} placeholder="Address" onChange={(event) => { setAddress(event.target.value) }} />
                            </div>
                            <div class="form-group col-md-6">
                                <label>Gender</label>
                                <select id="Gender" class="form-control" onChange={(event) => { setGender(event.target.value) }}>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-12 text-center">
                                <button type="button" onClick={postData} class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
