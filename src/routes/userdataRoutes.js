const express= require('express');
const app = express();
const userdataRouter= express.Router();
const user =require('../model/user');
function router(navuse){


    // const users = [

    //     {
      
    //       id: 1,
      
    //       name: "John",
      
    //       email: "john@gmail.com"
      
    //     },
      
    //     {
      
    //       id: 2,
      
    //       name: "Smith",
      
    //       email: "smith@gmail.com"
      
    //     },
      
    //     {
      
    //       id: 3,
      
    //       name: "Chris",
      
    //       email: "chris@gmail.com"
      
    //     },
      
    //     {
      
    //       id: 4,
      
    //       name: "Jack",
      
    //       email: "jack@gmail.com"
      
    //     }
      
    //   ];
      
    userdataRouter.get('/',function(req,res){
      res.render('userdata',{
          navuse,
          title:'Library'
      })
  
  });
//   userdataRouter.post('/userdata',function(req,res){
//     let useremail=req.body.email;
//     let  userpassword =req.body.password;
//     console.log('LOGIN HIT')

//     console.log(req.body);


//     user.findOne({useremail: req.body.email }, (err, data) => {
//         console.log(err)
//             console.log(data)
// 		if (data) {
//             console.log(data)

// 			if (data.userpassword == req.body.password) {
// 				console.log("Done Login");
// 				// req.body.userId = data.unique_id;
// 				//console.log(req.session.userId);
// 				res.send({ "Success": "Success!" });
               

// 			} else {
// 				res.send({ "Success": "Wrong password!" });
//                 // return false;
// 			}
//         }
// 		 else {
// 			res.send({ "Success": "This Email Is not registered!" });
// 		}
//         // user.save()
//         // res.redirect('/userdata')
//     });
// });

      userdataRouter.post('/add', (req, res) => {
      const item={
                      name :req.body.name,
                      email : req.body.email,
                      phone : req.body.phone,
                      place : req.body.place
       }
      var newAddress = User(item)
           newAddress.save()
           res.redirect('/userdata');
      
       });

     
 
      //  userdataRouter.post('/update/:id', (req, res) => {
      //   const address = {}
      //   if (req.body.name) address.name = req.body.name
      //   if (req.body.email) address.email = req.body.email
      //   if (req.body.phone) address.phone = req.body.phone
      //   if (req.body.place) address.place = req.body.place
      


     
                    return userdataRouter;
                  }
module.exports= router;