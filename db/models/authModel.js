const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    }
},{timestamps: true});

const authModel = mongoose.model('authModel',authSchema);
module.exports = {authModel};