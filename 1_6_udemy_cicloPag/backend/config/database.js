const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost/db_finance', {useMongoClient: true})

mongoose.Error.messages.general.required = "O Atrbuto '{PATH}' é Obrigatorio"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minimo '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite maximo '{MAX}'"
mongoose.Error.messages.String.enum = "O '{VALUE}' informado nao é valido para '{VALUE}'"

mongoose.Promise = global.Promise;