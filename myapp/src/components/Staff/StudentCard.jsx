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
  const [stud_id, setStud_id] = useState([])
  const [code,setCode]=useState([])

  useEffect(() => {
    axios.post('http://localhost:3001/:code/sendStaffDetails') // as of now not working
          // sending student code as params
      .then(res => {
        console.log('Data: ', res.data.data);
        console.log(res.data.data)
        setUserName(res.data.data.username);
        console.log(res.data.data.username)
        setContact(res.data.data.details.ContactNumber)
        setDep(res.data.data.details.Department)
        setEmail(res.data.data.details.Email)
        setQual(res.data.data.details.Qualifications)
        setStud_id(res.data.data._id)
        setCode(res.data.data.staffCode)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  function postApplication(id, _id) {
    console.log("Applied")
   // props.onHandle(id);
   console.log("application" ,{
        staffName: username,
        staffcode:code,
        projectID: id,
        department: dep,
        email: email,
        qualifications: qual,
        contact: contact,
        announceid: _id,
   })
    fetch("/updateOpportunitiesApplyNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        staffName: username,
        staffcode:code,
        projectID: id,
        department: dep,
        email: email,
        qualifications: qual,
        contact: contact,
        announceid: _id,

      }),
    },
    swal("", "Applied Successfully", "success"),
    ).then((res) => {
      console.log("Res:", res);
    })
    //swal("", "Applied Successfully", "success");
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
