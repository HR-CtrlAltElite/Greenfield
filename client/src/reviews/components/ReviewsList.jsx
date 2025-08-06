import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile';
import ReviewsServices from '../services/ReviewsServices';
import Reviews from '../controllers/ReviewsStore';
/* eslint-disable react/prop-types */

function ReviewsList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ReviewsServices.getReviews(Reviews.product, Reviews.count, Reviews.page, (data) => {
      setReviews(data.results);
    });
  }, []);

  const getMoreReviews = () => {
    Reviews.count += 2;
    ReviewsServices.getReviews(Reviews.product, Reviews.count, Reviews.page, (data) => {
      setReviews(data.results);
    });
  };

  return (
    <div className="reviews-list-wrapper">
      <h2>Ratings and Reviews List: </h2>
      {reviews.map((review) => (
        <ReviewTile key={review.review_id} review={review} />
      ))}
      <button type="button" onClick={() => getMoreReviews()}>More Reviews</button>
    </div>
  );
}

export default ReviewsList;
