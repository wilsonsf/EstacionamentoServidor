'use strict';
module.exports = function(app) {
  var estacionamentoController = require('../controllers/estacionamentoController');


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
