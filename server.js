var express=require('express')
var passport=require('passport')
var session=require('express-session')
var app=express()
require('./middleware')
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true ,cookie:{maxAge:60*60*24}}));
app.use(passport.initialize())
app.use(passport.session())

function loggedin(req,res,next){

    req.user ?
next():
res.sendStatus(401);
}

app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
  });


app.get('/auth/google',passport.authenticate('google',{scope:['email','profile']}))

app.get('/google/callback',passport.authenticate('google',{

    successRedirect:('/seeder'),
    failureRedirect:('/Google/failure'),

}))
app.get('/seeder',loggedin,(req,res)=>{

    res.send(`<img src=${req.user.picture}></img>`)
})
app.get('/Google/failure',(req,res)=>{
    res.send('failed')
})
app.get('/logout',(req,res)=>{
    req.logOut()
    req.session.destroy()
    res.send("thanks for logged in")
})
app.listen(3000,()=>{
console.log("server is runnig at this port: ");
})
