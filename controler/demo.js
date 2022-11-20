const User=require('../database/user');
module.exports.createlogin = function(req,res) {
    //req.locals.user=req.user;
    res.render('login');
   
}
module.exports.sinup= function(req,res) {
    console.log("creatd");
   

    res.render('sinup');
}
module.exports.profile= function(req,res) {
    res.render('profile');
}
//create sinin user 
module.exports.createuser= function(req,res) {
     if(req.body.password!=req.body.repeatpassword){
       return res.redirect('back');
     }
     const fun=async()=>{
        try{
            console.log(req.body.email)
           const user=await User.findOne({email:req.body.email })
              if(user){
                       console.log(user);
                        res.redirect('back');
        
              }else{
                       console.log(user);
                        const person= new User(req.body);
                        await person.save();
                        console.log('user inserted found');
                        res.redirect('/users/profile')   
                  
          }
        } catch(err){
            res.redirect('back');
        }
    }
    fun()
    }
    module.exports.passportsession = function(req,res){
        //console.log(req.user.id);
        res.locals.user=req.user
        
      res.render('home',{title:'vishal'});
    }
    module.exports.home = function(req,res){
    
        res.render('home',{title:'vishal'});
    }
    module.exports.sinout = function(req,res){
        req.logout(function(err) {
     if (err) { return next(err); }
    
        res.render('home',{title:'vishal'});
    })
}
 
 
 

module.exports.createsession=function(req, res) {
    if(req.body.password!=req.body.repeatpassword){
        return res.redirect('back');
      }
      const fun=async()=>{
        try{
            console.log(req.body.email)
           const user=await User.findOne({email:req.body.email })
              if(user){
                //creates session
                       console.log(user);
                        res.redirect('/profile');
        
              }else{
                res.redirect('back')   
                  
          }
        } catch(err){
            res.redirect('back');
        }
    }
    fun()
}