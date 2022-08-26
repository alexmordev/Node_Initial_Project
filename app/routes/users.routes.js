const { Router } = require("express");  
const router = Router();
const UserService = require("../services/users.service");
const user = new UserService();

router.post( "/createUser", async(req, res, next)=>{
    try{
        const {name,lastname, credential, phoneNumber} = req.body;
        const table = await user.createUser(name,lastname, credential, phoneNumber);
        res.status(200).send(table);
    }catch(err){
        next(err);
    }
} );

router.get( "/createUserTable",  async(req, res, next)=>{
    try{
        const table = await user.createTable();
        res.status(200).send(table);
    }catch(err){
        next(err);
    }
} );
router.get( "/deleteUserTable",  async(req, res, next)=>{
    try{
        const table = await user.deleteTable();
        res.status(200).send(table);
    }catch(err){
        next(err);
    }
} )
module.exports= router