import React from 'react';
import * as styles from '../reviews.module.css';
/* eslint-disable react/prop-types */

function ReviewsList({ review }) {
  return (
    <div className={styles.reviewTileWrapper}>
      <div className={styles.reviewTileHeading}>
        <div className={styles.reviewTileStarRating}>
          ☆☆☆☆☆:
          {review.rating}
        </div>
        <div className="review-title__authorship">
          <span className="review-title__review-user">
            {review.reviewer_name}
          </span>
          <span className="review-title__review-date">
            {review.date}
          </span>
        </div>
      </div>
      <h2 className="review-tile__summary">{review.summary}</h2>
      <p className="review-tile__body">{review.body}</p>
      <p className="review-tile__recommended">✓ I recommend this product</p>
      <div className={styles.reviewTitleResponse}>
        <h3 className={styles.reviewTitleResponseTitle}>Response: </h3>
        <p className="review-title__response-title">{review.response}</p>
      </div>
      <div className="review-tile__helpfulness-footer">
        <p className="review-tile__helpfulness-text">
          <span className="review-tile__helpful-btn">
            Helpful?
            <button type="button">Yes</button>
            {review.helpfulness}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ReviewsList;
