import React from "react";
import { SidebarData } from "./SidebarData";
import SideElement from "../Navbar/components/SideElement";
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
				img={data.img}/>
			})}  
		</ul>
		</div>
	</div>

  );
}



export default Sidebar;