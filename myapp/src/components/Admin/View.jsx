import Card from '../Faculty/ongoing/Card'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Faculty/ongoing/ongoing.css";
import { AdminMainNav } from '../App';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import create from "../../images/create.svg"
const View = () => {
  const [cardinfo, setCardInfo] = useState([])

  console.log("Submitted")

  useEffect(() => {
    axios.post('http://localhost:3001/pending')
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
      <div className="main_container">
    <div className="container" style={{textAlign:"center"}}>
    <div className='head_wrap'>
            <span><img src={create} style={{ width: "30px", height: "30px" }} alt="create"/></span>
            <span><h1 id="head_text">View Projects</h1></span>
      </div>
    <div className='grid'>
    <AdminMainNav></AdminMainNav>
    {cardinfo.map((card,index) => (
      <Card id={index} projectCode={card.projectCode} projectName ={card.agencyName} projectType={card.projectType} agencyCode={card.agencyCode} agencyName={card.agencyName} approval={card.approval} resourceApproval={card.resourceApproval} fundApproval={card.fundApproval} closed={card.closed} facultyID={card.facultyID} organisationType={card.organizationType} staff={card.staff} sanctionFund={card.sanctionFund} startDate={card.startDate} endDate={card.endDate} status={card.status} description={card.description}/>
    ))}
   </div>
   </div>
   </div>
   </div>
  );
}

export default View;

