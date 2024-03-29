const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')

const schema = new mongoose.Schema({
    username: String,
    password: String,
    favouriteGenre: String
})

schema.plugin(uniqueValidator)

module.exports = mongoose.model('User', schema)