import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Container from "./Container";
import "./nav.css"
const NavBar = (props) => {
  return <div className="wrapper hover_collapse">
  <Nav></Nav>
  <Sidebar></Sidebar>
  <Container></Container>
  </div>
}
export default NavBar;