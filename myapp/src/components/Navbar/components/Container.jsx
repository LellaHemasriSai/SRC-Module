import React from 'react';
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
export default function Container(props) {
  return (
    	<div className="main_container">
		<div className="container">
				<Content
				name="Pooja"
        dob="09/06/2003"
        qual="b-tech"
        contact="99999999999"
        email="CS20B002@iittp.ac.in"
        dep="CSE"
        /> 
		</div>
	</div>
  );
};