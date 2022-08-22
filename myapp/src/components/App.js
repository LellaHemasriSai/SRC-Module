import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css";
import Home from "./Faculty/Home/home";
import Register from "./register/register";
import LoginFac from "./login2/login2_fac";
import Login1 from "./login1/login1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/loginfac" element={<LoginFac />}></Route>
        <Route path="/home"><Home /></Route>
        <Route path="/login1"><Login1 /></Route>

      </Routes>
    </BrowserRouter >


  );
}

export default App;
