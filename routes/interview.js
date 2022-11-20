const express = require("express");
const router = express.Router();
const interviewcontroler= require('../controler/interviewControler');
//router.post('/profile', Usercontroler.profile)
router.get('/addinterview',  interviewcontroler.addInterview)
router.post('/createInterview',  interviewcontroler.createInterview)
module.exports=router;