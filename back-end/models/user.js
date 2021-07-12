const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    role:{type:Number, default: 2}
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel