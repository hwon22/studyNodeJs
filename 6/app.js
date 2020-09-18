const express = require('express');
const mysql = require('mysql');
const dbconfig=require('./config/database.js');
const connection=mysql.createConnection(dbconfig);

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('hi node6!');
})

app.get('/users',(req,res)=>{
    connection.query('select * from list',(error,rows)=>{
        if(error) throw error;
        console.log('user info is: ',rows);
        res.send(rows);
    });
});

app.listen(port,()=>{
    console.log('Connected express server at localhost!');
})