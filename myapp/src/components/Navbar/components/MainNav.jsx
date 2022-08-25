import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Container from "./Container";
import "./nav.css"
const MainNav = () => {
  return <div className="wrapper hover_collapse">
  <Nav></Nav>
  <Sidebar></Sidebar>
  <Container></Container>
  </div>
}
export default MainNav;