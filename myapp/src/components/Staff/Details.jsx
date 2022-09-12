import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import NavBar from './Navbar';  // main faculty home page
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


export default function Details(props) {
     const [username, setUserName] = useState([])
    const [dob,setDob]=useState([])
    const [email,setEmail]=useState([])
    const [addr,setAddress]=useState([])
    const [dep,setDep]=useState([])
    const [contact,setContact]=useState([])
  useEffect(() => {
    axios.post('http://localhost:3001/sendStudentDetails')
      .then(res => {
        console.log('Data: ', res.data.data)
        setUserName(res.data.data.username)
        let birth=JSON.stringify(res.data.data.details.DoB).substring(1,11);
        var date=new Date(birth);
        setDob(date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear())
        setAddress(res.data.data.details.Address)
        setContact(res.data.data.details.ContactNumber)
        setDep(res.data.data.details.Department)
        setEmail(res.data.data.details.Email)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
 // console.log(userdata.username)
  //const name=userdata.username;
 // console.log(name)
 // console.log(typeof(dob))
 // console.log(typeof());
  //let date=dob.substring(0,10);
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

