import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Faculty/ongoing/ongoing.css";
import { AdminMainNav } from '../App';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Approve_project = () => {
  const [cardinfo, setCardInfo] = useState([])

  console.log("Submitted")

  useEffect(() => {
    axios.post('http://localhost:3001/pendingApprovals')
      .then(res => {
        console.log('Data: ', res.data.data)
        setCardInfo(res.data.data)

      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  //   {domains.map((user) => {
  //     let keys = Object.keys(user);
  //     return (
  //       <Text style={styles.paragraph}>{keys.map((key) => {
  //         return (
  //           <Text>{`Key ${key}, value ${user[key]} \n`}</Text>
  //         )
  //       })}</Text>
  //     )
  //   })}

  return (
    <div className="wrapper hover_collapse">
      <AdminMainNav></AdminMainNav>
      <div className="main_container">
        <div className="container" style={{ textAlign: "center" }}>
          <div className='grid'>
            {cardinfo.map((card, index) => (
              <Card id={index} projectCode={card.projectCode} projectName={card.agencyName} projectType={card.projectType} agencyCode={card.agencyCode} agencyName={card.agencyName} approval={card.approval} resourceApproval={card.resourceApproval} fundApproval={card.fundApproval} closed={card.closed} facultyID={card.facultyID} organisationType={card.organizationType} staff={card.staff} sanctionFund={card.sanctionFund} startDate={card.startDate} endDate={card.endDate} status={card.status} description={card.description} content="Approve Project" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approve_project;
