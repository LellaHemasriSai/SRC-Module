import React, { useState } from "react";
import "../Staff/ongoing.css"
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import swal from 'sweetalert';

/* Card Component in Admin Page */

const Cards = (props) => {

  const [clickstatus, setStatus] = useState(false);

  function postData(projectCode, facultyID, status, _id) {
    /*sending data to backend whether the project is approved or not*/
    console.log("Submitted")
    fetch("/updateDurationApprovalStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        projectCode: projectCode,
        approveStatus: status,
        id: _id,

      }),
    }).then((res) => {
      console.log("Res:", res);
    })
    if (status) {
      swal("", "Approved Duration Extension", "success");
    }
    else {
      swal("", "Disapproved Funds Extension", "error");
    }
  }
  return (
    <div class="card_ongoing">
      <MDBContainer style={{ paddingLeft: "10%" }} className='student_box_text'>
        <MDBRow className='box_text'>
          <MDBCol className='box_content_text main_text' size='6' sm='3'>Project Name</MDBCol>
          <MDBCol className='box_content_text' size='6' sm='3'>{props.name}</MDBCol>
        </MDBRow>
        <MDBRow className='box_text'>
          <MDBCol className=' box_content_text main_text' size='6' sm='3'>Project ID</MDBCol>
          <MDBCol className='box_content_text' size='6' sm='3'>{props.code}</MDBCol>
        </MDBRow>
        <MDBRow className='box_text'>
          <MDBCol className=' box_content_text main_text' size='6' sm='3'>Project Type</MDBCol>
          <MDBCol className='box_content_text' size='6' sm='3'>{props.type}</MDBCol>
        </MDBRow>
        <MDBRow className='box_text'>
          <MDBCol className=' box_content_text main_text' size='6' sm='3'>Faculty Name</MDBCol>
          <MDBCol className='box_content_text' size='6' sm='3'>faculty</MDBCol>
        </MDBRow>
        <MDBRow className='box_text'>
          <MDBCol className=' box_content_text main_text' size='6' sm='3'>Faculty ID</MDBCol>
          <MDBCol className='box_content_text' size='6' sm='3'>{props.facultyID}</MDBCol>
        </MDBRow>
        <MDBRow className='box_text'>
          <MDBCol className=' box_content_text main_text' size='6' sm='3'>previous End Date</MDBCol>
          <MDBCol className='box_content_text' size='6' sm='3'>{props.prevDate}</MDBCol>
        </MDBRow>
        <MDBRow className='box_text'>
          <MDBCol className=' box_content_text main_text' size='6' sm='3'>new End Date</MDBCol>
          <MDBCol className='box_content_text' size='6' sm='3'>{props.newDate}</MDBCol>
        </MDBRow>
        <MDBRow className='box_text' style={{ marginBottom: "2px" }}>
          <MDBCol className='box_content_text main_text' style={{ width: "100%" }} size='6' sm='3'>Reason For Extension</MDBCol>
        </MDBRow>
        <MDBRow className='box_text' style={{ marginTop: "0px", marginBottom: "15px" }}>
          <MDBCol className='box_content_text' style={{ width: "100%", textAlign: "left" }} size='6' sm='3'>{props.description}</MDBCol>
        </MDBRow>
        <MDBRow style={{}}>
          <MDBCol className=' box_content_text main_text' size='6' sm='3'><button className='approve_btn' onClick={() => { postData(props.code, 'ID', true, props._id) }} >Approve </button></MDBCol>
          <MDBCol className='box_content_text' size='6' sm='3'><button className='disapprove_btn' onClick={() => { postData(props.code, 'ID', false, props._id) }}>Disapprove</button></MDBCol>   {/**change 'ID' to props.facultyID after getting it from backend as of now keep it as ID */}
        </MDBRow>
      </MDBContainer>
    </div>
  )


}

export default Cards;


