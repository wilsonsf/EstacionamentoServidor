'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VagaSchema = new Schema({
  id: {
    type: String
  },
  andar: {
    type: Number,
    required: 'Insira um andar para a vaga'
  },
  numero: {
    type: Number,
    required: 'Insira um numero para a vaga'
  },
  data_criacao: {
    type: Date,
    default: Date.now
  },
  data_ocupacao: {
    type: Date,
    default: Date.now
  },
  ocupada: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Vaga', VagaSchema);
