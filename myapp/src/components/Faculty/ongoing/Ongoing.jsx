import React from 'react'
import "../ongoing/ongoing.css"
import Sidebar from "../../Navbar/components/Sidebar";
import Nav from "../../Navbar/components/Nav";

function Ongoing() {
  return (
    <div className="wrapper hover_collapse" style={{marginTop: "100px"}}>
    <Nav user="User Name"></Nav>
    <Sidebar></Sidebar>
    <div className='ongoing'>
       Ongoing Projects
    </div>
    </div>
  )
}

export default Ongoing;