require('dotenv').config()

const config = {
  dev_port: process.env.DEVELOP_PORT || 3031
}

module.exports = { config }
