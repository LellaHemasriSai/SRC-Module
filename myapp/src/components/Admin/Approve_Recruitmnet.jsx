import Card from "./Card_Recruitment";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Faculty/ongoing/ongoing.css";
import { AdminMainNav } from '../App';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Approve_Recruitment = () => {

  const [cardinfo, setCardInfo] = useState([])

  console.log("Submitted")

  useEffect(() => {
    axios.post('http://localhost:3001/sendRecruitmentApprovals')
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
    <div className="container" style={{textAlign:"center"}}>
    <div className='grid'>
    {cardinfo.map((card,index) => (
      <Card id={index} 
    projectCode={card.projectID} 
    projectName ={card.projectName} 
    approval={card.approval} 
    facultyID={card.facultyID} 
    staff={card.numberOfStaff} 
    startDate={card.startDate} 
    endDate={card.endDate} 
    description={card.description}
    content="Approve Recruitment"/>
    ))}
   </div>
   </div>
   </div>
   </div>
  );
}

export default Approve_Recruitment;
