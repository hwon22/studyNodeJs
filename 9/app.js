//사용자가 좋아하는 맛을 입력하여 쿠키에 저장하는 예제
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { parentPort } = require('worker_threads');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.set('views',__dirname+'/views');
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('./index',{favorite:req.cookies.favorite});
});

app.post('/',(req,res)=>{
    favorite=req.body.favorite;
    res.cookie('favorite',favorite);
    res.redirect('/');
});

const port=3000;
app.listen(port, ()=>{
    console.log('Connected express server at localhost!');
});