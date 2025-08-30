const mongoose = require('mongoose');

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
   cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        default: []
    }],

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