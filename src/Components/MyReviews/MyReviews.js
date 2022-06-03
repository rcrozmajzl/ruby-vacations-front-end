// import React, { useState } from "react";
// import ReviewForm from "../ReviewForm/ReviewForm";
// import ReviewCard from "../ReviewCard/ReviewCard";
// import Grid from "@mui/material/Grid";


// function MyReviews({ reviews, setReviews }) {
//   const [starInput, setStarInput] = useState("");
//   const [reviewInput, setReviewInput] = useState("");
//   const [reviewEditInput, setReviewEditInput] = useState("");
//   const [starEditInput, setStarEditInput] = useState("");

//   const configObjDELETE = { method: "DELETE" };

//   const deleteReview = (review) => {
//     fetch(`http://localhost:3000/reviews/${review.id}`, configObjDELETE)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         const afterDelete = reviews.filter((review) => {
//           return review.id !== data.id;
//         });
//         setReviews(afterDelete);
//       });
//   };

//   const reviewAfterEdit = {
//     review_details: reviewEditInput,
//     star_rating: starEditInput,
//   };

//   const configObjPATCH = {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(reviewAfterEdit),
//   };

//   const handleEdit = (review, e) => {
//     e.preventDefault();
//     fetch(`http://localhost:3000/reviews/${review.id}`, configObjPATCH)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         const afterEdit = reviews.map((review) => {
//           return review.id !== data.id ? review : data;
//         });
//         setReviews(afterEdit);
//         setReviewEditInput("");
//         setStarEditInput("");
//       });
//   };

  

//   const renderReviews = reviews.map((review) => {
//     return (
//       <ReviewCard
//         key={review.id}
//         review={review}
//         reviewInput={reviewInput}
//         starInput={starInput}
//         deleteReview={deleteReview}
//         reviewEditInput={reviewEditInput}
//         setReviewEditInput={setReviewEditInput}
//         setStarEditInput={setStarEditInput}
//         starEditInput={starEditInput}
//         handleEdit={handleEdit}
//       />
//     );
//   });
//     return (
//         <div>
//           Reviews
//           <div className="reviews-container">
//             <div className='about1'>
//               Leave a review about a stay, host, or just leave a comment!
//             </div>
//             <div className='about2'>
//               Ruby Vacations create journeys at your fingertips.
//             </div>
//           </div>
//           <ReviewForm
          
            
//             starInput={starInput}
//             setStarInput={setStarInput}
//             reviewInput={reviewInput}
//             setReviewInput={setReviewInput}
//             reviews={reviews}
//             setReviews={setReviews}
//           // handleSubmit={handleSubmit}
//           />
//           <div className="reviews-container">
//             {/* <div class="column"></div>
//             <div class="column"></div>
//             <div class="column"></div> */}
//             <div className="reviewText">
//             <h2>Reviews</h2>
//             </div>
//             <Grid container style={{ justifyContent: "space-evenly" }}>
//               {/* <Paper variant="outlined" elevation={12} > */}
//                 {renderReviews}
//               {/* </Paper> */}
//             </Grid>
//           </div>
//         </div>
//   );
// }
// export default MyReviews;
import React, { useState } from "react";
// import ReviewForm from "../ReviewForm/ReviewForm";
import ReviewCard from "../ReviewCard/ReviewCard";
import Grid from "@mui/material/Grid";
import './MyReviews.css';


function MyReviews({ user, reviews, setReviews, houses }) {
  const [starInput, setStarInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const [reviewEditInput, setReviewEditInput] = useState("");
  const [starEditInput, setStarEditInput] = useState("");


  const configObjDELETE = { method: "DELETE" };

  const deleteReview = (review) => {
    fetch(`http://localhost:3000/reviews/${review.id}`, configObjDELETE)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const afterDelete = reviews.filter((review) => {
          return review.id !== data.id;
        });
        setReviews(afterDelete);
      });
  };

  const reviewAfterEdit = {
    review_details: reviewEditInput,
    star_rating: starEditInput,
  };

  const configObjPATCH = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(reviewAfterEdit),
  };

  const handleEdit = (review, e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/reviews/${review.id}`, configObjPATCH)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const afterEdit = reviews.map((review) => {
          return review.id !== data.id ? review : data;
        });
        setReviews(afterEdit);
        setReviewEditInput("");
        setStarEditInput("");
      });
  };

  const currentUserReviews = reviews.filter(review => review.user_id === user.id)
  
  const renderReviews = currentUserReviews.map((review) => {
    console.log("test")
    return (
      <ReviewCard
        key={review.id}
        review={review}
        reviewInput={reviewInput}
        starInput={starInput}
        deleteReview={deleteReview}
        reviewEditInput={reviewEditInput}
        setReviewEditInput={setReviewEditInput}
        setStarEditInput={setStarEditInput}
        starEditInput={starEditInput}
        handleEdit={handleEdit}
      />
    );
  });

  // const newReview = {
  //   review_details,

  // }

  // const configObjPOST = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: JSON.stringify(newReview),
  // };

  // const handleSubmit = () => {
  //   fetch(`http://localhost:9292`)
  // }
  return (
    <div style={{fontFamily: 'Georgia, serif', marginBottom: '10px'}}>
      <div className='reviews-header-div'>
          <h1>MY REVIEWS</h1>
        </div>
        <div className="reviews-container">
          {/* <ReviewForm
          starInput={starInput}
          setStarInput={setStarInput}
          reviewInput={reviewInput}
          setReviewInput={setReviewInput}
          reviews={reviews}
          setReviews={setReviews}
          // handleSubmit={handleSubmit}
          /> */}
          <Grid container style={{ justifyContent: "space-evenly" }}>
          {/* <Paper variant="outlined" elevation={12} > */}
            {renderReviews}
          {/* </Paper> */}
          </Grid>
        </div>
      </div>
  );
}

export default MyReviews;