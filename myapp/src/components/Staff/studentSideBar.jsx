import React from "react";
import { SidebarData } from "./SideBarData";
import SideElement from "../Navbar/SideElement";
function StudentSidebar(p) {
  return (
    <div className="sidebar">
		<div className="sidebar_inner">
		<ul className="data">
			{SidebarData.map((data)=>{
				return <SideElement
				key={data.key} 
				title={data.title} 
				path={data.path}
				img={data.img}/>
			})}  
		</ul>
		</div>
	</div>

  );
}



export default StudentSidebar;