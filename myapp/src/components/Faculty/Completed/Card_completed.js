import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Pending/Card.css"
import { Link, useParams } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import axios from "axios";

const Card_completed = (props) => {
  const val = 13000;
  const [show, setShow] = useState(false);
  const [clickstatus, setStatus] = useState(false);

  const { username } = useParams();
  let id = props.id;
  useEffect(() => {
    axios.post('http://localhost:3001/ongoing')
      .then(res => {
        console.log('Data: ', res.data.data[props.id].status)  // have to take the project array index which we wanted to update
        console.log(id);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  return (
    <Card key={props.id} className="card">
      <Card.Body>
        <div class="header">
          <MDBContainer>
            <MDBRow className='box_text'>
              <MDBCol className='main_text' size='6' sm='3'>Project Code</MDBCol>
              <MDBCol size='6' sm='3'>&ensp;{props.projectCode}</MDBCol>
            </MDBRow>
            <MDBRow className='box_text'>
              <MDBCol className='main_text' size='6' sm='3'>Project Name</MDBCol>
              <MDBCol size='6' sm='3'>&ensp;{props.projectName}</MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        {show ?
          <div>
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
              <div class="list-group-item ">
                <div class="fw-bold">Closed : </div>
                &ensp;{props.closed ? "True" : "False"}
              </div>
            </ul>
            <ul class="list-group list-group-flush rightside">
              <div class="list-group-item ">
                <div class="fw-bold">Faculty ID: </div>
                &ensp;{props.facultyID}
              </div>
              <div class="list-group-item ">
                <div class="fw-bold">Organisation Type: </div>
                &ensp;{props.organisationType}
              </div>
              <div class="list-group-item ">
                <div class="fw-bold">Staff: </div>
                &ensp;{props.staff}
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
              <div className="tax_but">
                <Link to={"/Faculty/" + username + "/tax"}>
                  <Button variant="primary" className="Button1">Tax Details</Button>
                </Link>
                {console.log(clickstatus)}
              </div>
            </ul>
          </div>
          : null
        }
        <Button variant="primary" className="butt" onClick={() => setShow(!show)}>{show ? "Read Less" : "Read More"}</Button>
      </Card.Body>
    </Card>
  )

}

export default Card_completed;