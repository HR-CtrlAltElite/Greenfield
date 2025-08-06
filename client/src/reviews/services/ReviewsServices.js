import axios from 'axios';

const api = axios.create({
  // TODO: Change this for deployment:
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

const ReviewsServices = {

  getReviews: (productId, count, page, callback) => {
    api.get(`/reviews/${productId}/count/${count}/page/${page}`)
      .then((response) => {
        callback(response.data);
      }).catch((err) => {
        throw new Error(err);
      });
  },
};

export default ReviewsServices;
