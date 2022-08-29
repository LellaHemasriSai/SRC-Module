import React, {useState} from 'react'
import Sidebar from "../../Navbar/components/Sidebar";
import Nav from "../../Navbar/components/Nav";
import Container from '../../Navbar/components/Container';
import Data from "./data.json"
import {nanoid} from "nanoid"
function Ongoing() {
  const [data, setdata] = useState(Data)
  const [addformdata, setaddformdata] = useState({
    ProjectID: '',
    ProjectName: '',
    ProjectType: '',
    Description: '',
    Status: ''
  })
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const name= event.target.getAttribute('name');
    const value = event.target.value;

    const newformData = {...addformdata};
    newformData[name] = value;

    setaddformdata(newformData);
  }

  const handleAddFormSubmit = (event) =>{
    event.preventDefault();

    const newdata ={
      id: nanoid(),
      ProjectID: addformdata.ProjectID,
      ProjectName: addformdata.ProjectName,
      ProjectType: addformdata.ProjectType,
      Description: addformdata.Description,
      ProjectStatus: addformdata.ProjectStatus,
    }
    const newdatas = [...data,newdata];
    setaddformdata(newdatas);
     
  }
  return <div className="wrapper hover_collapse">
  <Nav user="User Name"></Nav>
  <Sidebar></Sidebar>
  {/* <Container content="Ongoing Projects"> */}
  
   <div className="app-container" style={{marginTop: "100px",marginLeft: "100px",textAlign: "centre"}}>
    <table>
      <thead>
        <tr>
          <th>Project ID</th>
          <th>Project Name</th>
          <th>Project Type</th>
          <th>Description</th>
          <th>Project Status</th>
        </tr>
      </thead>
      <tbody>
      {data.map((data) => (
        <tr>
          <td>{data.ProjectID}</td>
          <td>{data.ProjectName}</td>
          <td>{data.ProjectType}</td>
          <td>{data.Description}</td>
          <td>{data.ProjectStatus}</td>
        </tr>
      ))}
      </tbody>
    </table>

    <h2>Add Data</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input 
        type="text"
        name="ProjectID"
        required="required"
        placeholder="Enter ProjectID"
        onChange={handleAddFormChange}
        />
       <input 
        type="text"
        name="ProjectName"
        required="required"
        placeholder="Enter ProjectName"
        onChange={handleAddFormChange}
        />
        <input 
        type="text"
        name="ProjectType"
        required="required"
        placeholder="Enter ProjectType"
        onChange={handleAddFormChange}
        />
        <input 
        type="text"
        name="Description"
        required="required"
        placeholder="Enter Description"
        onChange={handleAddFormChange}
        />
        <input 
        type="text"
        name="Status"
        required="required"
        placeholder="Status"
        onChange={handleAddFormChange}
        /> 
        <button type="submit">Add</button>
    </form>
   </div>
  {/* </Container> */}
  </div>

}

export default Ongoing;