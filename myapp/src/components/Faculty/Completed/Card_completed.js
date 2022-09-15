import React, { useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Admin/Card.css";
import Tax from "./Tax_Calculator";
import {Link,useParams} from "react-router-dom";

const Card_completed = (props) => {
  const val = 13000;
  const [show, setShow] = useState(false);
  const [clickstatus, setStatus] = useState(false);
//   function postData(projectCode, facultyID, status, _id) {
//     console.log("Submitted")
//     fetch("/updateProjectApprovalStatus", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         projectCode: projectCode,
//         facultyID: facultyID,
//         approveStatus: status,
//         id: _id,

//       }),
//     }).then((res) => {
//       console.log("Res:", res);
//     })
//   }
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
              <Button variant="primary" className="Button1" >Approve</Button>
              <Button variant="primary" className="Button1" >Disapprove</Button>
              <Link to={"/Faculty/" + username + "/tax"}>
              <Button variant="primary" className="Button1">Tax Details</Button>
              </Link>
              {console.log(clickstatus)}
            </div>
            {/* <Tax cost={val}/> */}
          </div>
          : null
        }
        <Button variant="primary" className="butt" onClick={() => setShow(!show)}>{show ? "Read Less" : "Read More"}</Button>
      </Card.Body>
    </Card>
  )

}

export default Card_completed;