require('dotenv').config()

const config = {
  dev_port: process.env.DEVELOP_PORT || 3031,
  SNOWFLAKE: {
    account: process.env.SNOW_FLAKE_ACCOUNT,
    username: process.env.SNOW_FLAKE_USERNAME,
    password: process.env.SNOW_FLAKE_PASSWORD,
    warehouse: process.env.SNOW_FLAKE_WAREHOUSE,
    database: process.env.SNOW_FLAKE_DATABASE,
    schema: process.env.SNOW_FLAKE_SCHEMA,
    port: process.env.SNOW_FLAKE_PORT
  }

}

module.exports = { config }
