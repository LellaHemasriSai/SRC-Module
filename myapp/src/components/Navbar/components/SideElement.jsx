import React from 'react';
//import NavBar from './Navbar';

export default function SideElement(props) {
  return (
            <li>
				<a href={props.path}>
					<span className="icon"><img src={props.img} alt={props.title}/></span>
					<span className="text">{props.title}</span>
				</a>
			</li>
  );
};