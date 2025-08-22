const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String
    },
    discount: {
        type: Number,
        default: 0
    },
    price: {
        type: Number
    },
    bgcolor: {
        type: String
    },
    panelcolor: {
        type: String
    },
    textcolor: {
        type: String
    }
})

module.exports = mongoose.model('product', productSchema);