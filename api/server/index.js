const express = require('express');
const {db,users,products, orders, sellers}=require('./db');


let server = express();
server.post('/users',async(req,res)=>{
    const {firstName,lastName, nickname}=req.body;
    try{
        const newUser= await user.create({
            firstName,
            lastName,
            nickname
        });
        res.json(newUser);
    } catch(e){
        res.json({error:e.message});
    }
})
server.listen(3000, ()=>{
    console.log('escuchando puerto 3000');
    db.sync({force:true});
});