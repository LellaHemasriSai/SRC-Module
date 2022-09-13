import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


export default function Details(props) {
   const [username, setUserName] = useState([])
    const [dob,setDob]=useState([])
    const [email,setEmail]=useState([])
    const [addr,setAddress]=useState([])
    const [qual,setQual]=useState([])
    const [dep,setDep]=useState([])
    const [contact,setContact]=useState([])
    const [dof,setDof]=useState([])
  useEffect(() => {
    axios.post('http://localhost:3001/sendStaffDetails')
      .then(res => {
        console.log('Data: ', res.data.data)
        setUserName(res.data.data.username)
        let birth=JSON.stringify(res.data.data.details.DoB).substring(1,11);
        var date=new Date(birth);
        setDob(date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear())
        setAddress(res.data.data.details.Address)
        setContact(res.data.data.details.ContactNumber)
        setDep(res.data.data.details.Department)
        let joining=JSON.stringify(res.data.data.details.DateOfJoining).substring(1,11);
        var date2=new Date(joining);
        setDof(date2.getDay()+"/"+date2.getMonth()+"/"+date2.getFullYear())
        setEmail(res.data.data.details.Email)
        setQual(res.data.data.details.Qualifications)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
		<div className="content">
    <MDBContainer>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Name</MDBCol>
        <MDBCol size='6' sm='3'>{username}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Date of Birth</MDBCol>
        <MDBCol size='6' sm='3'>{dob}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Department</MDBCol>
        <MDBCol size='6' sm='3'>{dep}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Education Details</MDBCol>
        <MDBCol size='6' sm='3'>{qual}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Date Of Joining</MDBCol>
        <MDBCol size='6' sm='3'>{dof}</MDBCol>
      </MDBRow>
            <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Email</MDBCol>
        <MDBCol size='6' sm='3'>{email}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Contact</MDBCol>
        <MDBCol size='6' sm='3'>{contact}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className='main_text' size='6' sm='3'>Address</MDBCol>
        <MDBCol size='6' sm='3'>{addr}</MDBCol>
      </MDBRow>
    </MDBContainer>
			</div>
  );
};

