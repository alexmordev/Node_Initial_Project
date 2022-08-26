const express =  require("express");
const { config } = require( '../config/config' );
const cors = require("cors");
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }
    routes=()=>{
        //rutas visibles para usuarios
        this.app.use( '/users', require('../routes/users.routes') );
    }
    middlewares=()=>{
        this.app.use(express.static("public"));
        this.app.use(express.json());
        this.app.use(cors());
    }
    listen=()=>{
        this.app.listen(this.port, ()=>{
            console.log(`Listening on the port: ${this.port}`);
        })
    }
}
module.exports= Server;