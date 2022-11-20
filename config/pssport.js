var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const User = require('../database/user');

const varifycallback=(email,password,done)=>{
   User.findOne({ email: email}).then((user)=>{
       if(!user) return done(null,false);
        if(!user||user.password!=password) return done(null,false);
     return done(null,user);

   }).catch((err)=>{
    console.log("error by passport callback");
    return done(err)
   })

}
const strategy=new LocalStrategy({usernameField:'email'},varifycallback);
passport.use(strategy);

// Serialized and deserialized methods when got from session
passport.serializeUser(function(user, done) {
    done(null, user.id);
}); 

passport.deserializeUser(function(id, done) {
 //console.log(id)
    User.findById(id).then((user)=>{return done(null, user); }).catch(err=>done(err))
       
    
});
passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
        next()
       // return res.redner('profile');
    }
  return res.redner('login');
}
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
   res.locals.user=req.user;
   
    }
 next()
}
module.exports = passport;