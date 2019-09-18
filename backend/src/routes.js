const express = require('express');
const LeituraController = require('./controllers/LeituraController')

const routes = express.Router();

routes.post('/leitura', LeituraController.store) // Criar uma nova leitura no banco via http
routes.get('/leituras', LeituraController.index) // Busca todas as leituras no banco

module.exports = routes;
