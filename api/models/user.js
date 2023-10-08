const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        min: 3,

    }
})

module.exports = mongoose.model('User', userSchema);