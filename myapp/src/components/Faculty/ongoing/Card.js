import React from "react";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";



const card = (card) => {

return (
<Card key={card.id} className="card">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title className="card_projectcode_left">Code:{card.projectCode}  Name:{card.projectName} </Card.Title>
              <Card.Subtitle className="mb-2 text-muted subtitle">projectType: {card.projectType}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subtitle">agencyCode: {card.agencyCode}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subtitle">agencyName: {card.agencyName}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subtitle">approval: {card.approval}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subtitle">resourceApproval: {card.resourceApproval}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subtitle">fundApproval: {card.fundApproval}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subtitle">closed: {card.closed}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subtitle">facultyID: {card.facultyID}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subtitle">organisationType: {card.organisationType}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subtitle">staff: {card.staff}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subtitle">sanctionFund: {card.sanctionFund}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subtitle">startDate: {card.startDate}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subtitle">endDate: {card.endDate}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted subtitle">status: {card.status}</Card.Subtitle>
              <Card.Text className="card_body">
                {card.description}
              </Card.Text>
            </Card.Body>
          </Card>
)

}

export default card;