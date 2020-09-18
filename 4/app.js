//form에서 데이터 받기
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/index');
const name = require('./routes/name');

app.set('views',__dirname+'/views');
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',routes);
app.use('/name',name);

const port = 3000;
app.listen(port,(req,res)=>{
    console.log('Connected express server at localhost!');
})