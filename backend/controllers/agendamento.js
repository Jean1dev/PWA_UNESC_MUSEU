const {Agendamento} = require('../models/Agendamento')

module.exports = {
  async index (req, res) {
    try {
      const agendamentos = await Agendamento.findAll()
      res.send(agendamentos)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Ocorreu um erro ao buscar registro'
      })
    }
  },
  async show (req, res) {
    try {
      const agendamentos = await Agendamento.findById(req.params.id_agendamento)
      res.send(agendamentos)
    } catch (err) {
      res.status(500).send({
        error: 'Ocorreu um erro ao buscar registro'
      })
    }
  },
  async post (req, res) {
    try {
      const agendamento = await Agendamento.create(req.body)
      res.send(agendamento)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Ocorreu um erro ao criar registro'
      })
    }
  },
  async put (req, res) {
    try {
      await Agendamento.update(req.body, {
        where: {
          id: req.params.id_agendamento
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Ocorreu um errou ao alterar o registro'
      })
    }
  }
}