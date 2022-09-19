import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StudentMainNav } from '../App';
import swal from 'sweetalert'

export default function RegisterForm(props) {

    const [dob,setDob]=useState([])
    const [gmail,setGmail]=useState([])
    const [addr,setAddr]=useState([])
    const [qual,setQual]=useState([])
    const [dep,setDep]=useState([])
    const [contact,setContact]=useState([])
    const [dof,setDof]=useState([])

    useEffect(() => {
    axios.post('http://localhost:3001/sendStaffDetails')
      .then(res => {
        console.log('Data: ', res.data.data)
        let birth=JSON.stringify(res.data.data.details.DoB).substring(1,11);
        var date=new Date(birth);
        setDob(date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear())
        //console.log(dob);
        setAddr(res.data.data.details.Address)
        setContact(res.data.data.details.ContactNumber)
        setDep(res.data.data.details.Department)
        let joining=JSON.stringify(res.data.data.details.DateOfJoining).substring(1,11);
        var date2=new Date(joining);
        setDof(date2.getDay()+"/"+date2.getMonth()+"/"+date2.getFullYear())
        setGmail(res.data.data.details.Email)
        setQual(res.data.data.details.Qualifications)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

    const [Department, setDepartment] = useState("");
    const [Email, setEmail] = useState("");
    const [ContactNumber, setContactNumber] = useState("");
    const [Qualifications, setQualifications] = useState("")
    const [DateofJoining, setDateofJoining] = useState("")
    const [DoB, setDoB] = useState("")
    const [Address, setAddress] = useState("")
    const [Gender, setGender] = useState("")
    const [Signature, setSignature] = useState("")
    const [Resume, setResume] = useState("")

    //function onSubmit() { console.log('submitted RegisterForm') }
    function handlechange() {
        setDepartment("");
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
                Email: Email,
                ContactNumber: ContactNumber,
                Qualifications: Qualifications,
                DateofJoining: DateofJoining,
                DoB: DoB,
                Address: Address,
                Gender: Gender,
                Signature: Signature,
                Resume: Resume,
                details: {
                    Department: Department,
                    Email: Email,
                    ContactNumber: ContactNumber,
                    DateOfJoining: DateofJoining,
                    Qualifications: Qualifications,
                    DoB: DoB,
                    Address: Address,
                    Gender: Gender,
                    Signature: Signature,
                    Resume: Resume,
                },
            }),
        }).then((res) => {
            console.log("Res:", res);
        })
        swal("", "Updated Registration Details", "success");
        handlechange();
    }

    return (
        <div className="wrapper hover_collapse" >
            <StudentMainNav></StudentMainNav>
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
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Email</label>
                                    <input type="email" class="form-control" id="Email" value={Email} placeholder="Email" onChange={(event) => { setEmail(event.target.value) }} />
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Gender</label>
                                        <select id="Gender" class="form-control" onChange={(event) => { setGender(event.target.value) }}>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Others</option>
                                        </select>
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
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Address </label>
                                    <textarea id="Address" class="form-control" value={Address} placeholder="Address" onChange={(event) => { setAddress(event.target.value) }} />
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Resume</label>
                                        <input type="file" class="form-control-file" id="Resume" onChange={(event) => { setResume(event.target.value) }} />
                                    </div>
                                    <div class="form-group col-md-6">
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
        // </div>
    )
}
