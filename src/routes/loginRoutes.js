const express= require('express');
const app = express();
const loginRouter= express.Router();
const user =require('../model/user');
const admin =require('../model/admin');
const validate =require('../model/validate');

function router(nav){
  

loginRouter.get('/',function(req,res){
    res.render("login",{
        nav,
        title:'Library'
      
    });   
});

loginRouter.post('/userdata',function(req,res){
    let useremail=req.body.email;
    let  userpassword =req.body.password;

    user.findOne({useremail: req.body.email }, (err, data) => {
		if (data) {

			if (data.userpassword == req.body.password) {
				//console.log("Done Login");
				// req.body.userId = data.unique_id;
				//console.log(req.session.userId);
				res.send({ "Success": "Success!" });
                res.redirect('/userdata');

			} else {
				res.send({ "Success": "Wrong password!" });
			}
		} else {
			res.send({ "Success": "This Email Is not registered!" });
		}
        
	});
});

    loginRouter.post('/admin',function(req,res){
        let useremail=req.body.email;
        let  userpassword =req.body.password;

        User.findOne({email})
        .then(function(){
            if(useremail=="paanisha414@gmail.com" 
            && userpassword=="123456789"){
                res.redirect('/admin');
                
            }
            else{
                 
           return false;
            }
    
       })
})

return loginRouter;
}

module.exports=router;