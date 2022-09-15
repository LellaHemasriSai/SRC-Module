import React, { useState } from "react";
import "../Staff/ongoing.css"
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Card(props){

   const [show, setShow] = useState(false);
  const [clickstatus, setStatus] = useState(false);
  function postData(projectCode, facultyID, status, _id) {
    console.log("Submitted")
    fetch("/updateRecruitmentApprovalStatus", {
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
    <div class="card_ongoing">
		<MDBContainer style={{paddingLeft:"10%"}} className='student_box_text'>
		<MDBRow className='box_text'>
        <MDBCol className='box_content_text main_text' size='6' sm='3'>Project Name</MDBCol>
        <MDBCol className='box_content_text' size='6' sm='3'>{props.name}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Project ID</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.code}</MDBCol>
      </MDBRow>
    <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Faculty Name</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>faculty</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Faculty ID</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>facultyID</MDBCol>
      </MDBRow>
    <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Staff Required</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.staff}</MDBCol>
    </MDBRow>
    <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Start Date</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.startDate}</MDBCol>
    </MDBRow>
    <MDBRow className='box_text'>
        <MDBCol className='box_content_text main_text' size='6' sm='3'>End Date</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.endDate}</MDBCol>
    </MDBRow>
  {/*  <MDBRow className='box_text'>
      <MDBCol className='box_content_text main_text' size='6' sm='3'>Description</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.description}</MDBCol>
    </MDBRow>*/}
    <MDBRow style={{}}>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'><button  className='approve_btn' onClick={() => { postData(props.projectCode, props.facultyID, true, props._id) }}>Approve</button></MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'><button className='disapprove_btn' onClick={() => { postData(props.projectCode, props.facultyID, false, props._id) }}>Disapprove</button></MDBCol>
    </MDBRow>
	</MDBContainer>
	</div>
    )
}




/*import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

const Cards = (props) => {

  const [show, setShow] = useState(false);
  const [clickstatus, setStatus] = useState(false);
  function postData(projectCode, facultyID, status, _id) {
    console.log("Submitted")
    fetch("/updateRecruitmentApprovalStatus", {
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
      <Card.Img variant="top" src="holder.js/100px160" /> 
      <Card.Body>
        <div className="header">
          <Card.Title className="leftheader">ProjectCode - &ensp;{props.projectCode} </Card.Title>
          <Card.Title className="rightheader">ProjectName -&ensp;{props.projectName} </Card.Title>
        </div>
        <Card.Text className="card_body">
          {props.description}
        </Card.Text>
        {show ?
          <div>
            <ul class="list-group list-group-flush leftside">
              <li class="list-group-item">approval -&ensp;{props.approval ? "True" : "False"}</li>
            </ul>
            <ul class="list-group list-group-flush rightside">
              <li class="list-group-item">facultyID -&ensp;{props.facultyID}</li>
              <li class="list-group-item">Staff Required -&ensp;{props.staff}</li>
              <li class="list-group-item">startDate -&ensp;{props.startDate}</li>
              <li class="list-group-item">endDate -&ensp;{props.endDate}</li>
            </ul>

            <div className="butGRP">
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

export default Cards;*/