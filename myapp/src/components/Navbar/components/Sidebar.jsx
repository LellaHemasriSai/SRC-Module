import React from "react";
import { data } from "./SidebarData";
import home from "../../../images/home.svg"
import ongoing from "../../../images/ongoing.svg"
import recruit from "../../../images/recruit.svg"
import create from "../../../images/create.svg"
import announcements from "../../../images/announcements.svg"
import clock from "../../../images/clock.svg"
import completed from "../../../images/completed.svg"
import SideElement from "./SideElement";
/*
function Sidebar() {
	var li = document.querySelector("li");
  return (
    <div className="sidebar">
		<div className="sidebar_inner">
		<ul>
			{SidebarData.map((data)=>{
				//if(data.key!=6 && data.key!=7){
				return <SideElement
				key={data.key} 
				title={data.title} 
				path={data.path}
				img={data.img}/>
				//}
			})}  
		</ul>
		</div>
	</div>

	);
}
*/


function Sidebar() {
  return (<div className="sidebar">
		<div className="sidebar_inner">
		<ul>
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
					<span className="icon"><img src={create} alt="create"/></span>
					<span className="text">Create Project</span></label>
				<ul>
					<li><a href='/create_project'>Internal</a></li>
					<li><a href='/create_project'>Consultancy/Sponsored</a></li>
				</ul>
			</div>
			</a>
			</li>
 			<SideElement
				key={data[1].key} 
				title={data[1].title} 
				path={data[1].path}
				img={data[1].img}/>
            <li>
			<a href="#">
			<div className="item">
					<input type="checkbox" id="B"/>
					<label for="B">
					<span className="icon"><img src={recruit} alt="recruit"/></span>
					<span className="text">Recruitment</span></label>
				<ul >
					<li><a href='/recruitment'>Staff</a></li>
					<li><a href='/recruitment'>Adhoc</a></li>
				</ul>
			</div>
			</a>
			</li>
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
		</ul>
	</div>
	</div>
  );
}



export default Sidebar;
/* <div class="sidebar">
		<input type="checkbox" id="menu"/>
        <label for="menu" id="nav-icon">Home</label>
        <div class="sidebar_inner multi-level">
            <div class="item">
                <input type="checkbox" id="A"/>
                <img src={home} class="arrow"/><label for="A">Services</label>
				<img src={home} class="arrow"/><label for="A">Services</label>
            </div>
        </div>
    </div>*/

/*		<ul>
            <li>
				<a href="#">
					<span class="icon"><img src={home} alt="home" /></span>
					<span class="text">Home</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span class="icon"><img src={create} alt="create"/></span>
					<span class="text">Create Project</span>
				</a>
			</li>
			<li>
            <li>
				<a href="#">
					<span class="icon"><img src={home} alt="ongoing" /></span>
					<span class="text">Ongoing projects</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span class="icon"><img src={home} alt=""/></span>
					<span class="text">Recruitment</span>
				</a>
			</li>

            <li>
				<a href="#">
					<span class="icon"><img src={home} alt="announcements"/></span>
					<span class="text">Announcements</span>
				</a>
			</li>
		</ul>
		</div>
	</div> */