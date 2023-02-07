import React from 'react'
import "./Reviews.css";
import DeleteIcon from '@mui/icons-material/Delete';

function Review(props) {
  return (
    <div className='card'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <img  src={props.image} alt="nothing" />
        <button classname="card-delete-button" onClick={() => {
        props.delete(props.id)
      }} >
        <DeleteIcon />
      </button>
    </div>
  )
}

export default Review