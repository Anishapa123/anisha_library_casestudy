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