import Nav from "./Nav";
import Sidebar from "./Sidebar";
import "./nav.css"
const MainNav = (props) => {
  return <div>
  <Nav user={props.user}></Nav>
  <Sidebar user={props.user}></Sidebar>
  </div>
}
export default MainNav;