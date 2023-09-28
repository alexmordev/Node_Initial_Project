## Instalar dependencias

```jsx
1) npm init
2) npm i express cors dotenv
```

Instalar nodemon en dev environment

```jsx
	npm i --save-dev nodemon
```

## Estructura de archivos

1. Crea .gitignore y agrega
    
    ```jsx
    node_modules
    package-lock.json
    .env
    ```
    
2. Crea las carpetas:
    1. config
    2. controllers
    3. models
    4. services
    5. test
    6. utils
    7. routes
3. Dentro de utils crea server.js
    
    ```jsx
    const express = require('express')
    const { config } = require('../config')
    const cors = require('cors')
    
    class Server {
      constructor () {
        this.app = express()
        this.port = config.dev_port
        this.middlewares()
        this.routes()
      }
    
      routes = () => {
      }
    
      middlewares = () => {
        this.app.use(express.static('public'))
        this.app.use(express.json())
        this.app.use(cors())
      }
    
      listen = () => {
        this.app.listen(() => {
          console.log('listening on the port', this.port)
        })
      }
    }
    
    module.exports = Server
    ```
    
4. En el root crea app.js
    
    ```jsx
    const Server = require('./utils/server')
    const server = new Server()
    server.listen()
    ```
    
5. Crea tu README 
6. Dentro de config crea index.js
    
    ```jsx
    require('dotenv').config()
    
    const config = {
      dev_port: process.env.PORT || 3031
    }
    
    module.exports = { config }
    ```
    
7. En tu root crea .env
    
    ```jsx
    #PROD ENVIRONMENT
    
    #DEVELOP ENVIRONMENT
    DEVELOP_PORT= 3031
    ```


## Estructura de index de routes
## templates para hacer routes, controllers y services
## coneccion estandar a bd
## crear testsm

/**
 Services should contain the majority of your business logic: - logic that encapsulates your business requirements,
 calls your data access layer or models, calls API's external to the Node application. And in general,
 contains most of your algorithmic code.
 */


I think of controllers as "orchestrators". They call the services, which contain more "pure" business logic. But by themselves,controllers don't really contain any logic other than handling the request and calling services. The services do most of the work, while the controllers orchestrate the service calls and decide what to do with the data returned.