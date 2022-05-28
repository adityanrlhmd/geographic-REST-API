const asyncHandler = require('express-async-handler')

const Geographic = require('../models/geographicModel')

// @desc Get geographic
// @route Get /api/geographic
// @access Private
const getGeographic = asyncHandler(async(req, res) => { 
    const geographic = await Geographic.find()

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
        text: req.body.text,
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
    setGeographic,
    updateGeographic,
    deleteGeographic
}