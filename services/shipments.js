const { getAll } = require('../models/shipments')
const getAllShipments = async () => {
  const response = await getAll()
  if (!response) {
    throw new Error("can't fetch the shipments")
  }
  return response
}

module.exports = { getAllShipments }
