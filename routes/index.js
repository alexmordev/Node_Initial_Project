const { Router } = require('express')
const shipments = require('./shipments')

const router = Router()
router.use('/shipments', shipments)

module.exports = router
