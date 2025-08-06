require('dotenv').config();

const express = require('express');
const path = require('path');
const { getReviews } = require('./controllers');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

// define routes as needed
// ex: app.get('/products', controllers.getProducts);
app.get('/questions', controllers.getQuestions);

// Reviews Routes:
app.route('/reviews/:id/count/:count/page/:page')
  .get((req, res) => {
    const data = {
      id: req.params.id,
      count: req.params.count,
      page: req.params.page,
    };
    getReviews(data)
      .then((reviews) => {
        res.status(200).json(reviews);
      }).catch((err) => {
        res.status(500).send('Error getting reviews');
        throw new Error(err);
      });
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
