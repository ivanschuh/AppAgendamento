const mongoose = require('mongoose')

const Procedimentos = mongoose.model('Procedimento', {
    procedimento:String,
    preco: String
})

module.exports = Procedimentos