// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Faculty/Home/home.js";
import LoginFac from "./login2/login2_fac";
import Login1 from "./login1/login1.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login1 />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/loginfac" element={<LoginFac />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
