import{ React ,useState } from 'react'
import "./staff.css"
import close from "../../images/close.svg"
import AnnouncementCard from './AnnouncementCard';


function onApply(){
    console.log("Applied");
}


function HomeCard(props) {
  
  const [display, setDisplay] = useState(true);
  let start=new Date(props.start);
  console.log(start);
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
      <AnnouncementCard></AnnouncementCard>
	  </div>
    </div>
  )
}

export default HomeCard;