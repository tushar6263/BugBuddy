const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1.27017/BagBuddy');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
         minLength:3,
        trim:true,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    cart: {
        type: Array,
        default: []
    },
    isadmin: {
        type: Boolean
    },
    order: {
        type: Array,
        default: []
    },
    contact: {
        type: Number
    },
    picture: {
        type: String
    }
})

module.exports= mongoose.model('user',userSchema);