import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios'
import "./styles.css";
import { MainNav } from '../../../App';

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

  useEffect(() => {
    axios.post('http://localhost:3001/sendIndentDetails')
      .then(res => {
        console.log('Data: ', res.data.data)
        setNotes(res.data.data)

      })
      .catch(err => {
        console.log(err);
      })
  }, [])


 

  return (
    <div className="wrapper hover_collapse">
    <MainNav></MainNav>
    <div className="main_container">
    <div className="container" style={{ textAlign: "center" }}>
    <div className='grid'>
    <div>
      <CreateArea onAdd={addNote} />
  <table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Cost</th>
      <th>Retailer Name</th>
      <th>Description</th>
      <th>Delete</th>
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
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default List;
