const {Museu} = require('../models')

module.exports = {
  async getAll (req, res) {
    try {
      const Jobj = await Museu.findAll()
      res.send(Jobj)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Ocorrou um erro ao buscar registro'
      })
    }
  },
  async getById (req, res) {
    try {
      const Jobj = await Museu.findById(req.params.MuseuId)
      res.send(Jobj)
    } catch (err) {
      res.status(500).send({
        error: 'Ocorreu um erro ao buscar registro'
      })
    }
  },
  async post (req, res) {
    try {
      const Jobj = await Museu.create(req.body)
      res.send(Jobj)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Ocorreu um erro ao criar registro'
      })
    }
  },
  async put (req, res) {
    try {
      await Museu.update(req.body, {
        where: {
          id: req.params.MuseuId
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
