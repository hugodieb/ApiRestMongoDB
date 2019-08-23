const mongoose = require('mongoose')

let db = mongoose.connection

db.on('error', console.error)

mongoose.connect('mongodb://localhost/noderest')
mongoose.Promise = global.Promise

module.exports = mongoose