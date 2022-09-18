import React, { useState } from 'react'
import { MainNav,AdminMainNav,StudentMainNav } from '../App';
import swal from 'sweetalert'

export default function RegisterForm(props) {
    const [Department, setDepartment] = useState("");
    const [Designation, setDesignation] = useState("");
    const [Email, setEmail] = useState("");
    const [ContactNumber, setContactNumber] = useState("");
    const [Qualifications, setQualifications] = useState("")
    const [DateofJoining, setDateofJoining] = useState("")
    const [DoB, setDoB] = useState("")
    const [Address, setAddress] = useState("")
    const [Gender, setGender] = useState("")
    const [Signature, setSignature] = useState("")

    //function onSubmit() { console.log('submitted RegisterForm') }
    function handlechange() {
        setDepartment("");
        setDesignation("");
        setEmail("");
        setContactNumber("");
        setQualifications("");
        setDateofJoining("");
        setDoB("");
        setAddress("");
        setGender("");
    }

    //function onSubmit() { console.log('submitted Create Project') }
    function postData() {
        console.log("Submitted")
        fetch("/updateFacultyDetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Department: Department,
                Designation: Designation,
                Email: Email,
                ContactNumber: ContactNumber,
                Qualifications: Qualifications,
                DateofJoining: DateofJoining,
                DoB: DoB,
                Address: Address,
                Gender: Gender,
                Signature: Signature,
                details: {
                    Department: Department,
                    Designation: Designation,
                    Email: Email,
                    ContactNumber: ContactNumber,
                    DateOfJoining: DateofJoining,
                    Qualifications: Qualifications,
                    DoB: DoB,
                    Address: Address,
                    Gender: Gender,
                    Signature: Signature,
                },
            }),
        }).then((res) => {
            console.log("Res:", res);
        })
        swal("","Updated Registration Details","success");
        handlechange();
    }

    function changeNav(){
        console.log("change")
        let name=props.name;
        if(name==="Student"){
            <StudentMainNav></StudentMainNav>
             console.log("change stu")
        }else if(name==="Faculty"){
            <MainNav></MainNav>
             console.log("change fac")
        }else{
            <AdminMainNav></AdminMainNav>
             console.log("change adm")
        }
    }

    return (
        <div className="wrapper hover_collapse" >
            { props.name==="Admin"? <AdminMainNav></AdminMainNav>: props.name==="Faculty"? <MainNav></MainNav>: <StudentMainNav></StudentMainNav>}
            <div className="main_container">
                <div className="container" >
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <br /><br />
                            <h1>Update Details</h1>
                            <br />
                            <form>
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
                                    <div class="form-group col-md-6">
                                        <label>Date of joining</label>
                                        <input type="date" class="form-control" id="DateofJoining" value={DateofJoining} placeholder="DateofJoining" onChange={(event) => { setDateofJoining(event.target.value) }} />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>Date of Birth</label>
                                        <input type="date" class="form-control" id="DoB" value={DoB} placeholder="DoB" onChange={(event) => { setDoB(event.target.value) }} />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Qualifications</label>
                                        <input type="text" class="form-control" id="Qualifications" value={Qualifications} placeholder="Qualifications" onChange={(event) => { setQualifications(event.target.value) }} />
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
                                    <div class="form-group col-md-6">
                                        <label>Address </label>
                                        <textarea id="Address" class="form-control" value={Address} placeholder="Address" onChange={(event) => { setAddress(event.target.value) }} />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label>Signature</label>
                                        <input type="file" class="form-control-file" id="Signature" onChange={(event) => { setSignature(event.target.value) }} />
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
