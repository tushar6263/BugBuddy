const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image: {
        type: Buffer
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
    bgColor: {
        type: String
    },
    panelColor: {
        type: String
    },
    textColor: {
        type: String
    }
})

module.exports = mongoose.model('product', productSchema);