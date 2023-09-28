const { Snowflake } = require('../utils/snow_flake_connection')

const snowflake = new Snowflake()

const getAll = async () => {
  const err = !(snowflake.connection)
  const sqlText = `SELECT CARRIER_COMPANY_NAME, CARRIER_TRUCK_COUNT  
                    FROM ANALYTICS.CMS.V_CARRIERS 
                    WHERE IS_ACTIVE = 1 
                    AND COUNTRY_CODE = :1 
                    AND CARRIER_TRUCK_COUNT >= :2 
                    ORDER BY CARRIER_TRUCK_COUNT DESC;`
  const binds = ['MX', 30]

  const response = await snowflake.query(sqlText, binds)

  if (err) {
    throw new Error(err)
  }
  return response
}

module.exports = { getAll }
