import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Faculty/ongoing/ongoing.css";
import { AdminMainNav } from '../App';
import axios from 'axios';
import project from "../../images/check.svg"
import React, { useEffect, useState } from 'react';

/*projects that are sent by the faculty to get approval from the admin*/

const Approve_project = () => {
  const [cardinfo, setCardInfo] = useState([])

  console.log("Submitted")

  useEffect(() => {                /* get data from pending approvals */
    axios.post('http://localhost:3001/pendingApprovals')
      .then(res => {
        console.log('Data: ', res.data.data)
        setCardInfo(res.data.data)

      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <div className="wrapper hover_collapse">
      <AdminMainNav></AdminMainNav>  
      <div className="main_container">
        <div className="container" style={{ textAlign: "center" }}>
        <div className="main"> 
            <div className='head_wrap'>
            <span><img src={project} style={{ width: "30px", height: "30px" }} alt="projects"/></span>
            <span><h1 id="head_text">Approve Projects</h1></span>
          </div>
          <div className='grid'>
            {cardinfo.length===0? <h2 style={{ marginLeft:"auto",marginRight:"auto",
            marginTop:"10%" , color:"GrayText"}}>No Requests for Project Approval</h2> :
            cardinfo.map((card, index) => (
              <Card id={index} 
              projectName={card.agencyName} 
              projectType={card.projectType} 
              agencyCode={card.agencyCode} 
              agencyName={card.agencyName} 
              approval={card.approval} 
              resourceApproval={card.resourceApproval} 
              fundApproval={card.fundApproval} 
              closed={card.closed} 
              facultyID={card.facultyID} 
              organisationType={card.organizationType} 
              staff={card.staff} 
              sanctionFund={card.sanctionFund} 
              startDate={card.startDate} 
              endDate={card.endDate} 
              status={card.status} 
              description={card.description} 
              _id={card._id} content="Approve Project" />
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Approve_project;
