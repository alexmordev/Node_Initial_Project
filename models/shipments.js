const { Snowflake } = require('../utils/snow_flake_connection')

const snowflake = new Snowflake()

const getAll = async () => {
  const err = !(snowflake.connection)
  const sqlText = 'SELECT * FROM DIGIHAUL.MX_DATA.SHIPMENT WHERE VOLUME_SHIPMENT <= :1'
  const binds = [2300]

  const response = await snowflake.query(sqlText, binds)

  if (err) {
    throw new Error(err)
  }
  return response
}

module.exports = { getAll }