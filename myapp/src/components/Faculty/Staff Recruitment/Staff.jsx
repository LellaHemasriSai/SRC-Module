import React from 'react'
import Sidebar from "../../Navbar/components/Sidebar";
import Nav from "../../Navbar/components/Nav";
import Container from '../../Navbar/components/Container';
function Staff() {
  return <div className="wrapper hover_collapse">
  <Nav user="User Name"></Nav>
  <Sidebar></Sidebar>
  <Container content="Staff Recruitment"></Container>
  </div>
}

export default Staff;