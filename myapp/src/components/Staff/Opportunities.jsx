import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {StudentMainNav} from '../App.jsx'
import "./staff.css"
import { Link, useParams } from "react-router-dom";
import StudentCard from './StudentCard';
import opportunites from "../../images/opportunites.svg"
import sort from "../../images/sort.svg"
export default function Opportunities(props) {

  const [opportunity, setOpportunity] = useState([])

  console.log("Submitted")

  useEffect(() => {
    axios.post('http://localhost:3001/sendAnnouncements')
      .then(res => {
        console.log('Data: ', res.data.data)
        setOpportunity(res.data.data)

      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  
  const handleArray=(id)=>{
      let i;
      for(i=0;i<opportunity.length;i++){
        if(opportunity[i].projectID==id){
          console.log(opportunity[i])
          break;
        }
    }
    setOpportunity(opportunity.filter(function(item) {
        return item !== opportunity[i];
    }))
    console.log(opportunity);
  }

  function sortByProjectName(){
    setOpportunity([...opportunity].sort((a, b) =>
    a.projectName < b.projectName ? 1 : -1
    ));
    console.log(opportunity)
  }
  function sortByID(){
    setOpportunity([...opportunity].sort((a, b) =>
    a.projectID > b.projectID ? 1 : -1
    ));
    console.log(opportunity)
  }

  return <div className="wrapper hover_collapse">
  <StudentMainNav></StudentMainNav>
  <div class="main_container">
	<div class="container">
  <div class="main">
  <div className='projectFlex'>
  <div className='head_wrap'>
  <span><img src={opportunites} style={{ width: "40px", height: "40px" }} alt="opportunities"/></span>
  <span><h1 id="head_text">Opportunites</h1></span>
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

      		{opportunity.map((h,index)=>{
				     return <StudentCard
              onHandle={handleArray}
              key={index}
              name={h.projectName}
              id={h.projectID}
              type={h.projectType}
              details={h.salaryDetails}
              start={h.startDate}
              end={h.endDate}
        />
			})}  
  </div>
  </div>
	</div>
  </div>

}

