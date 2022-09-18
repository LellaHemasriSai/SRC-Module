import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import "./Card.css";
/*Card Component used in Approve_pojects.jsx*/

/*Used to Approve Projects by Admin*/
const Cards = (props) => {

  const [show, setShow] = useState(false);
  const [clickstatus, setStatus] = useState(false);
  function postData(projectCode, facultyID, status, _id) {
    console.log("Submitted")
    fetch("/updateProjectApprovalStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        projectCode: projectCode,
        facultyID: facultyID,
        approveStatus: status,
        id: _id,

      }),
    }).then((res) => {
      console.log("Res:", res);
    })
  }

  return (
    <Card key={props.id} className="card">
      <Card.Body>
        <div class="header">
          <MDBContainer>
            <MDBRow className='box_text'>
              <MDBCol className='main_text' size='6' sm='3'>Project Name</MDBCol>
              <MDBCol size='6' sm='3'>&ensp;{props.projectName}</MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        {show ?
          <div>
            <div class="card_body">
              <label class="desc">Description of the Project:</label>
              {props.description}
            </div>
            <ul class="list-group list-group-flush leftside">
              <div class="list-group-item ">
                <div class="fw-bold">Project Type: </div>
                &ensp;{props.projectType}
              </div>
              <div class="list-group-item ">
                <div class="fw-bold">Agency Code: </div>
                &ensp;{props.agencyCode}
              </div>
              <div class="list-group-item ">
                <div class="fw-bold">Agency Name: </div>
                &ensp;{props.agencyName}
              </div>
              <div class="list-group-item ">
                <div class="fw-bold">Approval: </div>
                &ensp;{props.approval ? "True" : "False"}
              </div>
              <div class="list-group-item ">
                <div class="fw-bold">ResourceApproval: </div>
                &ensp;{props.resourceApproval ? "True" : "False"}
              </div>
              <div class="list-group-item ">
                <div class="fw-bold">FundApproval : </div>
                &ensp;{props.fundApproval ? "True" : "False"}
              </div>
            </ul>
            <ul class="list-group list-group-flush rightside">
              <div class="list-group-item ">
                <div class="fw-bold">Faculty ID: </div>
                &ensp;{props.facultyID}
              </div>
              <div class="list-group-item ">
                <div class="fw-bold">Faculty Name: </div>
                &ensp;{props.faculty}
              </div>
              <div class="list-group-item ">
                <div class="fw-bold">Organisation Type: </div>
                &ensp;{props.organisationType}
              </div>
              <div class="list-group-item ">
                <div class="fw-bold">Sanction Fund: </div>
                &ensp;{props.sanctionFund}
              </div>
              <div class="list-group-item ">
                <div class="fw-bold">Start Date: </div>
                &ensp;{props.startDate}
              </div>
              <div class="list-group-item ">
                <div class="fw-bold">End Date: </div>
                &ensp;{props.endDate}
              </div>
            </ul>
            <div className="bgrp">
              <Button variant="primary" className="Button1" onClick={() => { postData(props.projectCode, props.facultyID, true, props._id) }}>Approve</Button>
              <Button variant="primary" className="Button1" onClick={() => { postData(props.projectCode, props.facultyID, false, props._id) }}>Disapprove</Button>
              {console.log(clickstatus)}
            </div>
          </div>
          : null
        }
        <Button variant="primary" className="butt" onClick={() => setShow(!show)}>{show ? "Read Less" : "Read More"}</Button>
      </Card.Body>
    </Card>
  )

}

export default Cards;