import React from "react";
import "../login2/login2.css";
import logo from "./logo.png";

const LoginAd = () => {
  return (
    <section>
      <div className="container">
        <img src={logo} alt="IIT Tirupati Logo" />
        <h3 class="text-center">Faculty Login</h3>
        <form action="#" class="login-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control rounded-left"
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control rounded-left"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <div className="w-50">
              <a href="www.google.com">Forgot Password</a>
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary rounded submit p-3 px-5"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginAd;
