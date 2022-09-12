import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import NavBar from './Navbar';  // main faculty home page
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


export default function Content(props) {

    const [userdata, setUserData] = useState()

  useEffect(() => {
    axios.post('http://localhost:3001/sendFacultyDetails')
      .then(res => {
        console.log('Data: ', res.data.data)
        setUserData(res.data.data)

      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  /*return (
		<div className="content">
    <MDBContainer>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Name</MDBCol>
        <MDBCol size='6' sm='3'>{userdata.username}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Date of Birth</MDBCol>
        <MDBCol size='6' sm='3'>{userdata.details.DoB}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Department</MDBCol>
        <MDBCol size='6' sm='3'>{userdata.details.Department}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Email</MDBCol>
        <MDBCol size='6' sm='3'>{userdata.details.Email}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Contact</MDBCol>
        <MDBCol size='6' sm='3'>{userdata.details.ContactNumber}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Date Of Joining</MDBCol>
        <MDBCol size='6' sm='3'>{userdata.details.DateOfJoining}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text' >
        <MDBCol className='main_text' size='6' sm='3'>Qualifications</MDBCol>
        <MDBCol size='6' sm='3'>{userdata.details.Qualifications}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Address</MDBCol>
        <MDBCol size='6' sm='3'>{userdata.details.Address}</MDBCol>
      </MDBRow>
    </MDBContainer>
			</div>
  );*/
};

