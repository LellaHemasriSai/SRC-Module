import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StudentMainNav } from '../App.jsx'
import HomeCard from "./HomeCard.jsx"
import "./Details.jsx"
import Details from './Details.jsx';
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
        <section class="card-container">
          {
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
