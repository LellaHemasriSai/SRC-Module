
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import './Card.css';
import {FcApproval} from 'react-icons/fc'
import {FcDisapprove} from 'react-icons/fc'
const CardApprove = (props) => {

  const [status, setstatus] = useState(0);


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

  return (
    <Card key={props.id} className="card_approval">
      <Card.Header>
        <div class="list-group-item " style={{float: 'left'}}>
        <div class="fw-bold">Project Name: </div>
        &ensp;{props.projectName}
        </div><br/><br/>
        <div class="list-group-item " style={{float: 'left'}}>
        <div class="fw-bold">Project Code: </div>
        &ensp;{props.projectCode}
        </div>
      </Card.Header>
      <Card.Body>
        <div>
          <ul class="list-group list-group-flush leftside">
            <div class="list-group-item ">
              <div class="fw-bold">Project Approval: </div>
              &ensp;{props.approval ? <FcApproval /> : <FcDisapprove />}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">ResourceApproval: </div>
              &ensp;{props.resourceApproval ? <FcApproval /> : <FcDisapprove />}
            </div>
            <div class="list-group-item ">
              <div class="fw-bold">FundApproval : </div>
              &ensp;{props.fundApproval ? <FcApproval />: <FcDisapprove/>}
            </div>
          </ul>
         </div>
      </Card.Body>
    </Card>
  )

}

export default CardApprove;