var Pessoas = require('./pessoas.controller');

module.exports = function(router) {
    router.post('/create', Pessoas.createPessoa);
    router.get('/get', Pessoas.getPessoas);
    router.get('/get/:name', Pessoas.getPessoa);
    router.put('/update/:id', Pessoas.updatePessoa);
    router.delete('/remove/:id', Pessoas.removePessoa);
}
