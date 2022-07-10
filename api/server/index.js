const express = require('express');
const { Sequelize } = require('sequelize');
const {db,users,products, orders}=require('./db');

let server = express();
// server.post('/users',async(req,res)=>{
//     const {firstName,lastName, nickname}=req.body;
//     try{
//         const newUser= await user.create({
//             firstName,
//             lastName,
//             nickname
//         });
//         res.json(newUser);
//     } catch(e){
//         res.json({error:e.message});
//     }
// })
server.listen(3000, async ()=>{
    console.log('escuchando puerto 3000');
    await db.sync({force:true});
    console.log('Base de datos pipi-cucú');
});