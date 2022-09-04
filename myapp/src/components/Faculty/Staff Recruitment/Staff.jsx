import React from 'react'
//import Sidebar from "../../Navbar/components/Sidebar";
//import Nav from "../../Navbar/components/Nav";
import "./staff.css"
//import MainNav from '../../Navbar/components/MainNav';
import { MainNav } from '../../App';
//import { Container } from '@mui/system';

class Staff extends React.Component {

    constructor() {
        super();
        this.state = {
            projectName: null,
            projectID: null,
            proejctType: null,
            no_ofStaff: null,
            salaryDetails: null,
            startDate: null,
            endDate: null,
            descriptionBox: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    submit() {
        console.log("submiitted")
        console.warn(this.state)
    }
    render() {
        return (
            <div className="wrapper hover_collapse">
                <MainNav></MainNav>
                <div className="main_container">
                    <div className="container">
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="projectName">Project Name</label>
                                    <input type="text" required class="form-control" name="projectName" id="projectName" placeholder="Project Name" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="projectID">Project ID</label>
                                    <input type="text" required class="form-control" name="projectID" id="projectID" placeholder="Project ID" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="projectType">Project Type</label>
                                    <input type="text" required class="form-control" name="projectType" id="projectType" placeholder="Project Type" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="no_ofStaff">Number of Staff</label>
                                    <input type="number" required class="form-control" name="no_ofStaff" id="no_ofStaff" placeholder="Number of Staff" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="salaryDetails">Salary Details</label>
                                    <input type="text" required class="form-control" name="salaryDetails" id="salaryDetails" placeholder="Salary Details" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="startDate">Start Date</label>
                                    <input type="date" required class="form-control" name="startDate" id="startDate" placeholder="Start Date" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="endDate">End date</label>
                                    <input type="date" required class="form-control" name="endDate" id="endDate" placeholder="End Date" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="descriptionBox">Reason for Recruitment</label>
                                    <textarea type="text" required class="form-control" rows="5" id="descriptionBox" placeholder="Description" onChange={this.handleInputChange} />
                                </div>
                                <div class="form-group col-md-4" style={{ marginTop: '50px', }}>
                                    <button type="button" required onClick={() => this.submit()} class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Staff;