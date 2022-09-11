import React from "react";
import "../login1/login1.css";
import logo from "../../images/logo.png"
import {Link} from "react-router-dom";


// function onClickStudent() {
//     window.location.href = "../login2/login2_stu.html";
// }

// function onClickStaff() {
//     window.location.href = "../login2/login2_fac.html";
// }

// function onClickAdmin() {
//     window.location.href = "../login2/login2_Ad.html";
// }

function Login1() {
    return (
        <div className="login1_container">
            <img src={logo} alt="IIT Tirupati Logo" />
            <hr />
            <h3>Welcome to IIT Tirupati E-Governance</h3>
            <hr />
            <div className="btn-group_login1">
                <Link to ="../Student" style={{textDecoration: 'none',marginTop: '0px'}}><button type="button" class="btn btn-outline-primary"  onClick="onClickStaff()">Student Login</button></Link>
                <Link to="./Faculty" style={{textDecoration: 'none',marginTop: '0px'}}>
                <button type="button" className="btn btn-outline-primary" >Faculty Login</button>
                </Link>
                <Link to ="./Admin" style={{textDecoration: 'none',marginTop: '0px'}}><button type="button" className="btn btn-outline-primary" onClick="onClickStaff()">Admin Login</button></Link>
            </div>
        </div>
    );
}

export default Login1;