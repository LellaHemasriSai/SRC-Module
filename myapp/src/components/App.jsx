// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
//import Home from "./Faculty/Home/home.js";
//import LoginFac from "./login2/login2_fac";
import Navbar from './Navbar/Navbar';
// import Login1 from "./login1/login1.jsx";
import Home from "./Faculty/Home/Home";
import CreateProject from "../components/Faculty/CreateProject/CreateProject";
import Ongoing from "../components/Faculty/ongoing/Ongoing"
import Recruitment from "../components/Faculty/Staff Recruitment/Staff";

const App = () => {
  return (
    <Router>
     <Navbar />
      <Routes>
      {/* <Route exact path="/" element={<Login1 />} /> */}
        {/* <Route exact path="/" element={<Login1 />} /> */}
        <Route  exact path="/"  element = {<Home/>}/>
        <Route  exact path="/create_project" element= {<CreateProject/>}/>
        <Route  exact path="/ongoing_project" element= {<Ongoing/>}/>
        <Route  exact path="/recruitment" element= {<Recruitment/>}/>

      </Routes>
    </Router>
  );
}

export default App;
