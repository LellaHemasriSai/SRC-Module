import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import "./statusbarstyles.css"
import ExtendDuration from "../Extend_Duration/extend_duration";
import { useParams, Link } from "react-router-dom";
const Cards = (props) => {

  const [show, setShow] = useState(false);
  const [status, setstatus] = useState(0);
  // const update  = () => {
  //   const value = prompt("Enter current progress");
  //   setstatus(value);
  // }
  // const value = prompt("Enter current progress");
  function postData(_id) {
    const value = prompt("Enter current progress");
    setstatus(value);
    fetch("/updateProjectStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: value,
        _id: _id

      }),
    }).then((res) => {
      console.log("Res:", res);
    })
  }

  const { username } = useParams();
  return (
    <Card key={props.id} className="card">
      {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
      <Card.Body>
        <div className="header">
          <Card.Title className="leftheader">ProjectCode - &ensp;{props.projectCode} </Card.Title>
          <Card.Title className="rightheader">ProjectName -&ensp;{props.projectName} </Card.Title>
        </div>
        <Card.Text className="card_body">
          {props.description}
        </Card.Text>
        {show ? <div>
          <ul class="list-group list-group-flush leftside">
            <li class="list-group-item">projectType -&ensp;{props.projectType}</li>
            <li class="list-group-item">agencyCode -&ensp;{props.agencyCode}</li>
            <li class="list-group-item">agencyName -&ensp;{props.agencyName}</li>
            <li class="list-group-item">approval -&ensp;{props.approval ? "True" : "False"}</li>
            <li class="list-group-item">resourceApproval -&ensp;{props.resourceApproval ? "True" : "False"}</li>
            <li class="list-group-item">fundApproval -&ensp;{props.fundApproval ? "True" : "False"}</li>
            <li class="list-group-item">closed -&ensp;{props.closed ? "True" : "False"}</li>
          </ul>
          <ul class="list-group list-group-flush rightside">
            <li class="list-group-item">facultyID -&ensp;{props.facultyID}</li>
            <li class="list-group-item">organisationType -&ensp;{props.organisationType}</li>
            <li class="list-group-item">staff -&ensp;{props.staff}</li>
            <li class="list-group-item">sanctionFund -&ensp;{props.sanctionFund}</li>
            <li class="list-group-item">startDate -&ensp;{props.startDate}</li>
            <li class="list-group-item">endDate -&ensp;{props.endDate}</li>
            <li class="list-group-item">status -&ensp;{props.status.toString()}</li>
            <li class="list-group-item">announcements -&ensp;{props.announcements}</li>
          </ul>
          <div className="buttgrp">
            <Link to={"/Faculty/" + username + "/extend_duration"}>
              <Button variant="primary" className="buttitem">Extend Duration</Button>
            </Link>
            <Link to={"/Faculty/" + username + "/modify_staff"}>
              <Button variant="primary" className="buttitem">Staff Modification</Button>
            </Link>
            <Link to={"/Faculty/" + username + "/]funds_extension"}>
              <Button variant="primary" className="buttitem">Additional Funds</Button>
            </Link>
            <Button variant="primary" className="statbutt" onClick={() => { postData(props._id) }}>Update Status</Button>
          </div>
        </div>
          : null
        }
        <CircularProgressbar value={status} text={`${status}%`} className="status" />

        <Button variant="primary" className="butt" onClick={() => setShow(!show)}>{show ? "Read Less" : "Read More"}</Button>
      </Card.Body>
    </Card>
  )

}

export default Cards;