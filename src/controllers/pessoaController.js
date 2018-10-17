const pool = require('../db.js').pool
//Definições de variaveis para se utilizar para se utilizar
//No caso pode se criar um model para importar elas
//Coloquei como estaticas apenas para demonstrar como utilizar
var tabela = "pessoas";
var limit = 3;
var orderBy = '';
var pessoaNome;
var pessoaEmail;
var pessoaId;
var pessoaCidade;

exports.get = (req, res, next) => {
  pool.query('select * from ??;',[tabela], function (error, results, fields) {
  	if (error) throw error;
    console.log('Conectado ao banco com sucesso')
    res.status(200).send(results);
  });
};


exports.getById = (req, res, next) => {
  pessoaId = req.params.id;
  pool.query('select * from ?? where id = ?;',[tabela,pessoaId], function (error, results, fields) {
    if (error) throw error;
    console.log('Conectado ao banco com sucesso')
    res.status(200).send(results);
  });
};

exports.getByNome = (req, res, next) => {
  pessoaNome = req.params.id;
  pool.query('select * from ?? where nome = ?;',[tabela,pessoaNome], function (error, results, fields) {
    if (error) throw error;
    console.log('Conectado ao banco com sucesso')
    res.status(200).send(results);
  });
};





exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
