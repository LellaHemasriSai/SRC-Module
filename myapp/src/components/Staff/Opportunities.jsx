import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {StudentMainNav} from '../App.jsx'
import "./staff.css"
import StudentCard from './StudentCard';
import opportunites from "../../images/opportunites.svg"

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
  return <div className="wrapper hover_collapse">
  <StudentMainNav></StudentMainNav>
  <div class="main_container">
	<div class="container">
  <div class="main">
  <div className='head_wrap'>
  <span><img src={opportunites} style={{ width: "40px", height: "40px" }} alt="opportunities"/></span>
  <span><h1 id="head_text">Opportunites</h1></span>
  </div>
      		{opportunity.map((h,index)=>{
				return <StudentCard
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

  { /* <ul className="cards">
			{opportunity.map((d,index)=>{
				return <StudentCard
				name={d.projectName} 
				id={d.projectID} 
				quals={d.requiredQualifications}
        key={index}
        salary={d.salaryDetails}
        />
			})}  
		</ul>*/}
 

}

