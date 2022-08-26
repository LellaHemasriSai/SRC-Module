import React from "react";
import { SidebarData } from "./SidebarData";
import SideElement from "./SideElement";
function Sidebar() {
  return (
    <div className="sidebar">
		<div className="sidebar_inner">
		<ul>
			{SidebarData.map((data)=>{
				return <SideElement
				key={data.key} 
				title={data.title} 
				path={data.path}
				img={data.icon}/>
			})}  
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