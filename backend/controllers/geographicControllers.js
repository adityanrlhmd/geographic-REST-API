const asyncHandler = require('express-async-handler')

const Geographic = require('../models/geographicModel')

// @desc Get geographic
// @route Get /api/geographic
// @access Private
const getGeographic = asyncHandler(async(req, res) => { 
    const geographic = await Geographic.find()

    if(!geographic) {
        res.status(500)
        throw new Error('Geographic not found')
    }

    res.status(200).json(geographic)
})

const getGeographicById = asyncHandler(async(req, res) => { 
    const geographic = await Geographic.findById(req.params.id)

    if(!geographic) {
        res.status(404)
        throw new Error('Geographic not found')
    }

    res.status(200).json(geographic)
})


// @desc Set geographic
// @route POST /api/geographic
// @access Private
const setGeographic = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    } 

    const geographic = await Geographic.create({
        latde: req.body.latde,
        longtde: req.body.longtde,
        text: req.body.text,
        text2: req.body.text2,
        text3: req.body.text3,

        date: req.body.date,
        die: req.body.die,
        seriousInj: req.body.seriousInj,
        minorInj: req.body.minorInj,
        materialLoss: req.body.materialLoss,

        date2: req.body.date2,
        die2: req.body.die2,
        seriousInj2: req.body.seriousInj2,
        minorInj2: req.body.minorInj2,
        materialLoss2: req.body.materialLoss2,
        
        date3: req.body.date3,
        die3: req.body.die3,
        seriousInj3: req.body.seriousInj3,
        minorInj3: req.body.minorInj3,
        materialLoss3: req.body.materialLoss3,
    })
    res.status(200).json(geographic)
})

// @desc Update geographic
// @route PUT /api/geographic/:id
// @access Private
const updateGeographic = asyncHandler(async(req, res) => {
    const geographic = await Geographic.findById(req.params.id)

    if(!geographic) {
        res.status(400)
        throw new Error('Geographic not found')
    }

    const updateGeographic = await Geographic.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updateGeographic)
})

// @desc Delete geographic
// @route DELETE /api/geographic/:id
// @access Private
const deleteGeographic = asyncHandler(async(req, res) => {
    const geographic = await Geographic.findById(req.params.id)

    if(!geographic) {
        res.status(400)
        throw new Error('Geographic not found')
    }

    await geographic.remove()

    res.status(200).json({ id: req.params.id})
})


module.exports = {
    getGeographic,
    getGeographicById,
    setGeographic,
    updateGeographic,
    deleteGeographic
}