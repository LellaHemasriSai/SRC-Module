import React from 'react'
import "./ongoing.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function ProjectCard(props){
    return (
        <div class="card_ongoing">
		<MDBContainer className='student_box_text'>
		<MDBRow className='box_text'>
        <MDBCol className='box_content_text main_text' size='6' sm='3'>Project Name</MDBCol>
        <MDBCol className='box_content_text' size='6' sm='3'>Name</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Project ID</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>ID1234</MDBCol>
      </MDBRow>
    <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Faculty Name</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>faculty</MDBCol>
      </MDBRow>
    <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Position/Role</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>Role</MDBCol>
      </MDBRow>
    <MDBRow className='box_text'>
    <MDBCol className='box_content_text'><CircularProgressbar className='status_circle' value={0} text={`${0}%`} /></MDBCol>
    </MDBRow>
	</MDBContainer>
	</div>
    )
}