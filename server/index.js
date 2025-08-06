require('dotenv').config();

const express = require('express');
const path = require('path');
const controllers = require('./controllers');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

// define routes as needed
// ex: app.get('/products', controllers.getProducts);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
