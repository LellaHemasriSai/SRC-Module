import React, { useState } from "react";
import {BiPlus} from 'react-icons/bi';

function CreateArea(props) {
  const [note, setNote] = useState({
    item: "",
    cost: "",
    name: "",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      item: "",
      cost: "",
      name: "",
      description: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="ff">
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
      <label className="Lab" for="item" style={{fontSize: "18px" , fontWeight: "normal", marginTop: "2px"}}>Item: </label>
        <input
          name="item"
          onChange={handleChange}
          value={note.title}
          placeholder="Item"
        />
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
        <label className="Lab" for="cost" style={{fontSize: "18px" , fontWeight: "normal"}}>Cost: </label>
        <input
          name="cost"
          onChange={handleChange}
          value={note.title}
          placeholder="Cost"
        />
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
        <label className="Lab" for="name" style={{fontSize: "18px" , fontWeight: "normal"}}>Name: </label>
        <input
          name="name"
          onChange={handleChange}
          value={note.title}
          placeholder="Retailer Name"
        />
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "centre"}}>
        <label className="Lab" for="description" style={{fontSize: "18px", fontWeight: "normal", marginTop: "2px"}}>Description: </label>
        <textarea
          name="description"
          onChange={handleChange}
          value={note.content}
          placeholder="Description about item"
          rows="3"
        />
        </div>
        <button onClick={submitNote}><BiPlus /></button>
      </form>
    </div>
  );
}

export default CreateArea;
