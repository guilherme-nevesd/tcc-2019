const axios = require('axios');;
const Leitura = require('../models/Leitura');

module.exports = {

  async index(req, res) {
    const { inicio, fim } = req.query;

    if(inicio && fim){
      var dataInicio = new Date(inicio);
      var dataFim = new Date(fim);
      // Consulta com filtro
      return res.json()
    } else {
      const leituras = await Leitura.find({});
      return res.json(leituras);
    }
    
  },

  async store(req, res) {
    const { dispositivo, corrente } = req.body;

    const leitura = await Leitura.create({
      dispositivo: dispositivo,
      corrente: corrente
    });

    return res.json(leitura)
  }
};

// {
//   "dispositivo" : " ",
//   "corrente" : " "
// }