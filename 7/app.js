//nodejs mysql 회원가입과 로그인 만들기
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dbconfig=require('./config/database.js');
const connection=mysql.createConnection(dbconfig);

const app= express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('views',__dirname+'/views');
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.send('hi node6!');
});

app.get('/login',(req,res)=>{
    res.render('loginForm');
})

app.get('/register',(req,res)=>{
    res.render('joinForm');
})

app.post('/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    connection.query('select * from users where email=?',email,
        (error,results,fields)=>{
            if(error){
                res.send({
                    "code":400,
                    "failed":"error"
                })
                throw error;
            }else{
                if(results.length>0){
                    if(results[0].password==password){
                        res.send(req.body.email+'님 환영합니다.')
                    }else{
                        res.send('이메일 또는 비밀번호 오류입니다.')
                    }
                }else{
                    res.send('해당 계정은 존재하지 않습니다.')
                }
            }
    })
});


app.post('/register',(req,res)=>{
    const users={
        "first_name":req.body.first_name,
        "email":req.body.email,
        "password":req.body.password
    }
    connection.query('insert into users set ?',users,(error,results,fields)=>{
        if(error){
            console.log("error",error);
            res.send({
                "code":400,
                "failed":"error"
            })
        }else{
            console.log('the solution is: ',results);
            console.log('회원가입완료');
            res.redirect('/login')
        }
    })
})

app.listen(port,()=>{
    console.log('Connected express server at localhost!');
})