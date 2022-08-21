import React, { useState } from "react";
import "../register/register.css";
import logo from "../login2/logo.png";

const Register = () => {
  return (
    <section class="sec">
      <div class="container">
        <img src={logo} alt="IIT Tirupati Logo" />
        <h3 class="text-center">Register</h3>
        <form action="#" class="login-form">
          <div class="form-group">
            <input
              type="text"
              class="form-control rounded-left"
              placeholder="Username"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control rounded-left"
              placeholder="Email ID"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control rounded-left"
              placeholder="Password"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control rounded-left"
              placeholder="Re enter Password"
              required
            />
          </div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary rounded submit p-3 px-5"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
