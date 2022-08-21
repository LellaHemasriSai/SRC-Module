import React, { useState } from "react";
import "../register/register.css";
import logo from "../login2/logo.png";

const Register = () => {

    const [user, setUser] = useState(
        {
            name: "",
            email: "",
            password: "",
            reEnterPassword: ""
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
        <section>
            <div class="container">
                <img src={logo} alt="IIT Tirupati Logo" />
                <h3 class="text-center" >Register</h3>
                <form action="#" class="login-form" >
                    <div class="form-group" >
                        <input type="text" name="name" value={user.name} class="form-control rounded-left" placeholder="Username" required onChange={handleChange} />

                    </div>
                    <div class="form-group" >
                        <input type="email" name="email" value={user.email} class="form-control rounded-left" placeholder="Email ID" required onChange={handleChange} />
                    </div>
                    <div class="form-group" >
                        <input type="password" name="password" value={user.password} class="form-control rounded-left" placeholder="Password" required onChange={handleChange} />
                    </div>
                    <div class="form-group" >
                        <input type="password" name="reEnterPassword" value={user.reEnterPassword} class="form-control rounded-left" placeholder="Re enter Password" required onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary rounded submit p-3 px-5">Register</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register;
