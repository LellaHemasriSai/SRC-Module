import React, { useState } from "react";
<<<<<<< HEAD
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import "./Card.css";
=======
import "../Staff/ongoing.css"
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import swal from 'sweetalert';
>>>>>>> 8f8dab4b984e2976672faaa83713df2afeb4a0a5

/* Card Component in Admin Page */

const Cards = (props) => {

  const [clickstatus, setStatus] = useState(false);
<<<<<<< HEAD
  function postData(projectCode, facultyID, status, _id) {
=======

  function postData(projectCode, facultyID, status, _id) {   
>>>>>>> 8f8dab4b984e2976672faaa83713df2afeb4a0a5
    /*sending data to backend whether the project is approved or not*/
    console.log("Submitted")
    fetch("/updateDurationApprovalStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        projectCode: projectCode,
        approveStatus: status,
        id: _id,

      }),
    }).then((res) => {
      console.log("Res:", res);
    })
    if(status)
    {
      swal("","Approved Duration Extension","success");
    }
    else
    {
      swal("","Disapproved Funds Extension","error");
    }
  }
<<<<<<< HEAD

  return (
    <Card key={props.id} className="card">
      <Card.Body>
        <div className="header">
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
            <div class="card_body">
              <label class="desc">Description of the Project:</label>
              {props.description}
            </div>
            <ul class="list-group list-group-flush leftside">
              <div class="list-group-item ">
                <div class="fw-bold">Project Type: </div>
                &ensp;{props.projectCode}
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
              {/*<div class="list-group-item ">
                <div class="fw-bold">Closed : </div>
                &ensp;{props.closed ? "True" : "False"}
        </div>*/}
            </ul>
            <ul class="list-group list-group-flush rightside">
              <div class="list-group-item ">
                <div class="fw-bold">Faculty ID: </div>
                &ensp;{props.facultyID}
              </div>
              <div class="list-group-item ">
                <div class="fw-bold">Faculty Name: </div>
                &ensp;{props.facultyName}
              </div>
              <div class="list-group-item ">
                <div class="fw-bold">Organisation Type: </div>
                &ensp;{props.organisationType}
              </div>
              {/*<div class="list-group-item ">
                <div class="fw-bold">Staff: </div>
                &ensp;{props.staff}
    </div>*/}
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
              {/*<div class="list-group-item ">
                <div class="fw-bold">Status: </div>
                &ensp;{props.status.toString()}
  </div>*/}
            </ul>

            <div className="butGRP">
              <Button variant="primary" className="Button1" onClick={() => { postData(props.projectCode, props.facultyID, true, props._id) }}>Approve Extension</Button>
              <Button variant="primary" className="Button1" onClick={() => { postData(props.projectCode, props.facultyID, true, props._id) }}>Disapprove</Button>
              {console.log(clickstatus)}
            </div>
          </div>
          : null
        }
        <Button variant="primary" className="butt" onClick={() => setShow(!show)}>{show ? "Read Less" : "Read More"}</Button>
      </Card.Body>
    </Card>
  )
=======
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
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Project Type</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.type}</MDBCol>
      </MDBRow>
    <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Faculty Name</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>faculty</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Faculty ID</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.facultyID}</MDBCol>
      </MDBRow>
    <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>previous End Date</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.prevDate}</MDBCol>
    </MDBRow>
    <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>new End Date</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.newDate}</MDBCol>
    </MDBRow>
      <MDBRow className='box_text' style={{marginBottom:"2px"} }>
      <MDBCol className='box_content_text main_text' style={{width:"100%"}} size='6' sm='3'>Reason For Extension</MDBCol>
    </MDBRow>
    <MDBRow className='box_text'  style={{marginTop:"0px" ,marginBottom:"15px" } }>
       <MDBCol className='box_content_text' style={{width:"100%",textAlign:"left" } } size='6' sm='3'>{props.description}</MDBCol>
    </MDBRow>
    <MDBRow style={{}}>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'><button  className='approve_btn'onClick={() => { postData(props.code, 'ID', true, props._id) }} >Approve </button></MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'><button className='disapprove_btn'  onClick={() => { postData(props.code, 'ID', false, props._id) }}>Disapprove</button></MDBCol>   {/**change 'ID' to props.facultyID after getting it from backend as of now keep it as ID */}
    </MDBRow>
	</MDBContainer>
	</div>
    )
 
>>>>>>> 8f8dab4b984e2976672faaa83713df2afeb4a0a5

}

export default Cards;


          