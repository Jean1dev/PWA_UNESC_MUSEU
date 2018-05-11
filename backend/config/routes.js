const MuseuController = require('../controllers/MuseuController')

module.exports = server =>{

    /*****************************
     * Definir aqui as URL`s rest
     */
    //AGENDAMENTOS
    //server.post('/agendamento', AgendamentoController.post)
    //server.get('/agendamento', AgendamentoController.getAll)

    //ANIMAIS
    //server.post('/animais', AnimaisController.post)
    //server.get('/animais', AnimaisController.getAll)

    //INFO MUSEU
    server.post('/museu', MuseuController.post)
    server.get('/museu', MuseuController.getAll)
    
 }