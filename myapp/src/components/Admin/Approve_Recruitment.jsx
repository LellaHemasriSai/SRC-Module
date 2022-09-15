import Card from "./Card_Recruitment";
import { AdminMainNav } from '../App';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import recruit from "../../images/recruit.svg"


/*Faculty sends a request to admin to get recruitment approval for a particular project */

const Approve_Recruitment = () => {

  const [cardinfo, setCardInfo] = useState([])

  console.log("Submitted")

  useEffect(() => {              /* get data from request recruitment form in faculty */
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
    <div className="container"> 
    <div className="main">  
    <div className='head_wrap'>
            <span><img src={recruit} style={{ width: "30px", height: "30px" }} alt="recruit"/></span>
            <span><h1 id="head_text">Approve Recruitment</h1></span>
      </div>
    <section class="card-container">
     {cardinfo.length===0? <h2 style={{ marginLeft:"auto",marginRight:"auto",
            marginTop:"30%" , color:"GrayText"}}>No Requests for Staff Recruitment</h2> :
      cardinfo.map((card,index) => (
      <Card key={index} 
      code={card.projectID} 
      name ={card.projectName} 
      facultyID={card.facultyID} 
      staff={card.numberOfStaff} 
      startDate={new Date(JSON.stringify(card.startDate).substring(1,11)).getDay()+"/" + new Date(JSON.stringify(card.startDate).substring(1,11)).getMonth()+"/"+new Date(JSON.stringify(card.startDate).substring(1,11)).getFullYear()} 
      endDate={new Date(JSON.stringify(card.endDate).substring(1,11)).getDay()+"/" + new Date(JSON.stringify(card.endDate).substring(1,11)).getMonth()+"/"+new Date(JSON.stringify(card.endDate).substring(1,11)).getFullYear()}
      description={card.description}
      ></Card>))}
    </section>
   </div>
   </div>
   </div> 
   </div>
  );
}

export default Approve_Recruitment;
