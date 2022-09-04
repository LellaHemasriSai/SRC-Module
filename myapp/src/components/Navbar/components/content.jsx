import React from 'react';
//import NavBar from './Navbar';

export default function Content(props) {
  return (
			<div className="content">
				        <div className='text'><span className="head_content">Name: </span> {props.name}</div>
                <div className='text'><span className="head_content">Date of Birth: </span>{props.dob}</div>
                <div className='text'><span className="head_content">Department:</span> {props.dep}</div>
                <div className='text'><span className="head_content">Email: </span>{props.email}</div>
                <div className='text'><span className="head_content">Contact: </span> {props.contact}</div>
                <div className='text'><span className="head_content">Date Of Joining:</span> {props.dob}</div>
                <div className='text'><span className="head_content">Qualifications: </span> {props.qual}</div>
                <div className='text'><span className="head_content">Address: </span> {props.addr}</div>
			</div>
  );
};