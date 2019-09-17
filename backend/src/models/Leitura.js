const { Schema, model } = require('mongoose');

const LeituraSchema = new Schema({
  dispositivo: {
    type: String,
    required: true,
  },
  corrente: {
    type: String, 
    required: true,
  },
},{
  timestamps: true,
});

module.exports = model('Leitura', LeituraSchema);