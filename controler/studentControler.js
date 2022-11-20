const Student=require('../database/student');
module.exports.createStudent= async(req,res) =>{
     console.log('createstudent controller called')
    try{
        const { email } = req.body
        console.log(email);

     const student= await Student.findOne({ email: email});
      //console.log(student);
     if(!student){
        const obj={
            name: req.body.name,
            email: req.body.email,
            batch: req.body.batch,
            status: req.body.placement,
            webd_score: req.body.webd,
            dsa_score: req.body.dsa,
            react_score: req.body.react
        }

        const newStudent= new Student(obj);
        await newStudent.save();
        console.log('sucessfully student add')
     }
     console.log('already student add')
      return res.redirect("/users/profile");
    }catch(err){
        console.log(err)
        return res.redirect("back");
    }
}
module.exports.renderAddStudent =function(req, res){
    res.render('addStudent');
}
module.exports.studentDetails = function (req, res) {
    console.log(req.params.id);
    Student.findOne({ _id: req.params.id }, function (err, student) {
      if (err) {
        console.log("Student not found", err);
        return "/users/profile";
      }
      return res.render("student_details", {
        title: "MY page",
        student: student,
      });
    });
  };