import React,{useState} from 'react'
import CreateReview from './CreateReview'
import Review from './Review'
import "./Reviews.css"

function Reviews() {
  const [reviews, setReviews] = useState([]);
  function handleAdd(review){
    setReviews((prevValue)=>{
      return([
        ...prevValue,
        review
      ])
    })
  }

  function handleDelete(id){
    setReviews((prevValue) => {
        return prevValue.filter((review,index) => {
            return id !== index;
        })
    })
}

  return (
    <div>
        <h1>My Views on content i watch read and everthing else</h1>
        <CreateReview handleAdd={handleAdd} />
        {reviews.map((item,index) => {
          return (
            <Review key={index} id={index} title={item.title} description={item.description} image={item.image} delete={handleDelete} />
          )
        })}
        
    </div>
  )
}

export default Reviews