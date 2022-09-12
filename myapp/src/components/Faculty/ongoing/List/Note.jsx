import React from "react";
import './styles.css';
import {AiFillDelete} from 'react-icons/ai';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }


  return (
    <table>
        <tbody>
        <tr>
            <td>{props.item}</td>
            <td>{props.cost}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td><button onClick={handleClick}><AiFillDelete /></button></td>
        </tr>
    </tbody>
</table>
  );
}

export default Note;