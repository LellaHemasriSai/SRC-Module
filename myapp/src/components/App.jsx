// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./Faculty/Home/home.js";
//import LoginFac from "./login2/login2_fac";
// import Navbar from './Navbar/Navbar';
import Login1 from "./login1/login1.jsx";
import Home from "./Faculty/Home/Home";
import CreateProject from "../components/Faculty/CreateProject/CreateProject";
import Ongoing from "../components/Faculty/ongoing/Ongoing"
import Recruitment from "../components/Faculty/Staff Recruitment/Staff";
import WithoutNav from "./Navbar/WithoutNav";
import WithNav from "./Navbar/WithNav";
import LoginFac from "./login2/login2_fac";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<WithoutNav />}>
        <Route exact path="/" element={<Login1 />} />
        <Route exact path="/login2" element={<LoginFac />} />
        </Route>
         <Route element={<WithNav/>}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/create_project" element={<CreateProject />} />
          <Route exact path="/ongoing_project" element={<Ongoing />} />
          <Route exact path="/recruitment" element={<Recruitment />} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
