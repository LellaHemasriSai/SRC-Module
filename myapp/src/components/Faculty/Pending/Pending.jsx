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

  var cardinfo = []

  console.log("Submitted")
  fetch("/pending", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
  }).then(res => 
    //console.log("Res:", res.json());
   res.json()
  ).then((data) => {
    cardinfo = data.data
    console.log("Data:", cardinfo);
  })
  // newinfo.append(cardinfo[489])
  // console.log(cardinfo[489])

  return (
    <div className="wrapper hover_collapse" >
      <div className="grid" style={{ marginLeft: "300px", marginTop: "50px" }}>
        <MainNav></MainNav>
          {cardinfo.map((card) => (
          <Card id={card._id} projectCode={card.projectCode} projectName={card.projectName} projectType={card.projectType} agencyCode={card.agencyCode} agencyName={card.agencyName} approval={card.approval} resourceApproval={card.resourceApproval} fundApproval={card.fundApproval} closed={card.closed} facultyID={card.facultyID} organisationType={card.organizationType} staff={card.staff} sanctionFund={card.sanctionFund} startDate={card.startDate} endDate={card.endDate} status={card.status} description={card.description} _v={card._v} announcements={card.announcements} />
        ))}  
      </div>
    </div>
  );
}

export default Pending;

