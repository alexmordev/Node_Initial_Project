const pool = require("../libs/postgres.pool");

class UserService{
    constructor(){
        this.userTable = "worker"; 
        this.pool = pool;
        this.pool.on("error", (err)=>{
            console.log( err );
        })
    }
    createTable= async()=>{
        const sql = `CREATE TABLE ${this.userTable}( 
                                            id serial PRIMARY KEY, 
                                            name VARCHAR (40) NOT NULL,
                                            last_name VARCHAR (40) NOT NULL,
                                            credential INT NOT NULL,
                                            phone_number VARCHAR (20), 
                                            active boolean DEFAULT true
                                        );`;
        const response = await this.pool.query( sql );
        return {command:response.command, rows:response.rows};
    }
    createUser = async( name, lastName, credential, phoneNumber)=>{
        const sql = `INSERT INTO ${this.userTable} VALUES(0,'${name}', '${lastName}', ${credential}, '${phoneNumber}')`;
        const response = await this.pool.query( sql );
        return {command:response.command, rows:response.rows};
    }

    deleteTable = async()=>{
        const sql = `DROP TABLE ${this.userTable}`;
        const response = await this.pool.query( sql );
        return {command:response.command, rows:response.rows};
    }
}
module.exports = UserService;