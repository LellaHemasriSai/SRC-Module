import Card from "./Card_Funds";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Faculty/ongoing/ongoing.css";
import { AdminMainNav } from '../App';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import dollar from "../../images/dollar.svg"
const Funds = () => {

  const [cardinfo, setCardInfo] = useState([])

  console.log("Submitted")

  useEffect(() => {
    axios.post('http://localhost:3001/sendFundsRequest')
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
        <div className="container" >
         <div className="main">
         <div className='head_wrap'>
            <span><img src={dollar} style={{ width: "30px", height: "30px" }} alt="dollar"/></span>
            <span><h1 id="head_text">Approve Funds</h1></span>
          </div>
          <section class="card-container">
            { cardinfo.length===0? <h2 style={{ marginLeft:"auto",marginRight:"auto",
            marginTop:"30%" , color:"GrayText"}}>No Requests for Additional Funds</h2> :
            cardinfo.map((card, index) => (
              <Card id={index} 
              code={card.projectID} 
              name={card.projectName} 
              projectType={card.projectType}
               facultyID={card.facultyID} 
                facultyName={card.facultyName}
                AdditionalFunds={card.extendSanctionValue}
                content="Approve Funds" />
            ))}
            </section>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Funds;
