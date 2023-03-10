import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from "@mui/material/Zoom"

function CreateArea(props) {
    const [zoom,setZoom] = useState(false);
    const [note,setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name,value} = event.target
        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            }
        });
    }

    function handleClick(){
      setZoom(true);
    }

    function submitAdd(event){
        props.handleAdd(note);
        event.preventDefault();
        setNote({
            title:"",
            content:""
        })
    }

  return (
    <div>
      <form className="create-note">
        {zoom && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
        <textarea onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." rows={zoom ? "3" : "1"} value={note.content} />
        <Zoom in={zoom}>
        <Fab onClick={submitAdd} aria-label="add">
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;