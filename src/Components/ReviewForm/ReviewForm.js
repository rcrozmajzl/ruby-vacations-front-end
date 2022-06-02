// import React from 'react';

// function ReviewForm() {

//     return(
//         <div>

//         </div>
//     )
// }

// export default ReviewForm;

import React, { useState } from "react";

function ReviewForm({
  // starInput,
  // setStarInput,
  // reviewInput,
  // setReviewInput,
  // handleSubmit,
  reviews,
  setReviews,
  house_id,
  user_id
}) {
  const [starInput, setStarInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const newReview = {
    review_details: starInput,
    star_rating: reviewInput,
    house_id: house_id,
    user_id: user_id,
  };
  console.log('newReview: ', newReview);
  
  const configObjPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newReview),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/reviews`, configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews([...reviews, data]);
        setStarInput("");
        setReviewInput("");
      });
  };

  //console.log(starInput, reviewInput);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='reviewText'> Leave a review! </div>
    
      <input
        className='inputReview'
        type="integer"
        value={starInput}
        placeholder="Star Rating"
        onChange={(e) => setStarInput(e.target.value)}
        style={{borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', width: '49%',}}
      />
      <textarea
        className='inputReview'
        type="textarea"
        value={reviewInput}
        placeholder="Review..."
        onChange={(e) => setReviewInput(e.target.value)}
        style={{textAlign: 'center', width: '49%', marginLeft: '25.5%'}}
      />
      <button style={{width: '10%', backgroundColor:'black', color:'white', cursor:'pointer',transform: 'skew(-10deg)'}} onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default ReviewForm;