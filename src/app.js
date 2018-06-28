const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

//Rotas
const index = require('./routes/index');
const pessoaRota = require('./routes/pessoaRota');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/pessoa', pessoaRota);

module.exports = app;
