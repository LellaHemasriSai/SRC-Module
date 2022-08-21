import React from "react";
import "../login1/login1.css";
import logo from './logo.png'

/*function onClickStudent() {
    window.location.href = "../login2/login2_stu.html";
}

function onClickStaff() {
    window.location.href = "../login2/login2_fac.html";
}

function onClickAdmin() {
    window.location.href = "../login2/login2_Ad.html";
}*/

const Login1 = () => {
    return (
        <div class="container">
            <img src={logo} alt="IIT Tirupati Logo" />
            <hr />
            <h3>Welcome to IIT Tirupati E-Governance</h3>
            <hr />
            <div class="btn-group">
                <button type="button" class="btn btn-outline-primary" onClick="onClickStaff()">Student Login</button>
                <button type="button" class="btn btn-outline-primary" onClick="onClickStaff()">Faculty Login</button>
                <button type="button" class="btn btn-outline-primary" onClick="onClickStaff()">Admin Login</button>
                {/* < button class="button" onClick="onClickStudent()">Student Login</> -->
                    <!-- <button class="button" onClick="onClickStaff()">Faculty Login</button>
    <button class="button" onClick="onClickAdmin()">Admin Login</button> -->*/}
            </div>
        </div>
    );
}

export default Login1;