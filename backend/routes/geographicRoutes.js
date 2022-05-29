const express = require('express')
const router = express.Router()
const {
    getGeographic,
    getGeographicById,
    setGeographic,
    updateGeographic,
    deleteGeographic,
} = require('../controllers/geographicControllers')

router.route('/').get(getGeographic).post(setGeographic)
router.route('/:id').get(getGeographicById).delete(deleteGeographic).put(updateGeographic)

module.exports = router