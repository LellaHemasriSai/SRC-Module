import React from 'react'
import Sidebar from "../../Navbar/components/Sidebar";
import Nav from "../../Navbar/components/Nav";
export default function Create() {
  return (
    <div className="wrapper hover_collapse">
  <Nav user="User Name"></Nav>
  <Sidebar></Sidebar>
    <form class="forms" style={{marginTop: '100px'}} >
        <div class="">
            <div class="first-row">
                <div class="ag-code">
                    <p>Agency ID</p>
                    <select name="ag-code" id="ag-code"></select>
                </div>
                <div class="ag-name">
                    <p>Agency name</p>
                    <select name="ag-name" id="ag-name"></select>
                </div>
                <div class="og-type">
                    <p>Organization Type</p>
                    <select name="og-type" id="og-type"></select>
                </div>
                
            </div>
            <div class="second-row">
                <div class="proj-id">
                    <p>Project ID</p>
                    <input type="text" placeholder="Project ID" name="proj-id"/>
                </div>
                <div class="proj-type">
                    <p>Project Type</p>
                    <input type="text" placeholder="Project Type" name="proj-type"/>
                </div>
                <div class="proj-name">
                    <p>Project Name</p>
                    <input type="text" placeholder="Project Name" name="proj-name"/>
                </div>
            </div>
            <div class="third-row">
                <div class="sanc-val">
                    <p>Sanction Value</p>
                    <input type="text" placeholder="Sanction Value" name="sanc-val"/>
                </div>
                <div class="start-d">
                    <p>Start Date</p>
                    <input type="date" id="start-d" name="start-d"/>
                </div>
                <div class="end-d">
                    <p>End Date</p>
                    <input type="date" id="end-d" name="end-d"/>
                </div>
            </div>
            <div class="desc-box">
                <p>Scope and Objective of the project</p>
                <textarea id="desc-box" name="desc-box"  placeholder="Enter Scope and Objective here.."></textarea>
            </div>
            <div class="btn">
                <button type="submit">Create</button>
                <button type="submit">Cancel</button>
            </div>
        </div>
    </form>
    </div>
  )
}
