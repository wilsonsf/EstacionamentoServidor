'use strict';

module.exports = function(app) {
  var estacionamentoController = require('../controllers/estacionamentoController');

  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*'); //http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });

  app.route('/vaga')
  .get(estacionamentoController.listar_todas_as_vagas)
  .post(estacionamentoController.criar_vaga);

  app.route('/vaga/ocupar/:vagaId')
  .post(estacionamentoController.ocupar_vaga);

  app.route('/vaga/desocupar/:vagaId')
  .post(estacionamentoController.desocupar_vaga);

  app.route('/vaga/ocupada')
  .get(estacionamentoController.listar_vagas_ocupadas);

  app.route('/vaga/desocupada')
  .get(estacionamentoController.listar_vagas_desocupadas);

  app.route('/vaga/desocupada/quantidade')
  .get(estacionamentoController.quantidade_vagas_desocupadas);

  app.route('/vaga/:vagaId')
  .get(estacionamentoController.consultar_vaga)
  .delete(estacionamentoController.deletar_vaga);

  app.route('/vaga/tempo/:vagaId')
  .get(estacionamentoController.tempo_ocupacao);

};
