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
function getQuestions (req, res) {
  const product_id = req.params.product_id || '40347';
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', { params: { product_id: product_id }, headers: { Authorization: process.env.API_KEY } })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.send('could not hit API');
    });
};
module.exports = {
  getReviews,
  getQuestions,
};
