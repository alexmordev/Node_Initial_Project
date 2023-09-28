const express = require('express')
const cors = require('cors')
const { config } = require('../config')
const routes = require('../routes')

class Server {
  constructor () {
    this.app = express()
    this.port = config.dev_port
    this.middlewares()
    this.routes()
  }

  routes = () => {
    this.app.use('/api/v1/', routes)
  }

  middlewares = () => {
    this.app.use(express.static('public'))
    this.app.use(express.json())
    this.app.use(cors())
  }

  listen = () => {
    this.app.listen(this.port, () => {
      console.log('listening on the port', this.port)
    })
  }
}

module.exports = Server
