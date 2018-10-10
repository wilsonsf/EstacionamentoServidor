'use strict';


var mongoose = require('mongoose'),
    Vaga = mongoose.model('Vaga');

exports.listar_todas_as_vagas = function(req, res) {
  Vaga.find({}, function(err, vaga) {
    if (err)
      res.send(err);
    res.json(vaga);
  });
};

exports.criar_vaga = function(req, res) {
  var new_vaga = new Vaga(req.body);
  var id = new_vaga.andar + "" + new_vaga.numero;
  new_vaga.id = id;
  new_vaga.save(function(err, vaga) {
    if (err)
      res.send(err);
    res.json(vaga);
  });
};


exports.consultar_vaga = function(req, res) {
  Vaga.find({
    id: req.params.vagaId   // Parametro da busca
  }, function(err, vaga) {
    if (err)
      res.send(err);
    res.json(vaga);
  });
};


exports.deletar_vaga = function(req, res) {
  Vaga.remove({
    id: req.params.vagaId
  }, function(err, vaga) {
    if (err)
      res.send(err);
    res.json({ message: 'Vaga ' + req.params.vagaId + ' deletada'});
  });
};

exports.ocupar_vaga = function(req, res) {
  Vaga.findOneAndUpdate({id: req.params.vagaId}, {
    ocupada: true, data_ocupacao: new Date(Date.now())  // O que vai ser mudado
  }, {new: true}, function(err, vaga) {
    if (err)
      res.send(err);
    res.json(vaga);
  });
};

exports.desocupar_vaga = function(req, res) {
  Vaga.findOneAndUpdate({id: req.params.vagaId}, {
    ocupada: false, data_ocupacao: new Date(Date.now())  // O que vai ser mudado
  }, {new: true}, function(err, vaga) {
    if (err)
      res.send(err);
    res.json(vaga);
  });
};

exports.listar_vagas_ocupadas = function(req, res) {
  Vaga.find({ocupada: true}, function(err, vaga) {
    if (err)
      res.send(err);
    res.json(vaga);
  });
};

exports.listar_vagas_desocupadas = function(req, res) {
  Vaga.find({ocupada: false}, function(err, vaga) {
    if (err)
      res.send(err);
    res.json(vaga);
  });
};

exports.quantidade_vagas_desocupadas = function(req, res) {
  Vaga.count({ocupada: false}, function(err, count) {
    if (err)
      res.send(err);
    res.json(count);
  });
};


exports.tempo_ocupacao = function(req, res) {
  Vaga.find({
    id: req.params.vagaId   // Parametro da busca
  }, function(err, vaga) {
    if (err)
      res.send(err);

    var currentDate = new Date(Date.now());
    var minutos = (currentDate.getTime() - vaga[0].data_ocupacao.getTime()) / 60000;

    res.json(Math.floor(minutos));
  });
};
