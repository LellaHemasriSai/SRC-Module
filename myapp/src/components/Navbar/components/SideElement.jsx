import React from 'react';

export default function SideElement(props) {
  return (
            <li >
				<a href={props.path}>
					<span className="icon"><img src={props.img} alt={props.title}/></span>
					<span className="text">{props.title}</span>
				</a>
			</li>
  );
};


/*export default function SideElement(props) {
  return (
        	<li>
			<a href="#">
			<div className="item">
					<input type="checkbox" id="A"/>
					<label for="A">
					<span className="icon"><img src={props.img} alt={props.title}/></span>
					<span className="text">{props.title}</span></label>
				<ul>
					<li><a href={props.path}>Internal</a></li>
					<li><a href="#">Consultancy/Sponsored</a></li>
				</ul>
			</div>
			</a>
		</li>
  );
};*/