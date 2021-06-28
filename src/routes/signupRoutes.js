const express= require('express');
const app = express();
 const signupRouter= express.Router();
const validate =require('../model/validate');

 
 function router(nav){
 
 
 signupRouter.get('/',function(req,res){
    res.render("signup",{
        nav,
        title:'Library'
     
     
    });   
});
signupRouter.post('/signup',function(req,res){
    var check ={
    email:req.body.email,
    password:req.body.password,
    address:req.body.address,
    phone:req.body.phone
}
         var sign= user(check);
         sign.save()
         book.save();
         res.redirect('/userdata');
     });


return signupRouter;
}

module.exports=router;