import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Container from "./Container";
import "./nav.css"
const MainNav = (props) => {
  return <div className="wrapper hover_collapse">
  <Nav user="User Name"></Nav>
  <Sidebar></Sidebar>
  <Container content={props.content}></Container>
  </div>
}
export default MainNav;