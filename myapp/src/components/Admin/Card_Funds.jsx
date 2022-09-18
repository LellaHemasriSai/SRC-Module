import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import swal from 'sweetalert';


/*Card for funds extension in Admin Page*/
const Cards = (props) => {

  const [clickstatus, setStatus] = useState(false);
  const [sh, setsh] = useState(false);
  const handleOnClick = () => {
    setsh(true);
  }
  function image() {
    return (
      <>
        <img className="qrcode" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/QR-code-obituary.svg/2277px-QR-code-obituary.svg.png" alt="QRCode" />
      </>
    )
  }

  function postData(projectCode, facultyID, status, _id) {
    console.log({
        projectCode: projectCode,
        facultyID: facultyID,
        approveStatus: status,
        id: _id,

      })
    console.log("Submitted", projectCode, facultyID, status, _id)
    fetch("/updateFundApproval", {
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
    }).then((res) => {
      console.log("Res:", res);
    })
    if(clickstatus){
      swal("","Approved Funds Extension","success");
    }
    else
    {
      swal("","Disapproved Funds Extension","danger");
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
          <MDBCol className=' box_content_text main_text' size='6' sm='3'>Faculty Name</MDBCol>
          <MDBCol className='box_content_text' size='6' sm='3'>faculty</MDBCol>
        </MDBRow>
        <MDBRow className='box_text'>
          <MDBCol className=' box_content_text main_text' size='6' sm='3'>Faculty ID</MDBCol>
          <MDBCol className='box_content_text' size='6' sm='3'>{props.facultyID}</MDBCol>
        </MDBRow>

          {/** taking difference of previous and extend  */}
        <MDBRow className='box_text'>
          <MDBCol className=' box_content_text main_text' size='6' sm='3'>Additional Funds</MDBCol>
          <MDBCol className='box_content_text' size='6' sm='3'>{props.extend}</MDBCol> 
        </MDBRow>

      {/** No description provided from backend  */}

        {/*  <MDBRow className='box_text'>
      <MDBCol className='box_content_text main_text' size='6' sm='3'>Description</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.description}</MDBCol>
    </MDBRow>*/}

        <MDBRow style={{}}>
          <MDBCol className=' box_content_text main_text' size='6' sm='3'><button className='approve_btn' onClick={() => { postData(props.code, 'ID', true, props._id); setStatus(true); }}>Approve</button></MDBCol>
          {/*  {clickstatus ? image() : null}*/}
          <MDBCol className='box_content_text' size='6' sm='3'><button className='disapprove_btn' onClick={() => { postData(props.code, 'ID', true, props._id); setStatus(false); }}>Disapprove</button></MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )

}

export default Cards;

