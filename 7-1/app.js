//하반기 운동회 참가 신청서
//신청하기 목록보기 수정하기 삭제하기 기능 구현
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dbconfig=require('./config/database.js');
const conn=mysql.createConnection(dbconfig);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('views',__dirname+'/views');
app.set('view engine','ejs');

let sql= {
    list:  'select * from attend order by uid',
    insert: 'insert into attend set ?',
    delete: 'delete from attend where uid=?',
    search:'select * from attend where uid=?'
}

app.get('/',(req,res)=>{
    res.render('route');
});

app.get('/new',(req,res)=>{
    res.render('form');
}); //신청하기 화면

app.post('/new',(req, res)=>{
    const attender={
        "uid":req.body.uid,
        "first_name":req.body.uname,
        "tel":req.body.utel,
    }

    conn.query(sql.insert,attender,(error,results,fields) =>{
        if(error){
            console.log("error",error);
            res.send({
                "code":400,
                "failed":"error"
            })
        }else{
            console.log('the solution is: ',results);
            console.log('회원가입완료');
            res.redirect('/list')
        }
    })
})

app.get('/list',(req, res)=>{
    conn.query(sql.list,(err,rows)=>{
        res.render('list',{lists:rows,title:'신청자 목록'});
    })
}) //목록보기 화면

app.post('/delete/:uid',(req, res)=>{
    const paramId=req.params.uid;
    conn.query(sql.delete, [paramId],(err)=>{
        if(err){console.log(err);return;}
        console.log('Deleted!!!');
        res.redirect('/list');
    })
 })

 app.get('/update',(req,res)=>{
    res.render('edit');
}); //신청하기 화면

 app.post('/update',(req, res)=>{
   
    const uname=req.body.uname;
    const utel=req.body.utel;
    const uid=req.body.uid;
    const datas = [uid,uname,utel,uid];

    var update = "update attend set uid=?, first_name=?,tel=? where uid=?";

    conn.query(update,datas,(error,results,fields) =>{
        if(error){
            console.log("error",error);
            res.send('재 등록하세요.')
        }else{
            console.log('the solution is: ',results);
            console.log("수정완료");
            res.redirect('/list')
        }
    })
})


app.listen(port,()=>{
    console.log('Connected express server at localhost!');
})