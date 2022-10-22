import React from 'react'
import "./staff.css"

function ApplicationCard(props) {
  return (<div className='student_content'>
      <div class="content">
          <h2>{props.name}</h2>
          <div>
            <span>
              <span style={{fontWeight:"900"  }}>Project ID:</span>  {props.ID}
            </span>
          </div>
          <div className='application_text'>
            <span className='application_items'>
              <p className='items_p'>Faculty Name</p>
              <span>{props.facultyName}</span>
              </span>
            <span className='application_items'>
              <p className='items_p'>Salary Details</p>
              <p>{props.details}</p>
            </span>
          </div>
          <p>{props.description}</p>
		</div>
      </div>)
}

export default ApplicationCard;