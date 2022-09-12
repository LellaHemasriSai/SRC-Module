import React, { useState } from "react";

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
        <input
          name="item"
          onChange={handleChange}
          value={note.title}
          placeholder="Item"
        />
        <input
          name="cost"
          onChange={handleChange}
          value={note.title}
          placeholder="Cost"
        />
        <input
          name="name"
          onChange={handleChange}
          value={note.title}
          placeholder="Retailer Name"
        />
        <textarea
          name="description"
          onChange={handleChange}
          value={note.content}
          placeholder="Description about item"
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
