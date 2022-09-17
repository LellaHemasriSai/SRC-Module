/*App imports the all the components and renders itself*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login1 from "./login1/login1.jsx";
import Ongoing from "../components/Faculty/ongoing/Ongoing"
import Recruitment from "../components/Faculty/Staff Recruitment/Staff";
import LoginFac from "./login2/login2_fac";
import LoginAdmin from "./login2/login2_Ad";
import LoginStu from "./login2/login2_stu.js";
import Create from "../components/Faculty/CreateProject/create"
import Announcements from "./Faculty/Announcements/Announcements.jsx";
import Admin from "./Admin/Admin.jsx";
import Pending from "./Faculty/Pending/Pending.jsx"
import ApproveProject from "./Admin/Approve_projects.jsx";
import ApproveRecruitment from "./Admin/Approve_Recruitment.jsx";
import DurationExtension from "./Admin/Duration_Extension.jsx";
import Completed from "./Faculty/Completed/Completed";
import View from "./Admin/View.jsx";
import Nav from "./Navbar/Nav.jsx";
import Sidebar from "./Faculty/Sidebar.jsx";
import "../components/Navbar/nav.css"
import AdminSidebar from "./Admin/Sidebar.jsx";
import StudentHome from "./Staff/StudentHome.jsx"
import Form from "./Faculty/Form.jsx"
import Funds from "./Admin/Funds.jsx"
import Extend_Duration from "./Faculty/Extend_Duration/extend_duration.jsx"
import Funds_Extension from "./Faculty/Funds_Extension/funds_extension.jsx"
import Modify_Staff from "./Faculty/Modify_Staff/modify_staff.jsx";
import StudentSidebar from "./Staff/studentSideBar.jsx";
import Applications from "./Faculty/Applications/Applications.jsx"
import Opportunites from "./Staff/Opportunities.jsx";
import StudentApplications from "./Staff/StudentApplications.jsx"
import Offers from "./Staff/Offers.jsx"
import StudentOngoing from "./Staff/StudentOngoing.jsx";
import StudentCompleted from "./Staff/StudentCompleted.jsx";
import List from "./Faculty/ongoing/List/List.jsx";
import FacultyHome from "./Faculty/Home/FacultyHome.jsx"
import Tax from "./Faculty/Completed/Tax_Calculator";
import Approval from './Faculty/ongoing/Approval';
// should be an json object coming from database
//export const username = "poojasree";  // no spaces
//export const admin = "AdminName";
//export const student = "Pooja";


/*Faculty Page TopBar + SideBar component*/
export const MainNav = () => {
  return <div>
    <Nav name="Faculty"></Nav>
    <Sidebar></Sidebar>
  </div>
}
/*Admin Page TopBar + SideBar component*/
export const AdminMainNav = () => {
  return <div>
    <Nav name="Admin"></Nav>
    <AdminSidebar></AdminSidebar>
  </div>
}

/*StudentPage TopBar + SideBar component*/
export const StudentMainNav = () => {
  return <div>
    {/**studentsidebar */}
    <Nav name="Student"></Nav>
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
          <Route exact path="/Admin/:username/Form" element={<Form name="Admin"/>} />
          <Route exact path="/Admin/:username/Approve_project" element={<ApproveProject />} />
          <Route exact path="/Admin/:username/Approve_funds" element={<Funds />} />
          <Route exact path="/Admin/:username/approve_recruitment" element={<ApproveRecruitment />} />
          <Route exact path="/Admin/:username/duration_extension" element={<DurationExtension />} />
          <Route exact path="/Admin/:username/view_project" element={<View />} />
        </>
        <>
          <Route exact path="/Faculty" element={<LoginFac  />} />
          <Route exact path="/Faculty/:username/home" element={<FacultyHome  />} />
          <Route exact path="/Faculty/:username/Form" element={<Form name="Faculty"/>} />
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
          <Route exact path="/Faculty/:username/list" element={<List />} />
          <Route exact path="/Faculty/:username/tax" element={<Tax />} />
          <Route exact path="/Faculty/:username/cardapproval" element={<Approval />} />
          
        </>
        <Route exact path="/Student" element={<LoginStu />} />
        <Route exact path="/Student/:username/studentHome" element={<StudentHome />} />
        <Route exact path="/Student/:username/Form" element={<Form name="Student"/>} />
        <Route exact path="/Student/:username/opportunites" element={<Opportunites />} />
        <Route exact path="/Student/:username/staff_applications" element={<StudentApplications />} />
        <Route exact path="/Student/:username/staff_ongoing" element={<StudentOngoing />} />
        <Route exact path="/Student/:username/staff_completed" element={<StudentCompleted />} />
        <Route exact path="/Student/:username/offers" element={<Offers />} />
      </Routes>
    </Router>
  );
}

export default App;