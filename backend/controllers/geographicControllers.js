const asyncHandler = require('express-async-handler')

// @desc Get geographic
// @route Get /api/geographic
// @access Private
const getGeographic = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Get geographic'})
})


// @desc Set geographic
// @route POST /api/geographic
// @access Private
const setGeographic = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    } 
    res.status(200).json({message: 'Set geographic'})
})

// @desc Update geographic
// @route PUT /api/geographic/:id
// @access Private
const updateGeographic = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update geographic ${req.params.id}`})
})

// @desc Delete geographic
// @route DELETE /api/geographic/:id
// @access Private
const deleteGeographic = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete geographic ${req.params.id}`})
})


module.exports = {
    getGeographic,
    setGeographic,
    updateGeographic,
    deleteGeographic
}