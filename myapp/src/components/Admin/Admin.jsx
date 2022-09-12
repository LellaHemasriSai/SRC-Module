import React from 'react'
import AdminContent from './AdminContent';
import { AdminMainNav } from '../App';
function Admin(props) {
  return <div className="wrapper hover_collapse">
  <AdminMainNav></AdminMainNav>
  <div className="main_container">
		<div className="container">
    <AdminContent></AdminContent>
	</div>
	</div>
  </div>
}

export default Admin;