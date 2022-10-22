import React from "react";
import './styles.css';
import {AiFillDelete} from 'react-icons/ai';
import {GiConfirmed} from 'react-icons/gi';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  function handleConfirm() {
    props.onConfirm(props.id);
  }


  return (
    <table>
        <tbody>
        <tr>
            <td>{props.item}</td>
            <td>{props.cost}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td><button onClick={handleClick} style={{border: "none", fontSize: "20px"}}><AiFillDelete /></button> <button onClick={handleConfirm} style={{border: "none" , fontSize: "20px"}}><GiConfirmed /></button></td>
        </tr>
    </tbody>
</table>
  );
}

export default Note;