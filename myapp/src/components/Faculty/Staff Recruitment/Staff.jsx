import React from 'react'
import Sidebar from "../../Navbar/components/Sidebar";
import Nav from "../../Navbar/components/Nav";

function Staff() {
  return (
    <>
    <div className="wrapper hover_collapse" style={{marginTop: "100px"}}>
    <Nav user="User Name"></Nav>
    <Sidebar></Sidebar>
    Staff Recruitment
    </div>
    </>
  )
}

export default Staff;