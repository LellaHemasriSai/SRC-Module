import { MainNav } from "../../App";
import Content from "./Content";
const NavBar = (props) => {
  return <div className="wrapper hover_collapse">
  <MainNav></MainNav>
  <div className="main_container">
		<div className="container">
		<Content/> 
	    </div>
	</div>
  </div>
}
export default NavBar;