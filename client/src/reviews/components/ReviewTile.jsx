import React from 'react';
/* eslint-disable react/prop-types */

function ReviewsList({ review }) {
  return (
    <div className="review-tile-wrapper">
      <h2>Review Tile:</h2>
      <p>{review.review_id}</p>
    </div>
  );
}

export default ReviewsList;
