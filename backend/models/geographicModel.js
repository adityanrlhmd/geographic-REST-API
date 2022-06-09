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