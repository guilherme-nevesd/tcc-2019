const axios = require('axios');;
const Consumo = require('../models/Consumo');

module.exports = {

  async index(req, res) {
    const { inicio, fim } = req.query;

    if(inicio && fim){
      var dataInicio = new Date(inicio);
      var dataFim = new Date(fim);

      const consumos = await Consumo.find({
        $and:[
          { createdAt: { $gte: dataInicio } },
          { createdAt: { $lte: dataFim } },
        ]
      });

      return res.json(Consumos)

    } else {
      const consumos = await Consumo.find({});
      
      return res.json(consumos);
        
    }
    
  },

  async store(req, res) {
    const { watts } = req.body;

    const consumo = await Consumo.create({
      watts: watts
    });

    return res.json(consumo)
  }
};

// {
//   "watts" : " conteudo "
// }