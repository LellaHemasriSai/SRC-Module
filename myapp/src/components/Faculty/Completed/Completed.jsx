import React, { useEffect, useState } from 'react';
import Card from './Card_completed';
import "bootstrap/dist/css/bootstrap.min.css";
import "./completed.css";
import { MainNav } from '../../App';
import completed from "../../../images/completed.svg"
import axios from 'axios';
const Completed = () => {

  const [cardinfo, setCardInfo] = useState([])

  console.log("Submitted")

  useEffect(() => {
    axios.post('http://localhost:3001/completed')
      .then(res => {
        console.log('Data: ', res.data.data)
        setCardInfo(res.data.data)

      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div div className="wrapper hover_collapse" >
      <MainNav></MainNav>
      <div className="main_container">
        <div className="container" style={{ textAlign: "center" }}>
          <div  className='head_wrap'>
            <span><img src={completed} style={{ width: "28px", height: "28px" }} alt="completed"/></span>
            <span><h1 id="head_text">Completed Projects</h1></span>
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
                startDate={card.startDate}
                endDate={card.endDate}
                status={card.status}
                description={card.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completed;

