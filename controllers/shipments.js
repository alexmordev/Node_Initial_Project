const { getAllShipments } = require('../services/shipments')
const fetchShipments = async (req, res, next) => {
  try {
    const response = await getAllShipments()
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500) && next(err)
  }
}

module.exports = { fetchShipments }
