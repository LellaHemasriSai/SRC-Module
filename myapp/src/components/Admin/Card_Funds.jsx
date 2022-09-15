import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import "./Card.css";


/*Card for funds extension in Admin Page*/
const Cards = (props) => {

  const [show, setShow] = useState(false);
  const [clickstatus, setStatus] = useState(false);
  const [sh, setsh] = useState(false);
  const handleOnClick = () => {
    setsh(true);
  }
  // const handleButtonClick = () => { setStatus(true); + setTimeout(() => { + setStatus(false) + }, 3000); } 
  function image() {
    return (
      <>
        <img className="qrcode" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/QR-code-obituary.svg/2277px-QR-code-obituary.svg.png" alt="QRCode" />
      </>
    )
  }



  function postData(projectCode, facultyID, status, _id) {
    console.log("Submitted")
    fetch("/updateFundApproval", {
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
              <Button variant="primary" className="Button1" onClick={() => { postData(props.projectCode, props.facultyID, true, props._id); setStatus(true); }}>Sanction Funds</Button>
              {clickstatus ? image() : null}
              <Button variant="primary" className="Button1" onClick={() => { postData(props.projectCode, props.facultyID, true, props._id) }}>Disapprove</Button>
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