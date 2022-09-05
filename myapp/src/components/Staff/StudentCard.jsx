import React from 'react'
import "./staff.css"

export default function StudentCard(props) {
  return (
    <li class="cards_item">
      <div class="card">
        
          <h2 class="card_title">Card Grid Layout</h2>
		<div className='card_text'>
		<p>Project Name: Title</p>
		<p>Project ID: Title</p>
		<p>Faculty Name: Title</p>
		<p>Name: Title</p>
		</div>
          <button class="btn card_btn">Apply Now</button>
        
      </div>
    </li>
  );
};
