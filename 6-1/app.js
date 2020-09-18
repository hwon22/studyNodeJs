const express = require('express');
const mysql = require('mysql');

const users = require('./routes/users');

const app = express();
const port = 3000;

app.use('/users',users);

app.listen(port,()=>{
    console.log('Connected express server at localhost!');
})