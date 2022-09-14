import{ React ,useState } from 'react'
import "./staff.css"
import close from "../../images/close.svg"
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


function HomeCard(props) {
  
  const [display, setDisplay] = useState(true);
  let start=new Date(props.start);
  let sDate=start.getDay()+"/"+start.getMonth()+"/"+start.getFullYear();
  let end=new Date(props.end);
  let eDate=end.getDay()+"/"+end.getMonth()+"/"+end.getFullYear();
    function onClose(){
    console.log("Closed");
    setDisplay(!display);
  }
  return (
    <div className={display ? "student_content" : "remove_content"}>
      <div className="content">
      <div className='header_text'>
        <span style={{ paddingLeft:"10%", fontSize:"1.2em" , fontWeight:"600"}}>{props.name}</span>
        <span><button  onClick={onClose} className='home_btn'><img src={close} style={{ width: "25px", height: "25px" }} alt="close_pic" /></button></span>
      </div>
      <MDBContainer className='student_box_text'>
      <MDBRow className='box_text'>
      <MDBCol className=' box_content_text main_text' size='6' sm='3'>Project ID</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.id}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Project Type</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.type}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Start Date</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{sDate}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>End Date</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{eDate}</MDBCol>
      </MDBRow>
      <MDBRow className='box_text'>
        <MDBCol className=' box_content_text main_text' size='6' sm='3'>Salary Details</MDBCol>
       <MDBCol className='box_content_text' size='6' sm='3'>{props.details}</MDBCol>
      </MDBRow>
	    </MDBContainer>
	  </div>
    </div>
  )
}

export default HomeCard;