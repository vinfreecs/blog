import React from 'react';
import Note from './Note';
import { useState } from 'react';
import CreateArea from './CreateArea';
import "./Thoughts.css";

function Thoughts() {

    const [notes,setNotes] = useState([]);

    function handleAdd(note){
        setNotes((prevValue) => {
            return[
                ...prevValue,
                note
            ];
        });
    }
    function handleDelete(id){
        setNotes((prevValue) => {
            return prevValue.filter((note,index) => {
                return id !== index;
            })
        })
    }
    return (
      <div>
        <CreateArea handleAdd={handleAdd} />
              {notes.map((note,index) =>{
                  return(
                      <Note key={index} id={index} title={note.title} content={note.content} delete={handleDelete} /> 
                  );
              } )}
      </div>
    )
}

export default Thoughts