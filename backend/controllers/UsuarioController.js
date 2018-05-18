const {Usuario} = require('../models')

module.exports = {
  async getAll (req, res) {
    try {
      const obj = await Usuario.findAll()
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
      const obj = await Usuario.findById(req.params.id_Usuario)
      res.send(obj)
    } catch (err) {
      res.status(500).send({
        error: 'Ocorreu um erro ao buscar registro'
      })
    }
  },
  async post (req, res) {
    try {
      const obj = await Usuario.create(req.body)
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
      await Usuario.update(req.body, {
        where: {
          id: req.params.id_Usuario
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