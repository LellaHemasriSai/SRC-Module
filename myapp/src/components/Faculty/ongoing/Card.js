import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import "./statusbarstyles.css"
import { useParams, Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
const Cards = (props) => {

  const [show, setShow] = useState(false);
  const [status, setstatus] = useState(0);
  const handleChange = event => {
    setstatus(event.target.value);
  };
  const handleClick = event => {
    console.log('old value: ', status);
    setstatus(0);
  };
  const reset = event => {
    setstatus(0);
  }
  function postData(_id) {
    let value;
    value = status;
    handleClick();
    reset();

    fetch("/updateProjectStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({            //updating status of project in database
        status: value,
        _id: _id

      }),
    }).then((res) => {
      console.log("Res:", res);
    })
  }
  let id = props.id;
  useEffect(() => {
    axios.post('http://localhost:3001/ongoing')
      .then(res => {
        console.log('Data: ', res.data.data[props.id].status)  // have to take the project array index which we wanted to update
        console.log(id);
        setstatus(res.data.data[props.id].status)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const { username } = useParams();
  return (
    <Card key={props.id} className="card">
      <Card.Body>
        <CircularProgressbar value={status} text={`${status}%`} className="status" />
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
        <input type="text" value={status} onChange={handleChange} style={{ float: 'right', width: '60px' }} />
        <Button variant="primary" className="statbutt" onClick={() => { postData(props._id) }} >Update Status</Button>
        <Link to={"/Faculty/" + username + "/cardapproval"} className="linkapprove">
          <Button variant="primary" className="approvalbutt">Check Approval status</Button>
        </Link>
        {show ? <div>
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
              &ensp;{props.startDate.substring(0, 10)}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">End Date: </div>
              &ensp;{props.endDate.substring(0, 10)}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">Status: </div>
              &ensp;{status}
            </div>
          </ul>
          <div>
            <div class="form-group col-md-6">
              <label>Comment</label>
              <textarea id="Comment" class="form-control" placeholder="Comment...." />
            </div>
            <div class="form-group col-md-3" style={{ marginTop: '33px' }}>
              <button type="button" class="btn btn-outline-primary">
                Cancel
              </button>
              <div class="form-group col-md-3">
                <button type="button" class="btn btn-primary" >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6" >
              <Link to={"/Faculty/" + username + "/extend_duration"}
                state={{
                  name: props.projectName,
                  id: props.projectCode,
                  type: props.projectType,
                  start: new Date(props.startDate),
                  end: new Date(props.endDate),
                }}>
                <Button variant="primary" className="buttitem">Extend Duration</Button>
              </Link>
            </div>
            <div class="form-group col-md-6" >
              <Link to={"/Faculty/" + username + "/modify_staff"}
                state={{
                  name: props.projectName,
                  id: props.projectCode,
                  type: props.projectType,
                  start: new Date(props.startDate),
                  end: new Date(props.endDate),
                }}>
                <Button variant="primary" className="buttitem">Staff Modification</Button>
              </Link>
            </div>
            <div class="form-group col-md-6" >
              <Link to={"/Faculty/" + username + "/funds_extension"}
                state={{
                  name: props.projectName,
                  id: props.projectCode,
                  type: props.projectType,
                  start: new Date(props.startDate),
                  end: new Date(props.endDate),
                  sanction: props.sanctionFund
                }}  >
                <Button variant="primary" className="buttitem">Additional Funds</Button>
              </Link>
            </div>
            <div class="form-group col-md-6">
              <Link to={"/Faculty/" + username + "/list"}>
                <Button variant="primary" className="buttitem">View Details</Button>
              </Link>
            </div>
          </div>
        </div>
          : null
        }
        { }
        <Button variant="primary" className="butt" onClick={() => setShow(!show)}>{show ? "Read Less" : "Read More"}</Button>
      </Card.Body>
    </Card>
  )

}

export default Cards;