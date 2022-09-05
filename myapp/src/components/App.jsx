import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Extend_Duration from "./Faculty/Extend_Duration/extend_duration.jsx"
import Funds_Extension from "./Faculty/Funds_Extension/funds_extension.jsx"
import Modify_Staff from "./Faculty/Modify_Staff/modify_staff.jsx";
import StudentSidebar from "./Staff/studentSideBar.jsx";
import Applications from "./Faculty/Applications.jsx"
import StaffDetails from "./Faculty/staffDetails.jsx"
import Opportunites from "./Staff/Opportunities.jsx";
// should be an json object coming from database
//export const username = "poojasree";  // no spaces
//export const admin = "AdminName";
//export const student = "Pooja";
export const MainNav = () => {
  return <div>
    <Nav></Nav>
    <Sidebar></Sidebar>
  </div>
}

export const AdminMainNav = () => {
  return <div>
    <Nav></Nav>
    <AdminSidebar></AdminSidebar>
  </div>
}

export const StudentMainNav = () => {
  return <div>
    {/**studentsidebar */}
    <Nav></Nav>
    <StudentSidebar></StudentSidebar>
  </div>
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login1 />} />
        <>
          <Route exact path="/Admin" element={<LoginAdmin/>} />
          <Route exact path="/Admin/:username/home" element={<Admin/>} />
          <Route exact path="/Admin/:username/Approve_project" element={<ApproveProject />} />
          <Route exact path="/Admin/:username/Approve_funds" element={<Funds />} />
          <Route exact path="/Admin/:username/approve_recruitment" element={<ApproveRecruitment />} />
          <Route exact path="/Admin/:username/duration_extension" element={<DurationExtension />} />
          <Route exact path="/Admin/:username/view_project" element={<View />} />
        </>
        <>
          <Route exact path="/Faculty" element={<LoginFac  />} />
          <Route exact path="/Faculty/:username/home" element={<NavBar  />} />
          <Route exact path="/Faculty/:username/Form" element={<Form />} />
          <Route exact path="/Faculty/:username/create_project" element={<Create />} />
          <Route exact path="/Faculty/:username/ongoing_project" element={<Ongoing />} />
          <Route exact path="/Faculty/:username/recruitment" element={<Recruitment />} />
          <Route exact path="/Faculty/:username/announcements" element={<Announcements />} />
          <Route exact path="/Faculty/:username/pending_approvals" element={<Pending />} />
          <Route exact path="/Faculty/:username/completed_projects" element={<Completed />} />
          <Route exact path="/Faculty/:username/applications" element={<Applications />} />
          <Route exact path="/Faculty/:username/extend_duration" element={<Extend_Duration />} />
          <Route exact path="/Faculty/:username/funds_extension" element={<Funds_Extension />} />
          <Route exact path="/Faculty/:username/modify_staff" element={<Modify_Staff />} />
           <Route exact path="/Faculty/:username/ongoing_project/StaffDetails" element={<StaffDetails />} />
        </>
        <Route exact path="/Student" element={<LoginStu />} />
        <Route exact path="/Student/:username/studentHome" element={<StudentHome />} />
        <Route exact path="/Student/:username/opportunites" element={<Opportunites />} />
      </Routes>
    </Router>
  );
}

export default App;