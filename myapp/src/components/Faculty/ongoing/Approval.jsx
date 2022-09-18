import React, { useEffect, useState } from 'react';
import Card from './Card_Approval';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ongoing.css";
import { MainNav } from '../../App';
const Approval = () => {
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


  return (
    <div className="wrapper hover_collapse">
      <MainNav></MainNav>
      <div className="main_container">
        <div className="container" style={{ textAlign: "center" }}>
          <div className='grid'>
            {cardinfo.length===0? <h2 style={{ marginLeft:"auto",marginRight:"auto",
            marginTop:"10%" , color:"GrayText"}}>No Ongoing Projects</h2> :
            cardinfo.map((card, index) => (
              <Card id={index}
                projectCode={card.projectCode}
                projectName={card.projectName}
                approval={card.approval}
                resourceApproval={card.resourceApproval}
                fundApproval={card.fundApproval}
                _id = {card._id}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approval;

