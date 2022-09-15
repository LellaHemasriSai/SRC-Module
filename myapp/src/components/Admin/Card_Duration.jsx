import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

/* Card Component in Admin Page */

const Cards = (props) => {

  const [show, setShow] = useState(false);
  const [clickstatus, setStatus] = useState(false);
  function postData(projectCode, facultyID, status, _id) {   
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
  }

  return (
    <Card key={props.id} className="card">
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

}

export default Cards;