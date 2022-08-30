import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login1 from "./login1/login1.jsx";
import Ongoing from "../components/Faculty/ongoing/Ongoing"
import Recruitment from "../components/Faculty/Staff Recruitment/Staff";
import LoginFac from "./login2/login2_fac";
import LoginAdmin from "./login2/login2_Ad";
import MainNav from "./Navbar/components/MainNav"
import Create from "../components/Faculty/CreateProject/create"
import Announcements from "./Faculty/Announcements/Announcements.jsx";
import Admin from "./Admin/Admin.jsx";
import Pending from "./Faculty/Pending/Pending.jsx"
import ApproveProject from "./Admin/Approve_projects.jsx";
import ApproveRecruitment from "./Admin/Approve_Recruitmnet.jsx";
import DurationExtension from "./Admin/Duration_Extension.jsx";

// import View from "./Admin/viewProjects/View.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login1 />} />
        <>
        <Route exact path="/login2_Ad" element={<LoginAdmin />} />
        <Route exact path="/admin_home" element={<Admin/>} />
        <Route exact path="/Approve_project" element={<ApproveProject />} />
        <Route exact path="/approve_recruitment" element={<ApproveRecruitment />} />
        <Route exact path="/duration_extension" element={<DurationExtension />} />
        {/* <Route exact path="/view_project" element={<View />} /> */}
        </>
        <>
        <Route exact path="/login2" element={<LoginFac />} />
          <Route exact path="/home" element={<MainNav content="Welcome Faculty"/>} />
          <Route exact path="/create_project" element={<Create />} />
          <Route exact path="/ongoing_project" element={<Ongoing />} />
          <Route exact path="/recruitment" element={<Recruitment />} />
          <Route exact path="/announcements" element={<Announcements />} />
          <Route exact path="/pending_approvals" element={<Pending />} />
        </>
      </Routes>
    </Router>
  );
}

export default App;