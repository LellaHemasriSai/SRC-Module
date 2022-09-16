import React, { useState } from "react";
import "../Staff/ongoing.css"
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Card(props){

  function postData(projectCode, facultyID, status, _id) {
    console.log("Submitted")
    console.log({
        projectCode: projectCode,
        facultyID: facultyID,
        approveStatus: status,
        id: _id,
      })
    fetch("/updateRecruitmentApprovalStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        projectCode: projectCode,
        facultyID: facultyID,
        approveStatus: status,
        id: _id,
      }),

    }
    ).then((res) => {
      console.log("Res:", res);
    })
    console.log(projectCode)
  }


    return (
    <div class="card_ongoing">
		<MDBContainer style={{paddingLeft:"10%"}} className='student_box_text'>
		<MDBRow className='box_text'>
        <MDBCol className='box_content_text main_text' size='6' sm='3'>Project Name</MDBCol>
        <MDBCol className='box_content_text' size='6' sm='3'>{props.name}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Project ID</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.code}</MDBCol>
      </MDBRow>
    <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Faculty Name</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>faculty</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Faculty ID</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>facultyID</MDBCol>
      </MDBRow>
    <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Staff Required</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.staff}</MDBCol>
    </MDBRow>
    <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Start Date</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.startDate}</MDBCol>
    </MDBRow>
    <MDBRow className='box_text'>
        <MDBCol className='box_content_text main_text' size='6' sm='3'>End Date</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.endDate}</MDBCol>
    </MDBRow>
    <MDBRow className='box_text' style={{marginBottom:"2px"} }>
      <MDBCol className='box_content_text main_text' style={{width:"100%"}} size='6' sm='3'>Reason For Recruitment</MDBCol>
    </MDBRow>
    <MDBRow className='box_text'  style={{marginTop:"0px" ,marginBottom:"15px" } }>
       <MDBCol className='box_content_text' style={{width:"100%",textAlign:"left" } } size='6' sm='3'>{props.description}</MDBCol>
    </MDBRow>
    <MDBRow style={{}}>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'><button  className='approve_btn' onClick={() => { postData(props.code,'ID', true, props._id) }}>Approve</button></MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'><button className='disapprove_btn' onClick={() => { postData(props.projectCode, props.facultyID, false, props._id) }}>Disapprove</button></MDBCol>
    </MDBRow>
	</MDBContainer>
	</div>
    )
}



