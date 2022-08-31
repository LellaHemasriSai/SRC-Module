import React from 'react'
import Sidebar from "./Sidebar"
import Nav from "../Navbar/components/Nav";
import Container from '../Navbar/components/Container';
import { AdminMainNav } from '../App';
function Admin(props) {
  return <div className="wrapper hover_collapse">
  <AdminMainNav></AdminMainNav>
  <Container></Container>
  </div>
}

export default Admin;