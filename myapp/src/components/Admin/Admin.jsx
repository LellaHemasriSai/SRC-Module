import React from 'react'
import AdminContent from './AdminContent';
import { AdminMainNav } from '../App';
//Admin Main Home page layout 
function Admin() {                               
  return <div className="wrapper hover_collapse">
  <AdminMainNav></AdminMainNav>                    {/* Admin Navbar Component*/}
  <div className="main_container">
		<div className="container">
    <AdminContent></AdminContent>
	</div>
	</div>
  </div>
}

export default Admin;