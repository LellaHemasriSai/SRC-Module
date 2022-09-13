import React, { useState,useEffect } from "react";
import axios from "axios";





export default function FacultyApplicationCard(props) {

    function postAccept(id) {
        console.log("Applied")
        fetch("/sendAcceptedApplications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

            }),
        }).then((res) => {
            console.log("Res:", res);
        })
    }

    function postReject(){
        fetch("/sendRejectedApplications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

            }),
        }).then((res) => {
            console.log("Res:", res);
        }) 
    }
    
  return (
      <div class="content">
      <div className='header_text'>
        <span style={{ fontSize:"2.3rem" , fontWeight:"900"}}>Project Name</span>
      </div>
          <div>
            <span>
              Id
            </span>
          </div>
            <div>
            <span>
              Type
            </span>
          </div>
          <div className='application_text'>
            <span className='application_items'>
              <p className='items_p'>Student Name</p>
              <span>student</span>
              </span>
            <span className='application_items'>
              <p className='items_p'>Qualifications</p>
              <p>B-tech</p>
            </span>
            <span className='application_items'>
              <p className='items_p'>Email</p>
              <p>student@iittp.ac.in</p>
            </span>
          </div>
      <div className='home_text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className='application_button'>
          <button onClick={() => { postAccept(props.id) }} className='accept_btn'>Accept</button>
          <button onClick={() => { postReject(props.id) }} className='reject_btn'>Reject</button>
    </div>
	</div>
  )
};
