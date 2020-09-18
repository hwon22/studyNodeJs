//ejs 파일 렌더링하기
const express = require('express');
const app = express();

app.set('views',__dirname+'/views');
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('hi node3!');
})

app.get('/welcome',(req,res)=>{
    res.render('3.ejs',{name:req.query.nameQuery});
})

app.get('/welcome/:nameParam',(req,res)=>{
    res.render('3.ejs',{name:req.params.nameParam});
})

const port = 3000;
app.listen(port,()=>{
    console.log('Connected express server at localhost!');
})