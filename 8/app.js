//쿠키 기본
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

let count=0;
app.get('/',(req,res)=>{
    if(req.cookies.count){
        count=parseInt(req.cookies.count);
    }else{
        count=0;
    }
    count=count+1;
    res.cookie('count',count);
    res.send('count: '+count);
})

const port=3000;
app.listen(port,()=>{
    console.log('Connected express server at localhost!');
})