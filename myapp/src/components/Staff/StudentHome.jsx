import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StudentMainNav } from '../App.jsx'
import HomeCard from "./HomeCard.jsx"
import "./Details.jsx"
import Details from './Details.jsx';
import  announce from "../../images/announcements.svg"
export default function StudentHome(props) {

  const [homedata, setHomeData] = useState([])

  console.log("Submitted")

  useEffect(() => {
    axios.post('http://localhost:3001/sendAnnouncements')
      .then(res => {
        console.log('Data: ', res.data.data)
        setHomeData(res.data.data)

      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return <div className="wrapper hover_collapse">
    <StudentMainNav></StudentMainNav>
    <div class="main_container">
      <div class="container">
      <Details/> 
      <div style={{ marginTop:"3%"}}className='head_wrap'>
            <span><img src={announce} style={{ width: "30px", height: "30px" }} alt="applications"/></span>
            <span><h1 id="head_text">New Announcements</h1></span>
          </div>
        <section class="card-container">
          {homedata.length===0? <h2 style={{ marginLeft:"auto",marginRight:"auto",
            marginTop:"10%" , color:"GrayText"}}>No Announcements</h2> :
            homedata.map((h, index) => (
              <HomeCard key={index}
              name={h.projectName}
              id={h.projectID}
              type={h.projectType}
              details={h.salaryDetails}
              start={h.startDate}
              end={h.endDate}
              ></HomeCard>
            ))
          }
        </section>
      </div>
    </div>
  </div>
}
