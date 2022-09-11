import React from 'react';
import { useParams } from 'react-router-dom';
//import NavBar from './Navbar';
import Content from './content';
// const data=[{
//         "Name": "Pooja",
//         "Department": "CSE",
//         "Email": "CS20B002@iittp.ac.in",
//         "Contact":"99999999999",
//         "DateOfJoining":"10/12/2020",
//         "Qualifications":"b-tech",
//         "DoB":"09/06/2003"
//     },
//     {
//         "Name": "ASM",
//         "Department": "CSE",
//         "Email": "CS20B00x@iittp.ac.in",
//         "Contact":"99999999999",
//         "DateOfJoining":"10/12/2020",
//         "Qualifications":"b-tech",
//         "DoB":"09/06/2003"
//     }
// ]

const user={
      "Name": "Pooja Sree",
      "DoB":"09/06/2003",
      "Department": "CSE",
      "Email": "CS20B002@iittp.ac.in",
      "Contact":"8247800018",
      "DoF":"10/12/2020",
      "Qualifications":"B-tech",
      "Address":"Vijayawada"
      
}
export default function Container(props) {
  const {username}=useParams();
  return (
    	<div className="main_container">
     
		<div className="container">
				<Content
				name={user.Name}
        dob={user.DoB}
        qual={user.Qualifications}
        contact={user.Contact}
        email={user.Email}
        dep={user.Department}
        addr={user.Address}
        dof={user.DoF}
        /> 
		</div>
	</div>
  );
};