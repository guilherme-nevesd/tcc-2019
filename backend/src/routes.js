const express = require('express');
const LeituraController = require('./controllers/LeituraController')
const ConsumoController = require('./controllers/ConsumoController')

const routes = express.Router();

routes.post('/leitura', LeituraController.store) // Cria uma nova leitura no banco via http
routes.get('/leituras', LeituraController.index) // Busca todas as leituras no banco

routes.post('/consumo', ConsumoController.store) // Cria uma nova consumo no banco via http
routes.get('/consumos', ConsumoController.index) // Busca todas as consumos no banco

module.exports = routes;
