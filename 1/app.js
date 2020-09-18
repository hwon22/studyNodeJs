//기본
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hi node!');
})

const port = 3000;
app.listen(port,()=>{
    console.log('Connected express server at localhost!');
})