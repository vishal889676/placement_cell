const User=require('../database/user');
const Interview=require('../database/interview');
const Student=require('../database/student');
module.exports.createlogin = function(req,res) {
    //req.locals.user=req.user;
    res.render('login');
   
}
module.exports.sinup= function(req,res) {
    res.render('sinup');
}
module.exports.logout= function(req,res) {
    req.logout();
    res.send('<h2>you are logout</h2>');
}
module.exports.createsession= async(req,res)=> {
    try{
    const user= await User.findOne({email:req.body.email });

    res.cookie.user_id =user._id;
    return res.redirect(("/users/profile"));
    } catch(err) {
        console.log("Error in finding user in signing in",err);
        return res.redirect('back');
}
} 
module.exports.createuser= function(req,res) {
    if(req.body.password!=req.body.repeatpassword){
      return res.redirect('back');
    }

    const fun=async()=>{
       try{
           console.log(req.body.email)
          const user=await User.findOne({email:req.body.email })
             if(user){
                      console.log('user already found');
                      return res.render('login');
       
             }else{
                      console.log(user);
                       const person= new User(req.body);
                       await person.save();
                       console.log('user now found');
                     return  res.render('login')   
                  
         }
       } catch(err){
        return res.redirect('back');
       }
   }
   fun()
   }

module.exports.profile= async(req,res)=> {
    try{
        console.log('my cookies ',res.locals.user.id);
    const user=await User.findById(res.locals.user.id);
    console.log('user not found ',user);
    const student=await Student.find({});
    const interview=await Interview.find({});
   return res.render('profile',{
        title: "employe Profile",
         user: user,
       students:student,
        interviews: interview});
    }catch(err){
        console.log(err)
    }
     return res.send('back');
}