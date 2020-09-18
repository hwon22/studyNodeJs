//html 파일 render시키기
const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/',(req,res)=>{
    res.send('hi node2!');
})

app.get('/about',(req,res)=>{
    res.render('2.html');
})

const port = 3000;
app.listen(port,()=>{
    console.log('Connected express server at localhost!');
})