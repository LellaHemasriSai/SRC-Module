import{ React ,useState } from 'react'
import "./staff.css"
import close from "../../images/close.svg"

function onApply(){
    console.log("Applied");
}


function HomeCard() {
  
  const [display, setDisplay] = useState(true);
  function onClose(){
  console.log("Closed");
  setDisplay(!display);
}
  return (
    <div  className={display ? "student_content" : "remove_content"}>
      <div class="content">
      <div className='header_text'>
        <span style={{ fontSize:"2.3rem" , fontWeight:"900"}}>Project Name</span>
        <span><button  onClick={onClose} className='home_btn'><img src={close} style={{ width: "25px", height: "25px" }} alt="close_pic" /></button></span>
      </div>
          <div>
            <span>
              Project Code
            </span>
          </div>
            <div>
            <span>
              Project Type
            </span>
          </div>
          <div className='application_text'>
            <span className='application_items'>
              <p className='items_p'>Faculty Name</p>
              <span>faculty</span>
              </span>
            <span className='application_items'>
              <p className='items_p'>Salary Details</p>
              <p>0000000</p>
            </span>
            <span className='application_items'>
              <p className='items_p'>Start Date</p>
              <p>00/00/000</p>
            </span>
            <span className='application_items'>
              <p className='items_p'>End Date</p>
              <p>00/00/000</p>
            </span>
          </div>
      <div className='home_text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <button onClick={onApply} className='apply_btn'>Apply Now</button>
	</div>
    </div>
  )
}

export default HomeCard;