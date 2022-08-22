/*function onClickProject()
{
    window.location.href="../CreateProject/create.html";
}*/

import React from "react";
import { Link } from "react-router-dom"
import "./home.css";

const Home = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" href="">Username</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link className="nav-link" href="">Workshops/Seminars/Lectures</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="">Awards/Recognitions</Link>
                                <Link class="nav-link" href="">Journal/Conferences</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="">Books/Chapters</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="">Projects Guided</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="">Projects/Consultancy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="grid-container">
                <div>
                    <div class="container-box">
                        <h4>Create Project</h4>
                        <hr />
                        <div class="">
                            <button class="button">Sponsered/Consultancy Project</button>
                            <button class="button">Internal Project</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="container-box">
                        <h4>Recruitment</h4>
                        <hr />
                        <div class="">
                            <button class="btn-staff">Staff</button>
                            <button class="button">Adhoc</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;