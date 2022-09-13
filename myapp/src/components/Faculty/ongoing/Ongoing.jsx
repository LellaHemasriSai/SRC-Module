import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ongoing.css";
import { MainNav } from '../../App';
import ongoing from "../../../images/ongoing.svg"
const Ongoing = () => {
  const [cardinfo, setCardInfo] = useState([])

  console.log("Submitted")

  useEffect(() => {
    axios.post('http://localhost:3001/ongoing')
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
      <MainNav></MainNav>
      <div className="main_container">
        <div className="container" style={{ textAlign: "center" }}>
            <div  className='head_wrap'>
            <span><img src={ongoing} style={{ width: "28px", height: "28px" }} alt="ongoing"/></span>
            <span><h1 id="head_text">Ongoing Projects</h1></span>
            </div>
          <div className='grid'>
            {cardinfo.map((card, index) => (
              <Card id={index}
                projectCode={card.projectCode}
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
                staff={card.staff} sanctionFund={card.sanctionFund}

                startDate={new Date(JSON.stringify(card.startDate).substring(1,11)).getDay()+"/" + new Date(JSON.stringify(card.startDate).substring(1,11)).getMonth()+"/"+new Date(JSON.stringify(card.startDate).substring(1,11)).getFullYear()}

                endDate={new Date(JSON.stringify(card.endDate).substring(1,11)).getDay()+"/" + new Date(JSON.stringify(card.endDate).substring(1,11)).getMonth()+"/"+new Date(JSON.stringify(card.endDate).substring(1,11)).getFullYear()}

                status={card.status}
                description={card.description} 
                _id = {card._id}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ongoing;

