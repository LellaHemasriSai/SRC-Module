import Card from "./Card_Duration";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Faculty/ongoing/ongoing.css";
import { AdminMainNav } from '../App';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import timeline from "../../images/timeline.svg"
const Duration_Extension = () => {

  const [cardinfo, setCardInfo] = useState([])

  console.log("Submitted")

  useEffect(() => {
    axios.post('http://localhost:3001/sendDurationExtension')
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
        <div className="container">
        <div className="main">
            <div className='head_wrap'>
            <span><img src={timeline} style={{ width: "30px", height: "30px" }} alt="timeline"/></span>
            <span><h1 id="head_text">Duration Extension</h1></span>
          </div>
          <section class="card-container">
            {cardinfo.length===0? <h2 style={{ marginLeft:"auto",marginRight:"auto",
            marginTop:"30%" , color:"GrayText"}}>No Requests for Duration Extension</h2> :
            cardinfo.map((card, index) => (
              <Card id={index} code={card.projectID} 
              name={card.projectName} 
              type={card.projectType} 
              facultyID={card.facultyID} 
              prevDate={new Date(JSON.stringify(card.prevDate).substring(1,11)).getDay()+"/" + new Date(JSON.stringify(card.prevDate).substring(1,11)).getMonth()+"/"+new Date(JSON.stringify(card.prevDate).substring(1,11)).getFullYear()} 
              newDate={new Date(JSON.stringify(card.newDate).substring(1,11)).getDay()+"/" + new Date(JSON.stringify(card.newDate).substring(1,11)).getMonth()+"/"+new Date(JSON.stringify(card.newDate).substring(1,11)).getFullYear()} 
              description={card.description} 
              content="Extend Duration" />
            ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Duration_Extension;
