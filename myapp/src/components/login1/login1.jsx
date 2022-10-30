import React from "react";
import "../login1/login1.css";
import { useLocation } from 'react-router-dom'
import logo from "../../images/logo.png"
import {Link} from "react-router-dom";


function Login1() {
    const location = useLocation()
    console.log(location);
    return (
        <div className="login1_container">
            <img src="https://t4.ftcdn.net/jpg/05/18/90/73/360_F_518907339_S1lBUD5UesFvxXGpY1W695x0k0WO6YLh.jpg" alt="SRC Logo" />
            <hr />
            <h3>Welcome to IIT Tirupati E-Governance</h3>
            <hr />
            <div className="btn-group_login1">
                <Link to ="./Admin" style={{textDecoration: 'none',marginTop: '0px'}}><button type="button" className="btn btn-outline-primary" onClick="onClickStaff()">Admin Login</button></Link>
                <Link to="./Faculty" style={{textDecoration: 'none',marginTop: '0px'}}>
                <button type="button" className="btn btn-outline-primary" >Faculty Login</button>
                </Link>
                <Link to ="../Student" style={{textDecoration: 'none',marginTop: '0px'}}><button type="button" class="btn btn-outline-primary"  onClick="onClickStaff()">Student Login</button></Link>
            </div>
        </div>
    );
}

export default Login1;