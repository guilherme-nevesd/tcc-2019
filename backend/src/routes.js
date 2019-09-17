const express = require('express');
const LeituraController = require('./controllers/LeituraController')

const routes = express.Router();


routes.get('/', (req, res) => {
  return res.send('Hello World! 2')
});

routes.post('/leituras', LeituraController.store)

module.exports = routes;
