import React from 'react'
import Container from '../Navbar/components/Container';
import {StudentMainNav} from '../App.jsx'
import "./staff.css"
import StudentCard from './StudentCard';
import opportunites from "../../images/opportunites.svg"
const data=[
  {
  key:1,
  name:"xyz",
  id:2345,
  faculty:"faculty",
  quals:"xyz, abc ..."
},
  {
      key:2,
  name:"xyz",
  id:2345,
  faculty:"faculty",
  quals:"xyz, abc ..."
},
  {
      key:3,
  name:"xyz",
  id:2345,
  faculty:"faculty",
  quals:"xyz, abc ..."
},
  {
      key:4,
  name:"xyz",
  id:2345,
  faculty:"faculty",
  quals:"xyz, abc ..."
},
]
function Opportunites(props) {
  return <div className="wrapper hover_collapse">
  <StudentMainNav></StudentMainNav>
  	<div class="main_container">
	<div class="container">
    <div class="main">
    <div className='head_wrap'>
    <span><img src={opportunites} style={{ width: "40px", height: "40px" }} alt="opportunities"/></span>
    <span><h1 id="head_text">Opportunites</h1></span>
    </div>
    <ul className="cards">
			{data.map((d)=>{
				return <StudentCard
				name={d.name} 
				id={d.id} 
				faculty={d.faculty}
				quals={d.quals}
          key={d.key}
        />
			})}  
		</ul>
 
</div>
	</div>
  </div>
  </div>
}

export default Opportunites;