const axios = require('axios');;
const Leitura = require('../models/Leitura');

module.exports = {

  async index(req, res) {
    const leituras = await Leitura.find({});
    
    return res.json(leituras);
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