const mongoose = require('mongoose')

const geographicSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },
    price: {
        type: Number,
        required: [true, 'Please add a number value']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Geographic', geographicSchema)