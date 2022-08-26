import React from 'react'
import Sidebar from "../../Navbar/components/Sidebar";
import Nav from "../../Navbar/components/Nav";
import Container from '../../Navbar/components/Container';
function Announcements() {
  return <div className="wrapper hover_collapse">
  <Nav user="User Name"></Nav>
  <Sidebar></Sidebar>
  <Container content="Announcements"></Container>
  </div>
}

export default Announcements;