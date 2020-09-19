//세션_ 로그인 예제 filestore
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();

app.use(session({
    secret:'afaajle',
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}));

app.use(bodyParser.urlencoded({extended:false}));

const user={
    username:'kim',
    password:1111,
    displayName:'WISH'
}

app.get('/login',(req, res)=>{
    let output=`
    <form method="post" acton="/login">
    <p>
    <input type="text" name="username" placeholder="username">
    </p>
    <p>
    <input type="password" name="password" placeholder="password" placeholder="password">
    </p>
    <p>
    <button type="submit">Login </button>
    </p>
    </form>    
        `;
        res.send(output);
})
app.post('/login',(req, res)=>{
    let uname=req.body.username;
    let pwd=req.body.password;
    if(uname==user.username && pwd==user.password) {
       req.session.displayName=user.displayName;
       res.redirect('/welcome');
    }
    else {
        res.send('who are you?<a href="/login">Login</a>');
    }
})
app.get('/welcome',(req, res)=>{
    if(req.session.displayName) {
         res.send(`
         <h1>${req.session.displayName}님<h1>
         반갑습니다
         <a href="logout">Logout</a>
         `)
    }
    else { 
          res.send(`
          <h1>Welcome</h1>
          <a href="/login">Login</a>
          `)
    }
})
app.get('/logout', (req, res)=>{
    delete req.session.displayName;
    res.redirect('/login');
})
app.listen(3000, () => {
    console.log('Connected express server at localhost!');
})