import React, { useState } from "react";
import { BiPlus } from 'react-icons/bi';

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
  const initialstate = {
    item: "",
    cost: "",
    name: "",
    description: "",
  }

  function reset() {
    setNote({ ...initialstate });
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
    postData(props.projectCode, props.facultyID, props.note, props._id);
    reset();
  }

  function postData(projectCode, facultyID, note, _id) {
    console.log("Submitted")
    fetch("/saveIndentDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        projectCode: projectCode,
        facultyID: facultyID,
        item: note.item,
        cost: note.cost,
        name: note.name,
        description: note.description,
        id: _id,

      }),
    }).then((res) => {
      console.log("Res:", res);
    })
  }

  return (
    <div>
      <form className="ff">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <label className="Lab" for="item" style={{ fontSize: "18px", fontWeight: "normal", marginTop: "2px" }}>Item: </label>
          <input
            name="item"
            onChange={handleChange}
            value={note.item}
            placeholder="Item"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <label className="Lab" for="cost" style={{ fontSize: "18px", fontWeight: "normal" }}>Cost: </label>
          <input
            name="cost"
            onChange={handleChange}
            value={note.cost}
            placeholder="Cost"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <label className="Lab" for="name" style={{ fontSize: "18px", fontWeight: "normal" }}>Name: </label>
          <input
            name="name"
            onChange={handleChange}
            value={note.name}
            placeholder="Retailer Name"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "centre" }}>
          <label className="Lab" for="description" style={{ fontSize: "18px", fontWeight: "normal", marginTop: "2px" }}>Description: </label>
          <textarea
            name="description"
            onChange={handleChange}
            value={note.description}
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