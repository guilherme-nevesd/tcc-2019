const { Schema, model } = require('mongoose');

const ConsumoSchema = new Schema({
  watts: {
    type: String,
    required: true,
  },
},{
  timestamps: true,
});

module.exports = model('Consumo', ConsumoSchema);