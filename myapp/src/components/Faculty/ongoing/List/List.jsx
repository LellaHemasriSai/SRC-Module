import React, { useState,useEffect } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "./styles.css";
import { MainNav } from '../../../App';
import axios from "axios";

function List() {
  const [notes, setNotes] = useState([]);
  var [l,setl] = useState(notes.length);

  function addNote(newNote) {
    console.log(newNote)
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    setl(notes.length)
    console.log(l)
    console.log(newNote)
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
        console.log(notes)
      })
      .catch(err => {
        console.log(err);
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

 

  return (
    <div className="wrapper hover_collapse">
    <MainNav></MainNav>
    <div className="main_container">
    <div className="container" style={{ textAlign: "center" }}>
    <div className='grid'>
    <div>
      <CreateArea onAdd={addNote} projectCode facultyID note={notes} _id />
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