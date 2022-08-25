import React from "react";
//import SidebarData from "components\Navbar\SidebarData.js"
import home from "./images/home.svg"
import ongoing from "./images/ongoing.svg"
import recruit from "./images/recruit.svg"
import create from "./images/create.svg"
import announcements from "./images/announcements.svg"
function Sidebar() {
  return (
    <div className="sidebar">
		<div className="sidebar_inner">
		<ul>
            <li>
				<a href="#">
					<span className="icon"><img src={home} alt="home" srcset=""/></span>
					<span className="text">Home</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span className="icon"><img src={create} alt="create" srcset=""/></span>
					<span className="text">Create Project</span>
				</a>
			</li>
            <li>
				<a href="#">
					<span className="icon"><img src={ongoing} alt="ongoing" srcset=""/></span>
					<span className="text">Ongoing projects</span>
				</a>
			</li>
            <li>
				<a href="#">
					<span className="icon"><img src={recruit} alt=""/></span>
					<span className="text">Recruitment</span>
				</a>
			</li>

            <li>
				<a href="#">
					<span className="icon"><img src={announcements} alt="announcements"/></span>
					<span className="text">Announcements</span>
				</a>
			</li>
		</ul>
		</div>
	</div>

  );
}



export default Sidebar;

/*		<ul>
            <li>
				<a href="#">
					<span class="icon"><img src="images\home-solid.svg" alt="home" srcset=""></span>
					<span class="text">Home</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span class="icon"><img src="images\diagram-project-solid.svg" alt="create" srcset=""></span>
					<span class="text">Create Project</span>
				</a>
			</li>
			<li>
            <li>
				<a href="#">
					<span class="icon"><img src="images\chart-column-solid.svg" alt="ongoing" srcset=""></span>
					<span class="text">Ongoing projects</span>
				</a>
			</li>
            <li>
				<a href="#">
					<span class="icon"><img src="images\person-circle-plus-solid.svg" alt=""></span>
					<span class="text">Recruitment</span>
				</a>
			</li>

            <li>
				<a href="#">
					<span class="icon"><img src="images\bullhorn-solid.svg" alt="announcements"></span>
					<span class="text">Announcements</span>
				</a>
			</li>
		</ul> */