import React from 'react'
import "./staff.css"
function ApplicationCard(props) {
  return (<div className='student_content'>
      <div class="content">
          <h2>Project Name</h2>
          <div>
            <span>
              <span style={{fontWeight:"900"  }}>Project ID:</span>  ID341
            </span>
          </div>
          <div className='application_text'>
            <span className='application_items'>
              <p className='items_p'>Faculty Name</p>
              <span>faculty</span>
              </span>
            <span className='application_items'>
              <p className='items_p'>Salary Details</p>
              <p>0000000</p>
            </span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
      </div>)
}

export default ApplicationCard;