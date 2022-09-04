import React,{useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import "./statusbarstyles.css"

const Cards = (props) => {

  const [show,setShow] = useState(false);

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
             { show?<div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">projectType -&ensp;{props.projectType}</li>
                <li class="list-group-item">agencyCode -&ensp;{props.agencyCode}</li>
                <li class="list-group-item">agencyName -&ensp;{props.agencyName}</li>
                <li class="list-group-item">approval -&ensp;{props.approval ? "True" : "False" }</li>
                <li class="list-group-item">resourceApproval -&ensp;{props.resourceApproval ? "True" : "False"}</li>
                <li class="list-group-item">fundApproval -&ensp;{props.fundApproval ? "True" : "False"}</li>
                <li class="list-group-item">closed -&ensp;{props.closed ? "True" : "False"}</li>
                <li class="list-group-item">facultyID -&ensp;{props.facultyID}</li>
                <li class="list-group-item">organisationType -&ensp;{props.organisationType}</li>
                <li class="list-group-item">staff -&ensp;{props.staff}</li>
                <li class="list-group-item">sanctionFund -&ensp;{props.sanctionFund}</li>
                <li class="list-group-item">startDate -&ensp;{props.startDate}</li>
                <li class="list-group-item">endDate -&ensp;{props.endDate}</li>
                <li class="list-group-item">status -&ensp;{props.status.toString()}</li>
                {/* <li class="list-group-item">_v -&ensp;{props._v}</li> */}
                <li class="list-group-item">announcements -&ensp;{props.announcements}</li>
              </ul>
              <div className="buttgrp">
                <Button variant="primary" className="buttitem">Extend Duration</Button>
                <Button variant="primary" className="buttitem">Staff Modification</Button>
                <Button variant="primary" className="buttitem">Additional Funds</Button>
              </div>
              </div>
                  : null
             }
             <CircularProgressbar value={props.status} text={`${props.status}%`} className="status"/>
              <Button variant="primary" className="butt" onClick={() =>setShow(!show)}>{show?"Read Less":"Read More"}</Button>
            </Card.Body>
          </Card>
)

}

export default Cards;