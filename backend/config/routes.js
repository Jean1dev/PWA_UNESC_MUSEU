const MuseuController = require('../controllers/MuseuController')
const AgendamentoController = require('../controllers/AgendamentoController')
const AnimaisController = require('../controllers/AnimaisController')
const FotoController = require('../controllers/FotoController')
const UsuarioController = require('../controllers/UsuarioController')

module.exports = server =>{

    /*****************************
     * Definir aqui as URL`s rest
     */
    //AGENDAMENTOS
    server.post('/agendamento', AgendamentoController.post)
    server.get('/agendamento', AgendamentoController.getAll)

    //ANIMAIS
    server.post('/animais', AnimaisController.post)
    server.get('/animais', AnimaisController.getAll)

    //USUARIOS
    server.post('/usuarios', UsuarioController.post)
    server.get('/usuarios', UsuarioController.getAll)

    //FOTO
    server.post('/foto', FotoController.post)
    server.get('/foto', FotoController.getAll)

    //INFO MUSEU
    server.post('/museu', MuseuController.post)
    server.get('/museu', MuseuController.getAll)
    
 }