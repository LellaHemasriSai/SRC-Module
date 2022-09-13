import React from 'react'
import "./ongoing.css"
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function AnnouncementCard(props){
    return (
        <div className="">
		<MDBContainer className='student_box_text'>
		<MDBRow className='box_text'>
        <MDBCol className='box_content_text main_text' size='6' sm='3'>Project Name</MDBCol>
        <MDBCol className='box_content_text' size='6' sm='3'>Name</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Project ID</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>ID1234</MDBCol>
      </MDBRow>
	</MDBContainer>
	</div>
    )
}