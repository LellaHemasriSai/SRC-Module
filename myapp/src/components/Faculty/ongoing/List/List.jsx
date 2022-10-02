import React, { useState,useEffect } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "./styles.css";
import { MainNav } from '../../../App';
import axios from "axios";
import { useLocation } from "react-router-dom";

function List(props) {
  const [notes, setNotes] = useState([]);
  var [l,setl] = useState(notes.length);
  const location = useLocation();
  const {from} = location.state;
  console.log(from)

  function addNote(newNote) {
    console.log(newNote)
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    setl(notes.length)
    console.log(l)
    console.log(newNote)
}

  function deleteNote(id,_id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    console.log(_id);
    fetch("/deleteIndentDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: _id,
      }),
    }).then((res) => {
      console.log("Res:", res);
    })
    // axios
    // .delete('http://localhost:3001/'+ id +'/deleteIndentDetails')
    // .then(console.log("Deleted"))
    // .catch(err => console.log(err));
  }
  

  useEffect(() => {
    console.log("hello h")
    axios.post('http://localhost:3001/'+ from + '/sendIndentDetails')
      .then(res => {
        console.log('Data: ', res.data)
        setNotes(res.data.data)
        console.log(notes)
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
      <CreateArea onAdd={addNote} projectCode={from} />
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
            item={noteItem.itemName}
            cost={noteItem.cost}
            name={noteItem.retailerName}                    // noteItem.(this name should the name used in schema)
            description={noteItem.description}
            onDelete={() => {deleteNote(index,noteItem._id)}}
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