const mongoose= require('mongoose');

mongoose.connect('mongodb://127.0.0.1.27017/BagBuddy');

const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        minLength:3,
        trim:true,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    products: {
        type: Array,
        default: [],
    },
    picture: {
        type: String,
    },
    gstin:String,
});

module.exports = mongoose.model('owner', ownerSchema);