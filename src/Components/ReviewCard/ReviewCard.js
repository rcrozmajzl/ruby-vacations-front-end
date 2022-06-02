// import React from 'react';

// function ReviewCard() {

//     return(
//         <div>

//         </div>
//     )
// }

// export default ReviewCard;

import React, { useState } from "react";
import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating'
import './ReviewCard.css'

function ReviewCard({
  review,
  reviewInput,
  starInput,
  deleteReview,
  handleEdit,
  reviewEditInput,
  setReviewEditInput,
  setStarEditInput,
  starEditInput,
}) {
  const [displayEdit, setDisplayEdit] = useState(false);
  // change initial state
  // const [reviewEditInput, setReviewEditInput] = useState(reviewInput);
  // const [starEditInput, setStarEditInput] = useState(starInput);
  const { review_details, star_rating, customer_id, restaurant_id } = review;



return (
    <div className="review-item">
      {/* <Paper> */}
      <h3>{review_details}</h3>
      {/* <h3>{star_rating}</h3> */}
      <Rating value={star_rating} readOnly />
      <button className="btnEdit" onClick={() => setDisplayEdit(!displayEdit)}>edit</button>
      <button className="btnDelete" onClick={() => deleteReview(review)}>delete</button>
      {displayEdit ? (
        <form
          className="review-edit-form"
          onSubmit={(e) => handleEdit(review, e)}
        >
          <input
            onChange={(e) => setReviewEditInput(e.target.value)}
            placeholder="edit review"
            value={reviewEditInput}
          ></input>
          <input
            onChange={(e) => setStarEditInput(e.target.value)}
            placeholder="edit star_rating"
            // CHANGE VALUES
            value={starEditInput}
          ></input>
          <button onClick={(e) => handleEdit(review, e)}>update</button>
        </form>
      ) : null}
      {/* </Paper> */}
    </div>
  );
}

export default ReviewCard;