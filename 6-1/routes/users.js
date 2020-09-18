const express = require('express');
const route = express.Router();
const dbconfig=require('../config/database.js');
const connection=mysql.createConnection(dbconfig);

route.get('/users',(req,res)=>{
    connection.query('select * from list',(error,rows)=>{
        if(error) throw error;
        console.log('user info is: ',rows);
        res.send(rows);
    });
});

module.exports=route;