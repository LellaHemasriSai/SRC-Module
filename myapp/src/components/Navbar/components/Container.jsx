import React from 'react';
//import NavBar from './Navbar';

export default function Container(props) {
  return (
    	<div className="main_container">
		<div className="container">
			<div className="content">
				{props.content}
			</div>
		</div>
	</div>
  );
};