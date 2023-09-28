const { Router } = require('express')
const { fetchShipments } = require('../controllers/shipments')
const router = Router()

router.get('/', fetchShipments)

module.exports = router
