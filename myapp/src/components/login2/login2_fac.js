import React from "react";
import "../login2/login2.css";

const LoginFac = () => {
    return (
        <section>
            <div class="container">
                <img src={logo} alt="IIT Tirupati Logo" />
                <h3 class="text-center" >Faculty Login</h3>
                <form action="#" class="login-form" >
                    <div class="form-group" >
                        <input type="text" class="form-control rounded-left" placeholder="Username" required />

                    </div>
                    <div class="form-group" >
                        <input type="password" class="form-control rounded-left" placeholder="Password" required />
                    </div>
                    <div class="form-group">
                        <div class="w-50" >
                            <a href="www.google.com">Forgot Password</a>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary rounded submit p-3 px-5">Login</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default LoginFac;