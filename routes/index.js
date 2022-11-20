const express =require('express');
const router=express.Router();
const passport =require('passport');
const controler= require('../controler/demo');
const Usercontroler= require('../controler/userControler');
router.use("/users", require("./users"));
router.use("/students", require("./student"));
router.use("/interview", require("./interview"));

// router.get('/home', controler.home)
// router.get('/sin-out', controler.sinout)
// router.get('/sinup', controler.sinup)
// router.post('/profile', Usercontroler.profile)
// //router.post('/cre', controler.createuser)

// router.get('/login',controler.createlogin)
    
// router.post('/create-session',passport.authenticate('local',{failureRedirect:'/login'}),controler.passportsession)
module.exports=router;

