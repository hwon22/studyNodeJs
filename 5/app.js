//show databases;
//use new; --use 데이터베이스 이름 --데이터베이스 접속
//show tables; --데이터베이스의 테이블 목록 출력
//select database(); --현재 데이터베이스 위치 출력

//create database new; --데이터베이스 생성
//use new; --데이터베이스 접속
/*create table new(
    id varchar(45) not null,
    password varchar(45) not null,
    primary key(id));
    --테이블 생성
*/
//desc new; --테이블 구조 확인
//insert into new(id,password) values('ungmo2','1234'); --데이터 삽입
//select password from new where id='ungmo2'; --데이터 검색

const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'new'
});

connection.connect();

connection.query('select * from list',(error,rows,fields)=>{
    if(error) throw error;
    console.log('new info is: ',rows);
});

connection.end();