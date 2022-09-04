import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes,Link , Route, useParams } from "react-router-dom";
import Login1 from "./login1/login1.jsx";
import Ongoing from "../components/Faculty/ongoing/Ongoing"
import Recruitment from "../components/Faculty/Staff Recruitment/Staff";
import LoginFac from "./login2/login2_fac";
import LoginAdmin from "./login2/login2_Ad";
import LoginStu from "./login2/login2_stu.js";
//import MainNav from "./Navbar/components/MainNav"
import Create from "../components/Faculty/CreateProject/create"
import Announcements from "./Faculty/Announcements/Announcements.jsx";
import Admin from "./Admin/Admin.jsx";
import Pending from "./Faculty/Pending/Pending.jsx"
import ApproveProject from "./Admin/Approve_projects.jsx";
import ApproveRecruitment from "./Admin/Approve_Recruitmnet.jsx";
import DurationExtension from "./Admin/Duration_Extension.jsx";
import Completed from "./Faculty/Completed/Completed";
import View from "./Admin/View.jsx";
import NavBar from "./Navbar/components/NavBar.jsx";
import Nav from "./Navbar/components/Nav.jsx";
import Sidebar from "./Navbar/components/Sidebar.jsx";
import "../components/Navbar/components/nav.css"
import AdminSidebar from "./Admin/Sidebar.jsx";
import StudentHome from "./Staff/StudentHome.jsx"
import Form from "./Faculty/Form.jsx"
import Funds from "./Admin/Funds.jsx"
// should be an json object coming from database
export const username="poojasree";  // no spaces
export const admin ="AdminName";
export const student="Pooja";
export const MainNav = () => {
  return <div>
  <Nav user={username}></Nav>
  <Sidebar user={username}></Sidebar>
  </div>
}

export const AdminMainNav = () => {
  return <div>
  <Nav user={admin}></Nav>
  <AdminSidebar user={admin}></AdminSidebar>
  </div>
}

export const StudentMainNav = () => {
  return <div>
  <Nav user={student}></Nav>
  {/**studentsidebar */}
  </div>
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login1 />} />
        <>
        <Route exact path="/Admin" element={<LoginAdmin name={admin}/>} />
        <Route exact path="/Admin/:admin/home" element={<Admin user={admin} />} />
        <Route exact path="/Admin/:admin/Approve_project" element={<ApproveProject />} />
         <Route exact path="/Admin/:admin/Approve_funds" element={<Funds/>} />
        <Route exact path="/Admin/:admin/approve_recruitment" element={<ApproveRecruitment />} />
        <Route exact path="/Admin/:admin/duration_extension" element={<DurationExtension />} />
        <Route exact path="/Admin/:admin/view_project" element={<View />} />
        </>
        <>
        <Route exact path="/Faculty" element={<LoginFac name={username}/>} />
          <Route exact path="/Faculty/:username/home" element={<NavBar user={username}/>} />
          <Route exact path="/Faculty/:username/Form" element={<Form/>}/>
          <Route exact path="/Faculty/:username/create_project" element={<Create />} />
          <Route exact path="/Faculty/:username/ongoing_project" element={<Ongoing />} />
          <Route exact path="/Faculty/:username/recruitment" element={<Recruitment />} />
          <Route exact path="/Faculty/:username/announcements" element={<Announcements />} />
          <Route exact path="/Faculty/:username/pending_approvals" element={<Pending />} />
          <Route exact path="/Faculty/:username/completed_projects" element={<Completed />} />
        </>
         <Route exact path="/Student" element={<LoginStu name={student}/>} />
         <Route exact path="/Student/:student/studentHome" element={<StudentHome name={student}/>} />
      </Routes>
    </Router>
  );
}

export default App;