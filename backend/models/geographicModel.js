const mongoose = require('mongoose')

const geographicSchema = mongoose.Schema({
    latde: {
        type: Number,
        required: [true, 'Please add a latitude value']
    },
    longtde: {
        type: Number,
        required: [true, 'Please add a longitude value']
    },
    year: {
        type: Number,
        required: [true, 'Please add a year value']
    },
    street: {
        type: String,
    },
    text: {
        type: String,
    },
    date: {
        type: Date,
    },
    die: {
        type: Number,
    },
    seriousInj: {
        type: Number,
    },
    minorInj: {
        type: Number,
    },
    materialLoss: {
        type: Number,
    },
    street2: {
        type: String,
    },
    text2: {
        type: String,
    },
    date2: {
        type: Date,
    },
    die2: {
        type: Number,
    },
    seriousInj2: {
        type: Number,
    },
    minorInj2: {
        type: Number,
    },
    materialLoss2: {
        type: Number,
    },
    street3: {
        type: String,
    },
    text3: {
        type: String,
    },
    date3: {
        type: Date,
    },
    die3: {
        type: Number,
    },
    seriousInj3: {
        type: Number,
    },
    minorInj3: {
        type: Number,
    },
    materialLoss3: {
        type: Number,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Geographic', geographicSchema)