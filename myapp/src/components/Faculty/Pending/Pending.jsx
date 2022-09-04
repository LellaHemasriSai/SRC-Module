import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "./pending.css";
import { MainNav } from '../../App';
const Pending = () => {
 

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
    <div div className="wrapper hover_collapse" >
      <MainNav></MainNav>
   <div className="main_container">
    <div className="container" style={{textAlign:"center"}}>
    <div className='grid'>
        {cardinfo.map((card, i) => (
          <Card id={i} projectCode={card.projectCode} projectName={card.projectName} projectType={card.projectType} agencyCode={card.agencyCode} agencyName={card.agencyName} approval={card.approval} resourceApproval={card.resourceApproval} fundApproval={card.fundApproval} closed={card.closed} facultyID={card.facultyID} organisationType={card.organizationType} staff={card.staff} sanctionFund={card.sanctionFund} startDate={card.startDate} endDate={card.endDate} status={card.status} description={card.description} _v={card._v} announcements={card.announcements} />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}
export default Pending;


