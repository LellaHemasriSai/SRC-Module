import React, {useState} from "react";
import user from "./images/user.png"
import logo from "./images/logo.png"
import "./nav.css"
function Nav(props) {            // user name 
	var li_items = document.querySelectorAll(".sidebar ul li");
    var menu_icon = document.querySelector(".menu_icon");
    var  wrapper = document.querySelector(".wrapper");
	const [sidebar, setSidebar] = useState(false);

    // const showSidebar = () => setSidebar(!sidebar);
	function menu()  {
    setSidebar(!sidebar);
	menu_icon.closest(".wrapper").classList.toggle("click_collapse");
	menu_icon.closest(".wrapper").classList.toggle("hover_collapse");
 }

  return (
    <div className="top_navbar">
    <div className="menu_icon" onClick={menu}><i class="fas fa-bars"></i></div>
		<div className="logo"><img src={logo} style={{width:"60px", height:"40px" }} alt="logo_pic" />
    <span id="year">Acad year</span>
    </div>
		<div className="menu">
            <div className="dropdown" style={{float:"right"}}>
				<button className="dropbtn">
				<div className="profile">
					<img  src={user} style={{width:"20px", height:"20px" }} alt="profile_pic"/>
					<span className="name">{props.user}</span>
					<span className="icon">
						<i className="fas fa-angle-down"></i>
					</span>
				</div>
                </button>
				<div className="dropdown-content">
					<a href="#">Settings</a>
					<a href="#">Log out</a>
				</div>
			</div>
		</div>
	</div>
  );
}

export default Nav;
/*<div class="top_navbar">
    <div class="menu_icon"><i class="fas fa-bars"></i></div>
		<div class="logo"><img src="images\logo.png" width="20px" height="20px" alt="logo_pic" style="height: 40px; width: 60px;">
    <span id="year">Acad year</span>
    </div>
		<div class="menu">
            <div class="dropdown" style="float:right;">
				<button class="dropbtn">
				<div class="profile">
					<img  src="images\user.png" width="20px" height="20px" alt="profile_pic">
					<span class="name">User Name</span>
					<span class="icon">
						<i class="fas fa-angle-down"></i>
					</span>
				</div>
                </button>
				<div class="dropdown-content">
					<a href="#">Settings</a>
					<a href="#">Log out</a>
				</div>
			</div>
		</div>
	</div>
 */