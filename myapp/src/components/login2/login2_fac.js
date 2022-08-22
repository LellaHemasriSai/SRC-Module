import React, { useState } from "react";
import "../login2/login2.css";
import logo from "./logo.png";
import { Link } from "react-router-dom"

const LoginFac = () => {
    const [user, setUser] = useState(
        {
            name: "",
            password: "",
        }
    )

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div>
            <div class="container">
                <img src={logo} alt="IIT Tirupati Logo" />
                <h3 class="text-center" >Faculty Login</h3>
                <form action="#" class="login-form" >
                    <div class="form-group" >
                        <input type="text" name="name" value={user.name} class="form-control rounded-left" placeholder="Username" required onChange={handleChange} />

                    </div>
                    <div class="form-group" >
                        <input type="password" name="password" value={user.password} class="form-control rounded-left" placeholder="Password" required onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <div class="w-50" >
                            <a href="www.google.com">Forgot Password</a>
                        </div>
                    </div>

                    <Link to="/home">
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary rounded submit p-3 px-5">Login</button>
                        </div>
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default LoginFac;