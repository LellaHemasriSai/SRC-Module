import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "./styles.css";

function List() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <table class="table">
      <thead>
      <tr>
        <th scope="col">Item</th>
        <th scope="col">Cost</th>
        <th scope="col">Retailer Name</th>
        <th scope="col">Description</th>
      </tr>
      </thead>
      </table>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            item={noteItem.item}
            cost={noteItem.cost}
            name={noteItem.name}
            description={noteItem.description}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default List;
