const {Animais} = require('../models')

module.exports = {
  async getAll (req, res) {
    try {
      const obj = await Animais.findAll()
      res.send(obj)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Ocorreu um erro ao buscar registro'
      })
    }
  },
  async getById (req, res) {
    try {
      const obj = await Animais.findById(req.params.id_Animais)
      res.send(obj)
    } catch (err) {
      res.status(500).send({
        error: 'Ocorreu um erro ao buscar registro'
      })
    }
  },
  async post (req, res) {
    try {
      const obj = await Animais.create(req.body)
      res.send(obj)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Ocorreu um erro ao criar registro'
      })
    }
  },
  async put (req, res) {
    try {
      await Animais.update(req.body, {
        where: {
          id: req.params.id_Animais
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