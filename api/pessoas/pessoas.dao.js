var mongoose = require('mongoose');
var pessoasSchema = require('./pessoas.model');

pessoasSchema.statics = {
    create : function(data, cb) {
        var pessoa = new this(data);
        pessoa.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var pessoasModel = mongoose.model('Pessoas', pessoasSchema);
module.exports = pessoasModel;
