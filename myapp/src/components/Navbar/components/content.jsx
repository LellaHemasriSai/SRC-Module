import React from 'react';
//import NavBar from './Navbar';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
export default function Content(props) {
  return (
		<div className="content">
    <MDBContainer>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Name</MDBCol>
        <MDBCol size='6' sm='3'>{props.name}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Date of Birth</MDBCol>
        <MDBCol size='6' sm='3'>{props.dob}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Department</MDBCol>
        <MDBCol size='6' sm='3'>{props.dep}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Email</MDBCol>
        <MDBCol size='6' sm='3'>{props.email}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Contact</MDBCol>
        <MDBCol size='6' sm='3'>{props.contact}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Date Of Joining</MDBCol>
        <MDBCol size='6' sm='3'>{props.dof}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text' >
        <MDBCol className='main_text' size='6' sm='3'>Qualifications</MDBCol>
        <MDBCol size='6' sm='3'>{props.qual}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Address</MDBCol>
        <MDBCol size='6' sm='3'>{props.addr}</MDBCol>
      </MDBRow>
    </MDBContainer>
			</div>
  );
};

