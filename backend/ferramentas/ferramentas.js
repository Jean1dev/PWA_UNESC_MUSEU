fs = require('fs')

module.exports.getFormatImg = function(toParam){
    let date = new Date()
    let timestamp = date.getTime();

    var url_imagem = time_stamp + '_' + toParam.files.arquivo.originalFilename;
    var path_origem = toParam.files.arquivo.path;
    var path_destino = './images/' + url_imagem;

    fs.rename(path_origem, path_destino, function(err){
        if(err){
            res.status(500).json({ error : err });
            return;
        }

        var dados = {
            url_imagem: url_imagem,
            titulo: toParam.body.titulo
        }
    })
    
    return dados
}