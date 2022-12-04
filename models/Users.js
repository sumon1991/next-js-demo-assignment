const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    userid: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        unique: true,
        optional: true
    },
    email: {
        type: String,
        unique: true,
        optional: true
    },
    password: {
        type: String,
        optional: true
    }
});

mongoose.models = {} // for nextjs
module.exports = mongoose.model('users', UsersSchema);