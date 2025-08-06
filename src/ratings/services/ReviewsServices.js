import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
  headers: {
    Authorization: token,
  },
  timeout: 5000,
});

const ReviewsServices = {

  getReviews: (productId, count, page, callback) => {
    api.get(`/reviews?product_id=${productId}&count=${count}&page=${page}`)
      .then((response) => {
        console.log(response.data);
        callback(response.data);
      }).catch((err) => {
        throw new Error(err);
      });
  },
};

export default ReviewsServices;
