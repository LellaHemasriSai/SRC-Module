import React, { useState, useEffect } from "react";
import axios from "axios";
import "./staff.css"
import swal from "sweetalert";



export default function StudentCard(props) {
  const [username, setUserName] = useState([])
  const [email, setEmail] = useState([])
  const [qual, setQual] = useState([])
  const [dep, setDep] = useState([])
  const [contact, setContact] = useState([])
  const [_id, set_id] = useState([])

  useEffect(() => {
    axios.post('http://localhost:3001/sendStaffDetails')
      .then(res => {
        console.log('Data: ', res.data.data);
        setUserName(res.data.data.username)
        setContact(res.data.data.details.ContactNumber)
        setDep(res.data.data.details.Department)
        setEmail(res.data.data.details.Email)
        setQual(res.data.data.details.Qualifications)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  function postApplication(id, _id) {
    console.log("Applied")
    props.onHandle(id);
    fetch("/updateOpportunitiesApplyNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        staffName: username,
        projectID: id,
        department: dep,
        email: email,
        qualifications: qual,
        contact: contact,
        announceid: _id,

      }),
    }).then((res) => {
      console.log("Res:", res);
    })
    swal("", "Applied Successfully", "success");
  }

  let start = new Date(props.start);
  let sDate = start.getDay() + "/" + start.getMonth() + "/" + start.getFullYear();
  let end = new Date(props.end);
  let eDate = end.getDay() + "/" + end.getMonth() + "/" + end.getFullYear();


  return (
    <div className='student_content'>
      <div class="content">
        <div className='header_text'>
          <span style={{ fontSize: "2.3rem", fontWeight: "900" }}>{props.name}</span>
        </div>
        <div>
          <span>
            {props.id}
          </span>
        </div>
        <div>
          <span>
            {props.type}
          </span>
        </div>
        <div className='application_text'>
          <span className='application_items'>
            <p className='items_p'>Faculty Name</p>
            <span>faculty</span>
          </span>
          <span className='application_items'>
            <p className='items_p'>Salary Details</p>
            <p>{props.details}</p>
          </span>
          <span className='application_items'>
            <p className='items_p'>Start Date</p>
            <p>{sDate}</p>
          </span>
          <span className='application_items'>
            <p className='items_p'>End Date</p>
            <p>{eDate}</p>
          </span>
        </div>
        <div className='application_text'>
          <span className='application_items'>
            <p className='items_p'>Required Qualifications:</p>
            <span>{props.qual}</span>
          </span>
        </div>
        <div className='home_text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <button onClick={() => { postApplication(props.id, props._id) }} className='apply_btn'>Apply Now</button>
      </div>
    </div>
  )
};
