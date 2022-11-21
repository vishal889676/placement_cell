const Interview = require("../database/interview");
module.exports.addInterview = function (req, res) {
  if (req.user) {
    return res.render("addinterview", {
      title: "Add Student",
    });
  } else {
    return res.redirect("/users/sign-in");
  }
};
module.exports.createInterview = async(req, res)=> {
    try{
    const interview=await Interview.findOne({ company_name: req.body.company_name });
     if(!interview){
        const obj={
            company_name: req.body.company_name,
            date: req.body.interview_date
            
        }

        const newInterview= new Interview(obj);
        await newInterview.save();
        console.log('sucessfully interview add')   
        return res.redirect('/users/profile');     

     }
     return res.redirect("back");
    }catch(err){
        console.log(err)
     return res.redirect("back");
    }
   
  };