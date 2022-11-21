const express =require('express');
var app = express();
const port=process.env.PORT||27017;
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true}));
const passport =require('passport');
 const session = require('express-session');
const MongoStore = require('connect-mongo')
const db=require('./config/mongo');
const User=require('./database/user');
const localstategy=require('./config/pssport');
app.set('view engine', 'ejs');
// app.get('/interview',function(req,res){
//  res.render('addinterview');
// })

const p=require('./routes')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
       maxAge:1000*60*60*24
     },
     store: new MongoStore({
    mongoUrl: "mongodb://localhost:27017/session",

    // },function(err){
    //   console.log(err||'connect-mongo session');
    // })
     }
)}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',p);
app.use((req,res,next)=>{
 // console.log("enter in session middleware")
 console.log(req.isAuthenticated());
 //console.log( req.cookies.user_id);
  next();
})
//app.use('/',p);

app.listen(PORT, function(err){
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", port);
})

  
