const axios = require('axios');

const api = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
  headers: {
    Authorization: process.env.API_KEY,
  },
  timeout: 5000,
});

// Reviews Controllers:
function getReviews({ id, count, page }) {
  return api.get(`/reviews?product_id=${id}&count=${count}&page=${page}`)
    .then((response) => response.data)
    .catch((err) => {
      throw new Error(err);
    });
}

module.exports = {
  getReviews,
};
