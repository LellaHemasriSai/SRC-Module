import React, {useState} from "react";
import "../login2/login2.css";
import logo from "./logo.png";

const LoginAd = () => {
  const [user, setUser] = useState[{
    name: "",
    password: ""
  }]
  const handleChange = (event) => {
    const {name , value} = event.target
    setUser({
      ...[user],
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form is submitted')

  }
  return (
    <section>
      <div className="container">
        <img src={logo} alt="IIT Tirupati Logo" />
        <h3 class="text-center">Faculty Login</h3>
        <form action="#" class="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={user.name}
              className="form-control rounded-left"
              placeholder="Username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={user.password}
              className="form-control rounded-left"
              placeholder="Password"
              onChange={handleChange}
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
