const express= require('express');
const app = express();
const loginRouter= express.Router();
const user =require('../model/user');
const admin =require('../model/admin');
const Login =require('../model/login');

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

                    console.log('LOGIN HIT')
                
                    console.log(req.body);
                
                
                    user.findOne({useremail: req.body.email }, (err, data) => {
                        console.log(err)
                            console.log(data)
                		if (data) {
                            console.log(data)
                
                			if (data.userpassword == req.body.password) {
                				console.log("Done Login");
                				// req.body.userId = data.unique_id;
                				//console.log(req.session.userId);
                				// res.send({ "Success": "Success!" });
                               
                
                			// } else {
                			// 	res.send({ "Success": "Wrong password!" });
                            //     // return false;
                			}
                        }
                		 else {
                		return false;
                            // res.send({ "Success": "This Email Is not registered!" });
                		}
                        user.save()
                        res.redirect('/userdata')
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