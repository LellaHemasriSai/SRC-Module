import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../ongoing/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import "./pending.css";
import { MainNav } from '../../App';
const Pending = () => {
  // const cardinfo = [

  //    { _id:"1", projectCode: "12345",
  //    projectName: "SRC",
  //    projectType: "Web",
  //    agencyCode: "X2450",
  //    agencyName: "TCS",
  //    approval: "0",
  //    resourceApproval: "1",
  //    fundApproval: "0",
  //    closed: "0",
  //    facultyID: "94350",
  //    organizationType: "Global",
  //    staff: ["nam","manas","hems"],
  //    sanctionFund: "20000",
  //    startDate: "01-01-2022",
  //    endDate: "10-01-2022",
  //    status: "1",
  //    description: "This is description regarding project"},
  //  { _id:"2", projectCode: "2345",
  //  projectName: "SRC",
  //  projectType: "Web",
  //  agencyCode: "X2450",
  //  agencyName: "TCS",
  //  approval: "0",
  //  resourceApproval: "1",
  //  fundApproval: "0",
  //  closed: "0",
  //  facultyID: "94350",
  //  organizationType: "Global",
  //  staff: ["nam","manas","hems"],
  //  sanctionFund: "20000",
  //  startDate: "01-01-2022",
  //  endDate: "10-01-2022",
  //  status: "1",
  //  description: "This is description regarding project"},
  //  { _id:"3", projectCode: "2345",
  //  projectName: "SRC",
  //  projectType: "Web",
  //  agencyCode: "X2450",
  //  agencyName: "TCS",
  //  approval: "0",
  //  resourceApproval: "1",
  //  fundApproval: "0",
  //  closed: "0",
  //  facultyID: "94350",
  //  organizationType: "Global",
  //  staff: ["nam","manas","hems"],
  //  sanctionFund: "20000",
  //  startDate: "01-01-2022",
  //  endDate: "10-01-2022",
  //  status: "1",
  //  description: "This is description regarding project"},
  //  { _id:"4", projectCode: "2345",
  //  projectName: "SRC",
  //  projectType: "Web",
  //  agencyCode: "X2450",
  //  agencyName: "TCS",
  //  approval: "0",
  //  resourceApproval: "1",
  //  fundApproval: "0",
  //  closed: "0",
  //  facultyID: "94350",
  //  organizationType: "Global",
  //  staff: ["nam","manas","hems"],
  //  sanctionFund: "20000",
  //  startDate: "01-01-2022",
  //  endDate: "10-01-2022",
  //  status: "1",
  //  description: "This is description regarding project"},
  //  { _id:"5", projectCode: "2345",
  //  projectName: "SRC",
  //  projectType: "Web",
  //  agencyCode: "X2450",
  //  agencyName: "TCS",
  //  approval: "0",
  //  resourceApproval: "1",
  //  fundApproval: "0",
  //  closed: "0",
  //  facultyID: "94350",
  //  organizationType: "Global",
  //  staff: ["nam","manas","hems"],
  //  sanctionFund: "20000",
  //  startDate: "01-01-2022",
  //  endDate: "10-01-2022",
  //  status: "1",
  //  description: "This is description regarding project"},
  // ]

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
      <div className="grid" style={{ marginLeft: "300px", marginTop: "50px" }}>
        <MainNav></MainNav>
        {cardinfo.map((card, i) => (
          <Card id={i} projectCode={card.projectCode} projectName={card.projectName} projectType={card.projectType} agencyCode={card.agencyCode} agencyName={card.agencyName} approval={card.approval} resourceApproval={card.resourceApproval} fundApproval={card.fundApproval} closed={card.closed} facultyID={card.facultyID} organisationType={card.organizationType} staff={card.staff} sanctionFund={card.sanctionFund} startDate={card.startDate} endDate={card.endDate} status={card.status} description={card.description} _v={card._v} announcements={card.announcements} />
        ))}
      </div>
    </div >
  );
}
export default Pending;


