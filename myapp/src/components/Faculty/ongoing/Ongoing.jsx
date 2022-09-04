import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ongoing.css";
import { MainNav } from '../../App';
const Ongoing = () => {
<<<<<<< HEAD
  const cardinfo = [
     { id:"1", projectCode: "2345",
     projectName: "SRC",
     projectType: "Web",
     agencyCode: "X2450",
     agencyName: "TCS",
     approval: "0",
     resourceApproval: "1",
     fundApproval: "0",
     closed: "0",
     facultyID: "94350",
     organizationType: "Global",
     staff: ["nam","manas","hems"],
     sanctionFund: "20000",
     startDate: "01-01-2022",
     endDate: "10-01-2022",
     status: "1",
     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
     { id:"2", projectCode: "2345",
     projectName: "SRC",
     projectType: "Web",
     agencyCode: "X2450",
     agencyName: "TCS",
     approval: "0",
     resourceApproval: "1",
     fundApproval: "0",
     closed: "0",
     facultyID: "94350",
     organizationType: "Global",
     staff: ["nam","manas","hems"],
     sanctionFund: "20000",
     startDate: "01-01-2022",
     endDate: "10-01-2022",
     status: "1",
     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
     { id:"3", projectCode: "2345",
     projectName: "SRC",
     projectType: "Web",
     agencyCode: "X2450",
     agencyName: "TCS",
     approval: "0",
     resourceApproval: "1",
     fundApproval: "0",
     closed: "0",
     facultyID: "94350",
     organizationType: "Global",
     staff: ["nam","manas","hems"],
     sanctionFund: "20000",
     startDate: "01-01-2022",
     endDate: "10-01-2022",
     status: "1",
     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
     { id:"4", projectCode: "2345",
     projectName: "SRC",
     projectType: "Web",
     agencyCode: "X2450",
     agencyName: "TCS",
     approval: "0",
     resourceApproval: "1",
     fundApproval: "0",
     closed: "0",
     facultyID: "94350",
     organizationType: "Global",
     staff: ["nam","manas","hems"],
     sanctionFund: "20000",
     startDate: "01-01-2022",
     endDate: "10-01-2022",
     status: "1",
     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
     { id:"5", projectCode: "2345",
     projectName: "SRC",
     projectType: "Web",
     agencyCode: "X2450",
     agencyName: "TCS",
     approval: "0",
     resourceApproval: "1",
     fundApproval: "0",
     closed: "0",
     facultyID: "94350",
     organizationType: "Global",
     staff: ["nam","manas","hems"],
     sanctionFund: "20000",
     startDate: "01-01-2022",
     endDate: "10-01-2022",
     status: "1",
     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  ]
=======
 
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
>>>>>>> 888f248c6aeedad067ee1474f12f33778e3233e4

  return (
    <div className="wrapper hover_collapse">
    <MainNav></MainNav>
   <div className="main_container">
    <div className="container" style={{textAlign:"center"}}>
    <div className='grid'>
    {cardinfo.map((card,index) => (
      <Card id={index} 
      projectCode={card.projectCode} 
      projectName ={card.agencyName}
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
      description={card.description}/>
    ))}
   </div>
   </div>
   </div>
   </div>
  );
}

export default Ongoing;

