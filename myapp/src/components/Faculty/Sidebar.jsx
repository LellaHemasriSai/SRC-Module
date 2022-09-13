import React from "react";
import { data } from "./SidebarData";
import create from "../../images/create.svg"
import SideElement from "../Navbar/components/SideElement";

export default function Sidebar() {
  return (<div className="sidebar">
		<div className="sidebar_inner">
		<ul className="data">
			<SideElement
				key={data[0].key} 
				title={data[0].title} 
				path={data[0].path}
				img={data[0].img}/>
            <li>
			<a href="#">
			<div className="item">
					<input type="checkbox" id="A"/>
					<label for="A">
					<span className="icon image_wrap"><img src={create} alt="create"/>
					<p class="img_description">Create</p></span>
					<span className="text">Create Project</span></label>
				<ul>
					<li><a href='././create_project'>Sponsored/Consultancy</a></li>
					<li><a href='././create_project'>Internal</a></li>
				</ul>
			</div>
			</a>
			</li>
 			<SideElement
				key={data[1].key} 
				title={data[1].title} 
				path={data[1].path}
				img={data[1].img}/>
			<SideElement
				key={data[2].key} 
				title={data[2].title} 
				path={data[2].path}
				img={data[2].img}/>
							<SideElement
				key={data[3].key} 
				title={data[3].title} 
				path={data[3].path}
				img={data[3].img}/>
			<SideElement
				key={data[4].key} 
				title={data[4].title} 
				path={data[4].path}
				img={data[4].img}/>
			<SideElement
				key={data[5].key} 
				title={data[5].title} 
				path={data[5].path}
				img={data[5].img}/>
			<SideElement
				key={data[6].key} 
				title={data[6].title} 
				path={data[6].path}
				img={data[6].img}/>
		</ul>
	</div>
	</div>
  );
}



