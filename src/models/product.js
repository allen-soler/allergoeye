const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product