import React, { useState, useRef } from 'react'
//import Sidebar from "../../Navbar/components/Sidebar";
//import Nav from "../../Navbar/components/Nav";
//import "./staff.css"
//import MainNav from '../../Navbar/components/MainNav';
import { MainNav } from '../App'


export default function ExtendDuration() {
    return (
        <div className="wrapper hover_collapse">
            <MainNav></MainNav>
            <div className="main_container">
                <div className="container">
                <div class="content">
          <h2>Application - 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button>Accept</button>
          <button>Reject</button>
			</div>
            <div class="content">
          <h2>Application - 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Accept</button>
          <button>Reject</button>
			</div>
                </div>
            </div>
        </div>
    )
}