const mongoose = require('mongoose')

const Agenda = mongoose.model('Agenda', {
    name:String,
    data: String,
})


module.exports = Agenda