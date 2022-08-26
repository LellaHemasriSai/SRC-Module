// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./Faculty/Home/home.js";
//import LoginFac from "./login2/login2_fac";
// import Navbar from './Navbar/Navbar';
import Login1 from "./login1/login1.jsx";
import CreateProject from "../components/Faculty/CreateProject/CreateProject";
import Ongoing from "../components/Faculty/ongoing/Ongoing"
import Recruitment from "../components/Faculty/Staff Recruitment/Staff";
import LoginFac from "./login2/login2_fac";
import MainNav from "./Navbar/components/MainNav"
import Create from "../components/Faculty/CreateProject/create"
import Announcements from "./Faculty/Announcements/Announcements.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login1 />} />
        <Route exact path="/login2" element={<LoginFac />} />
          <Route exact path="/home" element={<MainNav content="Welcome Akhila Sri Manasa😈"/>} />
          <Route exact path="/create_project" element={<Create />} />
          <Route exact path="/ongoing_project" element={<Ongoing />} />
          <Route exact path="/recruitment" element={<Recruitment />} />
          <Route exact path="/announcements" element={<Announcements />} />
      </Routes>
    </Router>
  );
}

export default App;
