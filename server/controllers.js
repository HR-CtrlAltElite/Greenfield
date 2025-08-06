const axios = require('axios');
require('dotenv').config();

exports.getQuestions = (req, res) => {
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
