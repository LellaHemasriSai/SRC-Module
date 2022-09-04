import React from "react";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

const card = (props) => {

return (
<Card key={props.id} className="card">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
            <div className="header">
              <Card.Title className="leftheader">ProjectCode:{props.projectCode} </Card.Title>
              <Card.Title className="rightheader">ProjectName:{props.projectName} </Card.Title>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">projectType: {props.projectType}</li>
                <li class="list-group-item">agencyCode: {props.agencyCode}</li>
                <li class="list-group-item">agencyName: {props.agencyName}</li>
                <li class="list-group-item">approval: {props.approval}</li>
                <li class="list-group-item">resourceApproval: {props.resourceApproval}</li>
                <li class="list-group-item">fundApproval: {props.fundApproval}</li>
                <li class="list-group-item">closed: {props.closed}</li>
                <li class="list-group-item">facultyID: {props.facultyID}</li>
                <li class="list-group-item">organisationType: {props.organisationType}</li>
                <li class="list-group-item">staff: {props.staff}</li>
                <li class="list-group-item">sanctionFund: {props.sanctionFund}</li>
                <li class="list-group-item">startDate: {props.startDate}</li>
                <li class="list-group-item">endDate: {props.endDate}</li>
                <li class="list-group-item">status: {props.status}</li>
                <li class="list-group-item">_v: {props._v}</li>
                <li class="list-group-item">announcements: {props.announcements}</li>
              </ul>
              <Card.Text className="card_body">
                {props.description}
              </Card.Text>
            </Card.Body>
          </Card>
)

}

export default card;