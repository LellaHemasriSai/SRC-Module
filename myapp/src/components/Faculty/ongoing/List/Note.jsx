import React from "react";
import './styles.css';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  <tr>
  <th scope="col">Item</th>
  <th scope="col">Cost</th>
  <th scope="col">Retailer Name</th>
  <th scope="col">Description</th>
  </tr> 

  return (
    <table class="table">
        <tbody>
        <tr>
            <td data-label="item">{props.item}</td>
            <td data-label="cost">{props.cost}</td>
            <td data-label="name">{props.name}</td>
            <td data-label="description">{props.description}</td>
            <td data-label="button"><button  class="btn btn__pledged" onClick={handleClick}>DELETE</button></td>
        </tr>
    </tbody>
</table>
  );
}

export default Note;