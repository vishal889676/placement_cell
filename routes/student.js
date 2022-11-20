const express = require("express");
const router = express.Router();
const studentcontroler= require('../controler/studentControler');
router.get('/addStudent',studentcontroler.renderAddStudent);
router.post('/createStudent', studentcontroler.createStudent)
router.get('/show-student-details/:id', studentcontroler.studentDetails);
module.exports=router;