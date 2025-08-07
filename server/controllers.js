const axios = require('axios');

const api = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp',
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

function getQuestions(req, res) {
  const product_id = req.query.product_id || '40348';
  // console.log('p_id', product_id);
  api.get('/qa/questions', { params: { product_id: product_id } })
    .then((response) => {
      //console.log('controller', response.data);
      res.json(response.data);
    })
    .catch((err) => {
      throw new Error(err);
    });
}
function getAnswers(req, res) {
  const question_id = req.params.question_id;
  // console.log('count', req.query.count);
  api.get(`/qa/questions/${question_id}/answers`, { params: { count: req.query.count } })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      throw new Error(err);
    });
}
module.exports = {
  getReviews,
  getQuestions,
  getAnswers,
};
