const express = require("express");
const passport =require('passport');
const router = express.Router();
const Usercontroler= require('../controler/userControler');
const auth=function(req,res){ 
    if(req.isAuthenticated()){
     res.locals.user=req.user;
     console.log('new login',res.locals.user)
   return res.redirect('/users/profile');
            }
    return res.render('login');
}
router.get('/sinup', Usercontroler.sinup)
router.get('/sinout', Usercontroler.logout)
router.get('/login',auth, Usercontroler.createlogin)
router.post('/create',passport.authenticate('local',
{ 

  failureRedirect: '/users/sinup'
}) , Usercontroler.createsession)
router.post('/create-user', Usercontroler.createuser)
router.get('/profile',Usercontroler.profile)


module.exports=router;
