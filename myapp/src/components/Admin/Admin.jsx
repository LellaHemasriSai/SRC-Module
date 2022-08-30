import React from 'react'
import Sidebar from "./Sidebar"
import Nav from "../Navbar/components/Nav";
import Container from '../Navbar/components/Container';

function Admin(props) {
  return <div className="wrapper hover_collapse">
  <Nav user="User Name"></Nav>
  <Sidebar></Sidebar>
  <Container content="Welcome Admin"></Container>
  </div>
}

export default Admin;