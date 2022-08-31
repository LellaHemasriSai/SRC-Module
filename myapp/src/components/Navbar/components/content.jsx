import React from 'react';
//import NavBar from './Navbar';

export default function Content(props) {
  return (
			<div className="content">
				<div>Name: {props.name}</div>
                <div>Date of Birth: {props.dob}</div>
                <div>Department: {props.dep}</div>
                <div>Email: {props.email}</div>
                <div>Contact: {props.contact}</div>
                <div>Date Of Joining: {props.dof}</div>
                <div>Qualifications: {props.qual}</div>
			</div>
  );
};