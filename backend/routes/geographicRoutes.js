const express = require('express')
const router = express.Router()
const {
    getGeographic,
    setGeographic,
    updateGeographic,
    deleteGeographic,
} = require('../controllers/geographicControllers')

router.route('/').get(getGeographic).post(setGeographic)
router.route('/:id').delete(deleteGeographic).put(updateGeographic)

module.exports = router