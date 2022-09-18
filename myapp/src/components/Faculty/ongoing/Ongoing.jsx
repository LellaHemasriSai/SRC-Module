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
        console.log(res.data.data[0].projectName)

      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  function sortByProjectName(){
    setCardInfo([...cardinfo].sort((a, b) =>
    a.name > b.name ? 1 : -1
    ));
    console.log( cardinfo)
  }
  function sortByID(){
    setCardInfo([...cardinfo].sort((a, b) =>
    a.projectCode> b.projectCode? 1 : -1
    ));
    console.log(cardinfo)
  }

  return (
    <div className="wrapper hover_collapse">
      <MainNav></MainNav>
      <div className="main_container">
        <div className="container" style={{ textAlign: "center" }}>
        <div className='projectFlex'>
            <div  className='head_wrap'>
            <span><img src={ongoing} style={{ width: "28px", height: "28px" }} alt="ongoing"/></span>
            <span><h1 id="head_text">Ongoing Projects</h1></span>
            </div>
             <span>
    <div className="sort_dropdown">
					<button className="sort_dropbtn">
						<div>
							<span  className="name">Sort Projects</span>
							<span style={{paddingLeft:"8px"}}className="icon"><i className="fas fa-solid fa-sort"></i></span>
						</div>
					</button>
					<div className="dropdown-content">
						<div className="sort_btn" onClick={sortByProjectName}>Name</div>
						<div className="sort_btn" onClick={sortByID}>ID</div>
					</div>
      </div>
  </span>
          </div>
          <div className='grid'>
            {cardinfo.length===0? <h2 style={{ marginLeft:"auto",marginRight:"auto",
            marginTop:"10%" , color:"GrayText"}}>No Ongoing Projects</h2> :
            cardinfo.map((card, index) => (
              <Card id={index}
                projectCode={card.projectCode}
                projectName={card.projectName}
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

