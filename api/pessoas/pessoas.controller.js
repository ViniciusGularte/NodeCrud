var Pessoas = require('./pessoas.dao');

exports.createPessoa = function (req, res, next) {
    var pessoa = {
        name: req.body.name,
        description: req.body.description
    };

    Pessoas.create(pessoa, function(err, pessoa) {
        if(err) {
            res.json({
                error : err
            })
        }
        else{
          res.json({
              message : "Pessoa criada com sucesso"
          })
        }
    })
}

exports.getPessoas = function(req, res, next) {
    Pessoas.get({}, function(err, pessoas) {
        if(err) {
            res.json({
                error: err
            })
        }
        else{
          res.json({
            pessoas: pessoas
          })
        }
    })
}

exports.getPessoa = function(req, res, next) {
    Pessoas.get({name: req.params.name}, function(err, pessoas) {
        if(err) {
            res.json({
                error: err
            })
        }
        else{
          res.json({
              pessoas: pessoas
          })
        }
    })
}

exports.updatePessoa = function(req, res, next) {
    var pessoa = {
        name: req.body.name,
        description: req.body.description
    }
    Pessoas.update({_id: req.params.id}, pessoa, function(err, pessoa) {
        if(err) {
            res.json({
                error : err
            })
        }
        else{
          res.json({
              message : "Pessoa atualizada com sucesso"
          })
        }
    })
}

exports.removePessoa = function(req, res, next) {
    Pessoas.delete({_id: req.params.id}, function(err, pessoa) {
        if(err) {
            res.json({
                error : err
            })
        }
        else{
          res.json({
              message : "Pessoa deletada com sucesso"
          })
        }
    })
}
