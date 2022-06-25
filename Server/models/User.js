const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name:String,
    email: String,
    password: String
})

const Procedimento = mongoose.model('Procedimento', {
    name: String,
    tempo: String
})

module.exports = User, Procedimento