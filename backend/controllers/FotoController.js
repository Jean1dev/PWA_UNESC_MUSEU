const {Foto} = require('../models')
const Ferramentas = require('../ferramentas/ferramentas')

module.exports = {
  async getAll (req, res) {
    try {
      const Foto = await Foto.findAll()
      res.send(Foto)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Ocorreu um erro ao buscar registro'
      })
    }
  },
  async getById (req, res) {
    try {
      const Foto = await Foto.findById(req.params.id_Foto)
      res.send(Foto)
    } catch (err) {
      res.status(500).send({
        error: 'Ocorreu um erro ao buscar registro'
      })
    }
  },
  async post (req, res) {

    object = Ferramentas.getFormatImg(req)

    try {
      const Foto = await Foto.create(object)
      res.send(Foto)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Ocorreu um erro ao criar registro'
      })
    }
  },
  async put (req, res) {
    try {
      await Foto.update(req.body, {
        where: {
          id: req.params.id_Foto
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