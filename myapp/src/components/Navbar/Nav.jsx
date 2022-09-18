import React, { useState } from "react";
import user from "../../images/user.png"
import logo from "../../images/logo.png"
import "./nav.css"
import { Link, useParams } from "react-router-dom";

function Nav(props) {
	
	var menu_icon = document.querySelector(".menu_icon");

	const [sidebar, setSidebar] = useState(false);

	let { username } = useParams();  //object destructuring ,accessing only username from url

	function menu() {
		setSidebar(!sidebar);
		menu_icon.closest(".wrapper").classList.toggle("click_collapse");
		menu_icon.closest(".wrapper").classList.toggle("hover_collapse");
	}

	return (
		<div className="top_navbar fixed-top" >
			<div className="menu_icon" onClick={menu}><i class="fas fa-bars"></i></div>
			<div className="logo"><img src={logo} style={{ width: "60px", height: "40px" }} alt="logo_pic" />
				<span id="year">2022 - 23</span>
			</div>
			<div className="menu">
				<div className="dropdown" style={{ float: "right" }}>
					<button className="dropbtn">
						<div className="profile">
							<img src={user} style={{ width: "20px", height: "20px" }} alt="profile_pic" />
							<span className="name">{username}</span>
							<span className="icon">
								<i className="fas fa-angle-down"></i>
							</span>
						</div>
					</button>
					
					<div className="dropdown-content">
						<Link to={"/"+ props.name +"/" + username + "/Form"}>Details</Link>
						<Link to="/">Log out</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Nav;
